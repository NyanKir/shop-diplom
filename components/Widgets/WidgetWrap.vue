<template>
  <div class="widget_wrap">
    <h4 class="h4">
      {{ title }}
    </h4>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'WidgetWrap',
  props: ['title']
}
</script>

<style scoped>
.h4{
  padding: 5px 0;
}

</style>
