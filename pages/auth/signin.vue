<template>
  <section class="form">
    <h1 class="h1">
      Log in to your account
    </h1>
    <form class="login-form">
      <label for="email" class="login-form_label">
        <span>Email <sup>*</sup></span>
        <input id="email" v-model="email" type="email" class="login-form_input">
      </label>
      <label for="pass" class="login-form_label">
        <span>Password <sup>*</sup></span>
        <input id="pass" v-model="password" :type="showPassword" class="login-form_input">
        <button type="button" class="login-form_show-btn" :class="(visiblePassword)?'active':''" @click="visiblePassword=!visiblePassword">
          <font-awesome-icon v-if="!visiblePassword" :icon="['far', 'eye']" size="sm" />
          <font-awesome-icon v-else :icon="['far', 'eye-slash']" size="sm" />
        </button>
      </label>
      <a href="" class="menu_link fnt-400">
        <span>
          Forgot your password?
        </span>
      </a>
      <button type="submit" class="login-form_submit">
        Sig in
      </button>
    </form>
    <NuxtLink to="/auth/signup" class="menu_link">
      <span>
        No account? Create one here
      </span>
    </NuxtLink>
  </section>
</template>

<script>
export default {
  name: 'Signin',
  data () {
    return {
      email: '',
      password: '',
      visiblePassword: false
    }
  },
  computed: {
    showPassword () {
      return (this.visiblePassword) ? 'text' : 'password'
    }
  },
  layout: 'shop'
}
</script>

<style lang="scss">

</style>

<style scoped lang="scss">
  .h1{
    text-align: left;
    width: 100%;
    margin-bottom: 25px;
  }

  .active{
    background: $black;
  }

  .menu_link{
    font-weight: 400;
  }

</style>
