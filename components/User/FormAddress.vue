<template>
  <Form class="login-form information_form" @updateAddress="updateAddress">
    <Label v-for="(item,index) in info" :key="+index" :item="item">
      <Input :mask="'######'" :item="item" :error="error" />
    </Label>
    <button class="btn">
      Save
    </button>
  </Form>
</template>

<script>
import Label from '@/components/Forms/Label'
import Form from '@/components/Forms/Form'
import Input from '@/components/Forms/Input'

export default {
  name: 'FormAddress',
  components: { Label, Form, Input },
  data () {
    return {
      info: [{
        id: 'country',
        label: 'Country',
        placeholder: 'Country',
        value: ''
      },
      {
        id: 'city',
        label: 'City',
        placeholder: 'City',
        value: ''
      },
      {
        id: 'state',
        label: 'State',
        placeholder: 'State',
        value: ''
      },
      {
        id: 'code',
        label: 'ZIP/Postal Code',
        placeholder: 'Code',
        value: ''
      }],
      error: {}
    }
  },
  mounted () {
    this.getAddress()
  },
  methods: {
    async getAddress () {
      try {
        const res = await this.$axios.$get('api/address', { params: { id: this.$store.state.user.userId } })
        this.info = this.info.map((el) => {
          return {
            ...el,
            value: res.address[el.id]
          }
        })
      } catch (e) {
        console.log(e)
      }
    },
    async updateAddress () {
      try {
        const data = this.info.reduce((acc, el) => {
          return Object.assign(acc, {
            [el.id]: el.value
          })
        }, {})

        data.id = this.$store.state.user.userId
        await this.$axios.$patch('api/address', data)
        this.error = {}
        await this.$store.dispatch('user/showNotice', 'Success! Your data was updated :)')
      } catch (e) {
        this.error = { ...e.response.data.errors }
        console.log(e)
      }
    }
  }
}
</script>

<style scoped>

</style>
