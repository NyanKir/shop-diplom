<template>
  <div class="panel">
    <div class="panel_item">
      <font-awesome-icon :icon="['fas', 'search']" size="lg" />
    </div>
    <div class="panel_item">
      <font-awesome-icon :icon="['far', 'user']" size="lg" />
    </div>
    <div class="panel_item">
      <font-awesome-icon :icon="['fas', 'shopping-cart']" size="lg" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Panel'
}
</script>

<style lang="scss" scoped>
.panel{
  display: flex;

}
.panel_item{
  margin: 0 13px;
}
.panel_item:hover{
  color: $main;
}
</style>
