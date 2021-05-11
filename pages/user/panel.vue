<template>
  <section class="control">
    <BreadCrumbs>
      Your account
    </BreadCrumbs>
    <Panel />
    <button class="btn control_btn" @click="deleteCookie">
      Sign out
    </button>
  </section>
</template>

<script>
import Panel from '@/components/User/Panel'
export default {
  name: 'User',
  components: { Panel },
  layout: 'sidebar',
  methods: {
    deleteCookie () {
      this.$logOut()
    }
  },
  head () {
    return {
      title: 'Panel'
    }
  }
}
</script>

<style scoped lang="scss">
  .control{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  .control_btn{
    background: $b-22;
  }
</style>
