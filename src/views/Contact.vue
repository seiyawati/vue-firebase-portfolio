<template>
    <v-container>
        <h1 class="contact">Contact</h1>
        <p  class="explain">
            お仕事の依頼などはこちらからよろしくお願い致します！<br>
            プロフィール欄にあるtwitterにDMを送ってもらっても構いません。
        </p>
        <v-layout wrap>
            <v-flex>
                <form class="form">
                    <v-text-field
                        v-model="name"
                        :error-messages="nameErrors"
                        :counter="10"
                        label="お名前*"
                        required
                        @input="$v.name.$touch()"
                        @blur="$v.name.$touch()"
                    ></v-text-field>
                    <v-text-field
                        v-model="email"
                        :error-messages="emailErrors"
                        label="メールアドレス*"
                        required
                        @input="$v.email.$touch()"
                        @blur="$v.email.$touch()"
                    ></v-text-field>
                    <v-textarea
                    v-model="container"
                    :error-messages="containerErrors"
                    name="input-7-1"
                    label="お問い合わせ内容*"
                    required
                    @input="$v.container.$touch()"
                    @blur="$v.container.$touch()"
                    ></v-textarea>
                    <v-btn color="primary" class="mr-4" @click="submit">送信</v-btn>
                </form>
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

  export default {
    mixins: [validationMixin],

    validations: {
      name: { required, maxLength: maxLength(10) },
      email: { required, email },
      container: { required }
    },

    data: () => ({
      name: '',
      email: '',
      container: ''
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
      submit () {
        this.$v.$touch()
      },
      clear () {
        this.$v.$reset()
        this.name = ''
        this.email = ''
        this.container = ''
      },
    },
  }
</script>