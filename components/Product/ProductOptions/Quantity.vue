<template>
  <div class="quantity">
    <span class="quantity_title">Quantity</span>
    <div class="quantity_option">
      <input type="text" class="input" :value="quantity" @change="$emit('quantityChanged',$event.target.value)">
      <div class="quantity_option-handler">
        <button class="quantity_option-handler-btn" @click="$emit('changeQuantity', true)">
          <font-awesome-icon :icon="['fas', 'chevron-up']" size="xs" />
        </button>
        <button class="quantity_option-handler-btn" @click="$emit('changeQuantity',false)">
          <font-awesome-icon :icon="['fas', 'chevron-down']" size="xs" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Quantity',
  props: ['quantity']
}
</script>

<style scoped lang="scss">
.quantity{
  display: flex;
  flex-direction: row;
  align-items: center;
}
.input{
    width: 50px;
}
.quantity_title{
  font-size: 13px;
}

.quantity_option{
  display: flex;
  margin-left: 30px;
}
.quantity_option-handler{
  margin-left: 5px;
  display: flex;
  flex-direction: column;
}
.quantity_option-handler-btn{
  cursor: pointer;
  background: white;
  border: 1px solid $gray;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 19px;
  width: 20px;
  &:first-child{
    margin-bottom: 2px;
  }
}
</style>
