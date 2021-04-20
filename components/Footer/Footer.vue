<template>
  <footer class="footer container">
    <information />
    <Mailing />
    <Basement />
  </footer>
</template>

<script>
import Mailing from './Mailing'
import Basement from './Basement'
import Information from './Information'
export default {
  name: 'Footer',
  components: { Information, Basement, Mailing }
}
</script>

<style scoped>
  .footer{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    margin-top: 10px
  }
</style>
