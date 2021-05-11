<template>
  <section class="list">
    <div v-for="product in data" :key="product._id" class="list_item">
      <div class="list_img">
        <img :src="product.gallery[0]" :alt="product.title">
      </div>
      <div class="list_description">
        <NuxtLink class="link" :to="'/product/'+product.title+'?id='+product._id">
          <span class="list_title">
            {{ product.title }}
          </span>
        </NuxtLink>
        <Price :price="product.price" :discount="product.discountPrice" />
        <!--        <ul class="list_options">-->
        <!--          <li-->
        <!--            v-for="(name,value) in getOptionsWithOutCount(product._id)"-->
        <!--            :key="value"-->
        <!--            class="list_options-item"-->
        <!--          >-->
        <!--            {{ value.charAt(0).toUpperCase()+value.slice(1) }}:-->
        <!--            {{ name.charAt(0).toUpperCase()+name.slice(1) }}-->
        <!--          </li>-->
        <!--        </ul>-->
      </div>

      <button class="list_trash" @click="removeFromCart(product._id)">
        <font-awesome-icon :icon="['fas', 'trash']" size="lg" />
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'WishList',
  props: ['data']
}
</script>

<style scoped>

</style>
