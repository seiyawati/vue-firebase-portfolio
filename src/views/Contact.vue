<template>
    <v-container>
        <h1 class="contact">Contact</h1>
        <p  class="explain">お問い合わせはこちらからお願いします！</p>
        <v-layout wrap>
            <v-flex>
                <form class="form">
                    <v-text-field
                        v-model="name"
                        :error-messages="nameErrors"
                        :counter="10"
                        label="Name"
                        required
                        @input="$v.name.$touch()"
                        @blur="$v.name.$touch()"
                    ></v-text-field>
                    <v-text-field
                        v-model="email"
                        :error-messages="emailErrors"
                        label="E-mail"
                        required
                        @input="$v.email.$touch()"
                        @blur="$v.email.$touch()"
                    ></v-text-field>
                    <!-- <v-text-field
                        v-model="container"
                        :error-messages="containerErrors"
                        label="Container"
                        required
                        @input="$v.container.$touch()"
                        @blur="$v.container.$touch()"
                    ></v-text-field> -->
                    <v-textarea
                    v-model="container"
                    :error-messages="containerErrors"
                    name="input-7-1"
                    label="Content"
                    required
                    @input="$v.container.$touch()"
                    @blur="$v.container.$touch()"
                    ></v-textarea>
                    <v-btn color="success" class="mr-4" @click="submit">submit</v-btn>
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
    width: 500px;
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
        !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
        !this.$v.name.required && errors.push('Name is required.')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid e-mail')
        !this.$v.email.required && errors.push('E-mail is required')
        return errors
      },
      containerErrors () {
        const errors = []
        if (!this.$v.container.$dirty) return errors
        !this.$v.container.required && errors.push('Content is required')
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