<template>
  <div class="widget_wrap">
    <h4 v-if="title" class="h4">
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

<style scoped lang="scss">
  .widget_wrap{
    margin: 10px 0;
    align-items: center;

    &:first-child{
      margin: 0 0 10px 0;
    }
  }
  .h4{
    font-size: 16px;
    background: $gray-f2;
    padding: 15px;
    margin-bottom: 10px;
  }
</style>
