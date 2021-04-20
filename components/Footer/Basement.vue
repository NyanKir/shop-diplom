<template>
  <div class="basement">
    <nav class="menu">
      <ul class="menu_list">
        <li v-for="[index,text] of data.entries()" :key="index" class="menu_list-item">
          <NuxtLink to="/" class="link">
            <span>{{ text }}</span>
          </NuxtLink>
        </li>
      </ul>
    </nav>
    <NuxtLink to="/" class="link">
      <span class="copyright">
        © 2021 - Ecommerce software by PrestaShop™
      </span>
    </NuxtLink>

    <div class="payment">
      <NuxtLink to="/">
        <img src="/payment.png" alt="payment">
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Basement',
  data () {
    return {
      data: ['Home', 'Contact-Us', 'About-us', 'Best-Sales', 'Price-Drop', 'Best-Sales']
    }
  }
}
</script>

<style scoped lang="scss">
  .menu_list-item{

    &:not(:first-child):before{
      content: '|';
      font-weight: 300;
      position: absolute;
      transform: translateX(-14px);
    }
  }
  .link{
    color:#222222;
    font-weight: 300;
  }
  .basement{
    padding: 25px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-top: 1px solid $gray;
  }
  .link{
    padding: 15px 0 ;

  }
  .copyright{
    font-size: 12px;
    font-weight: 300;
  }
</style>
