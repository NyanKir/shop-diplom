<template>
  <section class="login">
    <h1 class="h1">
      Log in to your account
    </h1>
    <form action="" class="login-form">
      <label for="email" class="login-form_label">
        <span>Email</span>
        <input id="email" v-model="email" type="email" class="login-form_input">
      </label>
      <label for="pass" class="login-form_label">
        <span>Password</span>
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
    <a href="" class="menu_link">
      <span>
        No account? Create one here
      </span>
    </a>
  </section>
</template>

<script>
export default {
  name: 'Sigin',
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

<style scoped lang="scss">
  .login{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .login-form{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
  }
  .login-form_input{
    width: 300px;
    outline: none;
    padding: 5px 2.5px;
    transition: .3s;
    border: 1px solid #9aabb1;

    &:focus{
      border: 1px solid $main;
    }
  }
  .login-form_label{
    position: relative;
    display: flex;
    justify-content: space-between;
    min-width: 400px;
    margin-bottom: 10px;
  }
  .login-form_submit, .login-form_show-btn{
    min-width: 100px;
    border: none;
    margin: 20px 0 0 0;
    padding: 10px 12px;
    font-weight: 500;
    background: $main;
    color:$white;
    text-transform: uppercase;
    text-align: center;
    cursor: pointer;
    transition: .3s;

    &:hover{
      background: $black;
      transition: .3s;
    }
  }

  .login-form_show-btn{
    position: absolute;
    min-width: 30px;
    height: 100%;
    padding: 0;
    margin: 0;
    right: -30px;
    background: $main;
  }
  .active{
    background: $black;
  }
</style>
