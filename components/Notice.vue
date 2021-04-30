<template>
  <transition name="fade">
    <div v-show="showNotice" class="notice">
      <h3 class="h3">
        {{ getTitle }}
      </h3>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Notice',
  computed: {
    getTitle () {
      return this.$store.state.user.titleNotice
    },
    showNotice () {
      return this.$store.state.user.showNotice
    }
  }
}
</script>

<style scoped lang="scss">
    .notice{
      background: $gray-f2;
      padding: 10px;
      margin: 10px 0;
      width: 100%;
    }
    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
      opacity: 0;
    }
</style>
