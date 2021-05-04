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
        <div class="login-form_field">
          <input
            id="fname"
            v-model="firstName"
            type="text"
            class="input"
            placeholder="First name"
            :class="{'input__invalid':error.param==='firstName'}"
          >

          <span v-show="error.param === 'firstName'" class="login-form_field-error">{{ error.msg }}</span>
        </div>
      </label>
      <label for="lname" class="login-form_label">
        <span>Last name <sup>*</sup></span>
        <div class="login-form_field">
          <input
            id="lname"
            v-model="lastName"
            type="text"
            class="input"
            placeholder="Last name"
            :class="{'input__invalid':error.param==='lastName'}"
          >
          <span v-show="error.param === 'lastName'" class="login-form_field-error">{{ error.msg }}</span>

        </div>
      </label>
      <label for="email" class="login-form_label">
        <span>Email <sup>*</sup></span>
        <div class="login-form_field">
          <input
            id="email"
            v-model="email"
            type="email"
            class="input"
            placeholder="Email"
            :class="{'input__invalid':error.param==='email'}"
          >
          <span v-show="error.param === 'email'" class="login-form_field-error">{{ error.msg }}</span>
        </div>
      </label>

      <label for="pass" class="login-form_label">
        <span>Password <sup>*</sup></span>
        <div class="login-form_field">
          <input
            id="pass"
            v-model="password"
            :type="showPassword"
            class="input"
            placeholder="Password"
            :class="{'input__invalid':error.param==='password'}"
          >
          <span v-show="error.param === 'password'" class="login-form_field-error">{{ error.msg }}</span>
        </div>
        <!--        <button type="button" class="btn btn__show-pass" :class="(visiblePassword)?'active':''" @click="visiblePassword=!visiblePassword">-->
        <!--          <font-awesome-icon v-if="!visiblePassword" :icon="['far', 'eye']" size="sm" />-->
        <!--          <font-awesome-icon v-else :icon="['far', 'eye-slash']" size="sm" />-->
        <!--        </button>-->
      </label>

      <label for="bdate" class="login-form_label">
        <span>Birthdate</span>
        <div class="login-form_field">
          <input
            id="bdate"
            v-model="birthDate"
            type="text"
            class="input"
            placeholder="MM/DD/YYYY"
            :class="{'input__invalid':error.param==='birthDate'}"
          >
          <span v-show="error.param === 'birthDate'" class="login-form_field-error">{{ error.msg }}</span>
        </div>
      </label>

      <button type="submit" class="btn">
        Sig in
      </button>
      <h3 class="h3">
        Already have an account?
        <NuxtLink to="/auth/signin" class="link">
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
      firstName: '',
      lastName: '',
      birthDate: '',
      radio: true,
      visiblePassword: false,
      error: {}
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
        const result = await this.$axios({
          method: 'post',
          url: '/api/user',
          data: {
            email: this.email,
            password: this.password,
            firstName: this.firstName,
            lastName: this.lastName,
            birthDate: this.birthDate
          },
          headers: {
            'Content-Type': 'application/json'
          }
        })

        if (result.status === 201) {
          await this.$router.push('/auth/signin')
          await this.$store.dispatch('user/showNotice', 'Success! :)')
        }
      } catch (e) {
        this.error = { ...e.response.data.errors }
      }
    }
  },
  layout: 'shop'
}
</script>

<style scoped lang="scss">
.login-form_field{
  display: flex;
  flex-direction: column;
}
.login-form_field-error{
  font-size: 13px;
  color: #fa1414;
}
.input__invalid{
  box-shadow: 0 0 1px red;
  border-color:red;
}

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
