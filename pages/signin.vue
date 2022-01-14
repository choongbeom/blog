<template>
  <v-app id="signin">
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12" color="grey darken-2">
            <v-toolbar color="grey darken-3">
              <v-toolbar-title>Signin form</v-toolbar-title>
            </v-toolbar>

            <v-card-text>
              <v-form>
                <v-text-field
                  v-model="email"
                  prepend-icon="mdi-account-outline"
                  name="email"
                  label="E-mail"
                  :rules="emailRules"
                />
                <v-text-field
                  v-model="password"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  prepend-icon="mdi-lock-outline"
                  name="password"
                  label="Password"
                  :type="showPassword ? 'text' : 'password'"
                  hint="At least 4 characters"
                  counter
                  :rules="[rules.required, rules.min]"
                  @click:append="showPassword = !showPassword"
                  @keyup.enter="submit"
                />
              </v-form>
            </v-card-text>

            <v-card-actions>
              <v-btn width="40%" color="red" @click="cancel">
                cancel
              </v-btn>
              <v-spacer />
              <v-btn width="40%" color="primary" :loading="loading" @click="submit">
                Signin
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'Signin',
  layout: 'empty',
  data () {
    return {
      loading: false,
      showPassword: false,
      email: '',
      password: '',
      rules: {
        required: value => !!value || '비밀번호를 입력하세요.',
        min: v => (v && v.length >= 4) || '4자리 이상 입력하세요.'
      },
      emailRules: [
        v => !!v || '이메일을 입력하세요.',
        v => /.+@.+\..+/.test(v) || '이메일을 올바르게 입력해주세요.'
      ]
    }
  },
  mounted () {
    // Close modal with 'esc' key
    document.addEventListener('keydown', (e) => {
      if (e.keyCode === 27) {
        this.$router.push('/')
      }
    })
  },
  methods: {
    async submit () {
      try {
        this.loading = true
        const reg = await this.$store.dispatch('auth/doSignin', {
          fields: {
            userId: this.email,
            userPw: this.password
          }
        })

        console.log(reg)

        this.loading = false

        alert('로그인을 하였습니다.')
        if (reg === true) { this.$router.push('/') }
      } catch (error) {
        this.loading = false
        this.show_error = true
        alert(error.msg)
      }
    },
    cancel () {
      this.$router.push('/')
    }
  }
}
</script>

<style>
</style>
