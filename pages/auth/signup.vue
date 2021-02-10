<template>
  <section class="form">
    <h1 class="h1">
      Log in to your account
    </h1>

    <form action="" class="login-form">
      <label for="fname" class="login-form_label">
        <span>Social title <sup>*</sup></span>
        <div class="login-form_group">
          <label for="mr" class="login-form_group-label">
            <input id="mr" v-model="radio" type="radio" value="mr" class="radiobutton">
            <span>Mr</span>
          </label>
          <label for="mrs" class="login-form_group-label">
            <input id="mrs" v-model="radio" type="radio" value="mrs" class="radiobutton">
            <span>Mrs</span>
          </label>
        </div>
      </label>
      <label for="fname" class="login-form_label">
        <span>First name <sup>*</sup></span>
        <input id="fname" v-model="fname" type="text" class="login-form_input">
      </label>
      <label for="lname" class="login-form_label">
        <span>Last name <sup>*</sup></span>
        <input id="lname" v-model="lname" type="text" class="login-form_input">
      </label>
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

      <label for="bdate" class="login-form_label">
        <span>Birthdate</span>
        <input id="bdate" v-model.number="bdate" type="text" class="login-form_input" placeholder="MM/DD/YYYY">
      </label>

      <button type="submit" class="login-form_submit">
        Sig in
      </button>
      <h3 class="h3">
        Already have an account?
        <NuxtLink to="/auth/signin" class="menu_link">
          <span>
            Log in instead!
          </span>
        </NuxtLink>
      </h3>
    </form>
  </section>
</template>

<script>
export default {
  name: 'Signup',
  data () {
    return {
      email: '',
      password: '',
      fname: '',
      lname: '',
      bdate: '',
      radio: '',
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
.h1{
  text-align: left;
  width: 100%;
  margin-bottom: 25px;
}
.h3, .menu_link{
  font-weight: 400;

}
.h3{
  font-size: 13px;
  margin-top: 10px;
}

.active{
  background: $black;
}
.login-form_submit{
  margin: 5px 0;
}
.login-form_group{
  width: 67%;
}
.login-form_group-label{
  display: flex;
  align-items: center;
}
.radiobutton{
  margin-right: 10px;
}
</style>
