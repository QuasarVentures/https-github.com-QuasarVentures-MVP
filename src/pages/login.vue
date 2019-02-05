<script>
export default {
  name: 'page-login',
  data () {
    return {
      loginForm: {
        email: null,
        password: null,
        isPwd: true
      }
    }
  }
}
</script>

<template lang="pug">
q-page.flex.flex-center
  q-card
    q-card-section
      q-input(
        v-model="loginForm.email"
        type="email"
        :label="$t('loginForm.email')"
      )
      q-input(
        v-model="loginForm.password"
        :type="loginForm.isPwd ? 'password' : 'text'"
        :label="$t('loginForm.password')"
      )
        q-icon(
          slot="append"
          :name="loginForm.isPwd ? 'visibility_off' : 'visibility'"
          class="cursor-pointer"
          @click="loginForm.isPwd = !loginForm.isPwd"
        )
    q-card-actions
      q-btn(:label="$t('loginForm.login.label')")
    q-separator
    q-card-section
</template>

<style lang="stylus">

</style>
