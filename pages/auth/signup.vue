<template>
  <section class="form">
    <h1 class="h1">
      Log in to your account
    </h1>

    <form class="login-form" @submit.prevent="fetchData">
      <label for="fname" class="login-form_label">
        <span>Social title <sup>*</sup></span>
        <div class="login-form_group">
          <label for="mr" class="login-form_group-label">
            <input
              id="mr"
              v-model="radio"
              type="radio"
              :value="true"
              class="radiobutton"
              :checked="radio"
            >
            <span>Mr</span>
          </label>
          <label for="mrs" class="login-form_group-label">
            <input
              id="mrs"
              v-model="radio"
              type="radio"
              :value="false"
              class="radiobutton"
              :checked="!radio"
            >
            <span>Mrs</span>
          </label>
        </div>
      </label>
      <label for="fname" class="login-form_label">
        <span>First name <sup>*</sup></span>
        <input id="fname" v-model="firstName" type="text" class="input">
      </label>
      <label for="lname" class="login-form_label">
        <span>Last name <sup>*</sup></span>
        <input id="lname" v-model="lastName" type="text" class="input">
      </label>
      <label for="email" class="login-form_label">
        <span>Email <sup>*</sup></span>
        <input id="email" v-model="email" type="email" class="input">
      </label>

      <label for="pass" class="login-form_label">
        <span>Password <sup>*</sup></span>
        <input id="pass" v-model="password" :type="showPassword" class="input">
        <button type="button" class="btn btn__show-pass" :class="(visiblePassword)?'active':''" @click="visiblePassword=!visiblePassword">
          <font-awesome-icon v-if="!visiblePassword" :icon="['far', 'eye']" size="sm" />
          <font-awesome-icon v-else :icon="['far', 'eye-slash']" size="sm" />
        </button>
      </label>

      <label for="bdate" class="login-form_label">
        <span>Birthdate</span>
        <input id="bdate" v-model="birthDate" type="text" class="input" placeholder="MM/DD/YYYY">
      </label>

      <button type="submit" class="btn">
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

  middleware: 'authenticated',

  data () {
    return {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      birthDate: '',
      radio: true,
      visiblePassword: false
    }
  },
  computed: {
    showPassword () {
      return (this.visiblePassword) ? 'text' : 'password'
    }
  },
  methods: {
    async fetchData () {
      try {
        await this.$axios.$post('api/user', JSON.stringify({
          email: this.email,
          password: this.password,
          firstName: this.firstName,
          lastName: this.lastName,
          birthDate: this.birthDate
        }), {
          headers: {
            'Content-Type': 'application/json'
          }
        })
      } catch (e) {
        console.log(e)
      }
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
