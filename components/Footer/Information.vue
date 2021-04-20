<template>
  <div class="information">
    <div class="container container__screen information_pos">
      <div class="information_block">
        <div class="information_block-phone">
          <h3 class="h3 information_title">
            Store Information
          </h3>
          <button type="button" class="btn information_btn" @click="showStore=!showStore">
            +
          </button>
        </div>
        <div class="information_block-el information_show" :class="{'show':showStore}">
          <font-awesome-icon :icon="['fas', 'map-marker-alt']" size="xs" class="information_marker" />
          <span>Demo Store
            <br>
            42 Puffin Street 12345 Puffinville France
            <br>

            United States</span>
        </div>
        <div class="information_block-el information_show" :class="{'show':showStore}">
          <font-awesome-icon :icon="['fas', 'phone']" size="xs" class="information_marker" />
          <span>Call Us: 0123-456-789</span>
        </div>
        <div class="information_block-el information_show" :class="{'show':showStore}">
          <font-awesome-icon :icon="['fas', 'envelope']" size="xs" class="information_marker" />
          <NuxtLink to="/" class="link">
            Email Us:  <span>Sales@Yourcompany.Com</span>
          </NuxtLink>
        </div>
      </div>
      <div class="information_block">
        <div class="information_block-phone">
          <h3 class="h3 information_title">
            Products
          </h3>
          <button type="button" class="btn information_btn" @click="showProducts=!showProducts">
            +
          </button>
        </div>
        <nav class="menu information_show" :class="{'show':showProducts}">
          <ul class="menu_list">
            <li v-for="[index,text] of products.entries()" :key="index" class="menu_list-item">
              <NuxtLink to="/" class="link">
                <span>{{ text }}</span>
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
      <div class="information_block">
        <div class="information_block-phone">
          <h3 class="h3 information_title">
            Our Company
          </h3>
          <button type="button" class="btn information_btn" @click="showCompany=!showCompany">
            +
          </button>
        </div>
        <nav class="menu information_show" :class="{'show':showCompany}">
          <ul class="menu_list">
            <li v-for="[index,text] of company.entries()" :key="index" class="menu_list-item">
              <NuxtLink to="/" class="link">
                <span>{{ text }}</span>
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
      <div class="information_block">
        <div class="information_block-phone">
          <h3 class="h3 information_title">
            Clients Says
          </h3>
          <button type="button" class="btn information_btn" @click="showSays=!showSays">
            +
          </button>
        </div>
        <div class="information_client-say information_show" :class="{'show':showSays}">
          <div class="information_client-block">
            <div class="information_client-text">
              <img src="/quote.svg" alt="quote" class="information_quote">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, tempore?
                <p class="information_client-name">
                  - Lorem ipsum.
                </p>
              </span>
            </div>
          </div>
          <div class="information_client-block">
            <div class="information_client-text">
              <img src="/quote.svg" alt="quote" class="information_quote">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, tempore?
                <p class="information_client-name">
                  - Lorem ipsum.
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Information',
  data () {
    return {
      products: ['Delivery', 'Legal Notices', 'Price Drop', 'New Products', 'Best Sales'],
      company: ['About us', 'Contact us', 'Stores', 'Sitemap', 'Login'],
      showSays: false,
      showProducts: false,
      showStore: false,
      showCompany: false
    }
  }
}
</script>

<style scoped lang="scss">

  .information{
    background: #f2f2f2;
  }
  .menu_list{
    background: transparent;
    flex-direction: column;
  }
  .menu_list-item {
    padding: 0;
    margin: 2px 0;

  }
  .link{
    font-weight: 300;
    font-size: 13px;
    letter-spacing: 0.3px;

  }
  .information_title{
    font-size: 15px;
    text-transform: capitalize;
    font-weight: 500;
    margin-bottom: 16px;
    letter-spacing: 0.3px;

  }
  .information_pos{
    padding: 10px 0 30px;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
  .information_block{
    flex: 1 1 auto;
    margin: 0 10px;
  }
  .information_block-el{
    span{
      font-size: 13px;
    }
  }
  .information_marker{
    color:$main;
    margin-right: 5px;
  }
  .information_client-say{
    display: flex;
    flex-direction: column;
  }
  .information_client-block{
    margin-top: 8px;
    display: flex;
    flex-direction: column;
  }
  .information_client-text{
    display: flex;
    font-size: 12px;

    span{
      margin-left: 8px;
      width: 200px;
    }
  }
  .information_client-name{
    margin-top: 4px;
    font-size: 13px;
    font-weight: 500;
  }
  .information_quote{
    width: 100%;
    max-width: 30px;
    height: 30px;
  }
  .information_btn{
    display: none;
    margin: 0;
    padding: 0;
  }
  .information_block-phone{
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
  @media (max-width: 992px){
    .information .show{
      display: flex;
    }
    .information_block-el{
      margin-top: 4px;
    }
    .information_block{
      width: 100%;
      margin-top: 10px;
    }
    .information_btn{
      min-width: 20px;
      height: 20px;
      display: block;
    }
    .information_show{
      display: none;
    }
    .menu {
      display: none;
    }
    .information_pos{
      flex-direction: column;
    }
  }

</style>
