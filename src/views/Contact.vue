<template>
    <v-container>
        <h1 class="contact">Contact</h1>
        <p  class="explain">
            お仕事の依頼などはこちらからよろしくお願い致します！<br>
            プロフィール欄にあるtwitterにDMを送って頂いても構いません。
        </p>
        <v-layout wrap>
            <v-flex>
                <form class="form">
                    <v-text-field
                        v-model="contactForm.name"
                        :error-messages="nameErrors"
                        :counter="10"
                        label="お名前*"
                        required
                        @input="$v.name.$touch()"
                        @blur="$v.name.$touch()"
                    ></v-text-field>
                    <v-text-field
                        v-model="contactForm.email"
                        :error-messages="emailErrors"
                        label="メールアドレス*"
                        required
                        @input="$v.email.$touch()"
                        @blur="$v.email.$touch()"
                    ></v-text-field>
                    <v-textarea
                        v-model="contactForm.container"
                        :error-messages="containerErrors"
                        label="お問い合わせ内容*"
                        required
                        @input="$v.container.$touch()"
                        @blur="$v.container.$touch()"
                    ></v-textarea>
                    <v-btn color="primary" class="mr-4" @click="sendMail">送信</v-btn>
                </form>
                <v-snackbar
                v-model="snackBar.show"
                :color="snackBar.color"
                bottom
                right
                :timeout="6000"
                class="font-weight-bold"
                >
                    {{snackBar.message}}
                </v-snackbar>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<style scoped>
.contact {
    text-align: center; 
    font-size: 40px;
}

.explain {
    text-align: center;
}

.form {
    width: 300px;
    margin: 0 auto;
}
</style>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, email } from 'vuelidate/lib/validators'
  import { functions } from '../firebase/index'

  export default {
    mixins: [validationMixin],

    validations: {
      name: { required, maxLength: maxLength(10) },
      email: { required, email },
      container: { required }
    },

    data: () => ({
        contactForm: {
            name: '',
            email: '',
            container: ''
        },
        snackBar: {
            show: false,
            color: '',
            message: ''
        }
    }),

    computed: {
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.maxLength && errors.push('お名前は10字以内で入力してください。')
        !this.$v.name.required && errors.push('入力必須です。')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('正しい形式で入力してください。')
        !this.$v.email.required && errors.push('入力必須です。')
        return errors
      },
      containerErrors () {
        const errors = []
        if (!this.$v.container.$dirty) return errors
        !this.$v.container.required && errors.push('入力必須です。')
        return errors
      },
    },

    methods: {
      sendMail: function () {
        const mailer = functions.httpsCallable('sendMail')
        mailer(this.contactForm)
            .then(() => {
              this.clear()
              this.showSnackBar(
                'success',
                'お問い合わせありがとうございます。送信完了しました'
              )
            })
            .catch(err => {
              this.showSnackBar(
                'error',
                '送信に失敗しました。時間をおいて再度お試しください'
              )
              console.log(err)
            })
        },
        showSnackBar: function (color, message) {
            this.snackBar.message = message
            this.snackBar.color = color
            this.snackBar.show = true
        },
        clear () {
            this.$v.$reset()
            this.contactForm.name = ''
            this.contactForm.email = ''
            this.contactForm.container = ''
        },
    },
  }
</script>