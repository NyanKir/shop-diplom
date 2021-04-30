<template>
  <div class="quantity">
    <select
      id="quantity"
      name="quantity"
      class="select"
      @change="$emit('changeCountOption', +$event.target.value,options,id)"
    >
      <option :selected="start===-1" disabled>
        Choose Quantity
      </option>
      <option
        v-for="i in 9"
        :key="i"
        :value="i"
        :selected="start === i"
      >
        {{ i }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'Select',
  props: ['id', 'start', 'options']
}
</script>

<style  lang="scss">
.quantity{
  display: flex;
  flex-direction: row;
  align-items: center;
}

.select{
  border-color: $gray-85;
  height: 2.5em;
  text-transform: capitalize;
  width: 110px;
}

</style>
