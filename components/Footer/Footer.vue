<template>
  <footer class="footer">
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
    margin-top: 50px
  }
</style>
