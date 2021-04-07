<template>
  <form class="form">
    <label for="vol"><slot /></label>
    <div>
      <div><span>$0</span> - <span>${{ value }}</span></div>
      <input
        id="vol"
        v-model="value"
        type="range"
        name="vol"
        min="0"
        max="50"
      >
    </div>
  </form>
</template>

<script>
export default {
  name: 'PriceSlider',
  data () {
    return {
      value: 0
    }
  }
}
</script>

<style scoped>
  .form{
    align-items: flex-start;
    margin-left: 13px;
  }
</style>
