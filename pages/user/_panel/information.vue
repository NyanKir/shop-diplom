<template>
  <section class="information">
    <BreadCrumbs>
      Information
    </BreadCrumbs>
    <form v-if="info !== undefined" class="login-form information_form" @submit.prevent="updateUser">
      <label class="login-form_label">
        <span>Social title</span>
        <div class="login-form_group">
          <label for="mr" class="login-form_group-label">
            <input
              id="mr"
              v-model="info.gender"
              type="radio"
              :value="'Mr'"
              class="radiobutton"
            >
            <span>Mr</span>
          </label>
          <label for="mrs" class="login-form_group-label">
            <input
              id="mrs"
              v-model="info.gender"
              type="radio"
              :value="'Mrs'"
              class="radiobutton"
            >
            <span>Mrs</span>
          </label>
        </div>
      </label>
      <label for="fname" class="login-form_label">
        <span>First name</span>
        <div class="login-form_field">
          <input
            id="fname"
            v-model="info.firstName"
            type="text"
            class="input"
            placeholder="First name"
            :class="{'input__invalid':error.param==='firstName'}"
          >
          <span v-show="error.param === 'firstName'" class="login-form_field-error">{{ error.msg }}</span>

        </div>
      </label>
      <label for="lname" class="login-form_label">
        <span>Last name</span>
        <div class="login-form_field">
          <input
            id="lname"
            v-model="info.lastName"
            type="text"
            class="input"
            placeholder="Last name"
            :class="{'input__invalid':error.param==='lastName'}"
          >
          <span v-show="error.param === 'lastName'" class="login-form_field-error">{{ error.msg }}</span>

        </div>
      </label>
      <label for="email" class="login-form_label">
        <span>Email</span>
        <div class="login-form_field">
          <input
            id="email"
            v-model="info.email"
            type="email"
            class="input"
            placeholder="Email"
            :class="{'input__invalid':error.param==='email'}"
          >
          <span v-show="error.param === 'email'" class="login-form_field-error">{{ error.msg }}</span>
        </div>
      </label>
      <label for="bdate" class="login-form_label">
        <span>Birthdate</span>
        <div class="login-form_field">
          <input
            id="bdate"
            v-model="info.birthDate"
            v-mask="'##/##/####'"
            type="text"
            class="input"
            placeholder="MM/DD/YYYY"
          >
        </div>
      </label>
      <button class="btn">
        Save
      </button>
    </form>
  </section>
</template>

<script>
export default {
  name: 'Information',
  layout: 'sidebar',
  css: ['~assets/forms/index.scss'],
  data () {
    return {
      info: undefined,
      error: {}
    }
  },
  mounted () {
    this.getUser()
  },
  methods: {
    async getUser () {
      this.info = await this.$axios.$get('api/user', { params: { id: this.$store.state.user.userId } })
    },
    async updateUser () {
      try {
        await this.$axios.$patch('api/user', {
          _id: this.info._id,
          email: this.info.email,
          firstName: this.info.firstName,
          lastName: this.info.lastName,
          birthDate: this.info.birthDate,
          gender: this.info.gender
        })
        await this.$store.dispatch('user/showNotice', 'Success! Your data was updated :)')
        this.error = {}
      } catch (e) {
        this.error = { ...e.response.data.errors }
        console.log(e)
      }
    }
  }

}
</script>

<style scoped lang="scss">
  .login-form_label-text{
    font-size: 14px;
  }
</style>
