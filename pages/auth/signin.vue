<template>
  <section class="form">
    <BreadCrumbs>
      Log in to your account
    </BreadCrumbs>

    <form class="login-form" @submit.prevent="fetchData">
      <label for="email" class="login-form_label">
        <span class="login-form_label-text">Email <sup>*</sup></span>
        <div class="login-form_field">
          <input
            id="email"
            v-model="email"
            type="email"
            class="input"
            placeholder="Email"
            :class="{'input__invalid':error.type==='email'}"
          >
          <span v-show="error.type==='email'" class="login-form_field-error">{{ error.msg }}</span>
        </div>

      </label>
      <label for="pass" class="login-form_label">
        <span class="login-form_label-text">Password <sup>*</sup></span>
        <div class="login-form_field">
          <input
            id="pass"
            v-model="password"
            :type="showPassword"
            class="input"
            placeholder="Password"
            :class="{'input__invalid':error.type==='password'}"
          >
          <span v-show="error.type === 'password'" class="login-form_field-error">{{ error.msg }}</span>
        </div>
        <!--        <button-->
        <!--          type="button"-->
        <!--          class="btn btn__show-pass"-->
        <!--          :class="(visiblePassword)?'active':''"-->
        <!--          @click="visiblePassword=!visiblePassword"-->
        <!--        >-->
        <!--          <font-awesome-icon v-if="!visiblePassword" :icon="['far', 'eye']" size="sm" />-->
        <!--          <font-awesome-icon v-else :icon="['far', 'eye-slash']" size="sm" />-->
        <!--        </button>-->
      </label>
      <a href="" class="link fnt-400">
        <span>
          Forgot your password?
        </span>
      </a>
      <button type="submit" class="btn">
        Sig in
      </button>
    </form>
    <NuxtLink to="/auth/signup" class="link">
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
        // const result = await this.$axios('/api/signin', JSON.stringify({
        //   email: this.email,
        //   password: this.password
        // }), {

        // })
        const result = await this.$axios({
          method: 'post',
          url: '/api/signin',
          data: {
            email: this.email,
            password: this.password
          },
          headers: {
            'Content-Type': 'application/json'
          }
        })
        if (result.status === 200) {
          await this.$router.push('/')
          await this.$store.commit('user/changeAuthentication', true)
          await this.$store.dispatch('user/showNotice', 'Success, you are log in! :)')
        }
      } catch (e) {
        if (e.response.status === 400) {
          this.error = e.response.data
        }
      }
    }
  },
  layout: 'shop'
}
</script>

<style lang="scss">

</style>

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
.login-form_label-text{
  font-size: 14px;
}

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
