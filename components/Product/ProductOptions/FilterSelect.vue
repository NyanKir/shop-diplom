<template>
  <div>
    <select
      v-if="name!=='color'"
      id="quantity"
      name="quantity"
      class="select"
      @change="$emit('changeOptions',name,$event.target.value)"
    >
      <option selected disabled>
        Choose your {{ name }}
      </option>
      <option v-for="(value,item) in data" :key="item" :value="value.value" :selected="item===options[name]">
        {{ value.value }}
      </option>
    </select>
    <div v-else class="colors">
      <input
        v-for="(val,color) in data"
        :key="color"
        type="checkbox"
        class="checkbox checkbox__color"
        :style="{'--backColor': val.value}"
        :value="val.value"
        :checked="options[name]===val.value"
        @change="$emit('changeOptions',name,$event.target.value)"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'FilterSelect',
  props: ['name', 'data', 'options']
}
</script>

<style scoped>
  .select{
    width: 150px;
  }
  .colors{
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
  }
  .checkbox{
    width: 20px;
    height: 20px;
    margin: 0 4px;
  }
  input[type='checkbox'].checkbox__color:after {
    width: 20px;
    height: 20px;
  }
</style>
