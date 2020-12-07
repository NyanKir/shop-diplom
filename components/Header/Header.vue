<template>
  <header class="header">
    <div class="header_navigation">
      <div class="burger-menu" @click="showMenu=true">
        <div />
        <div />
        <div />
      </div>
      <div class="logo">
        <NuxtLink to="/" class="logo_link">
          <img :src="logo" alt="Logo" class="logo_img">
        </NuxtLink>
      </div>
      <MobileMenu :show-menu="showMenu" @handler="HandlerMenu" />
      <Menu />
      <Panel />
    </div>
  </header>
</template>

<script>
import logo from 'static/store-logo.jpg'
import Menu from '@/components/Header/Menu'
import Panel from '@/components/Header/Panel'
import MobileMenu from '@/components/Header/Mobile/MobileMenu'

export default {
  name: 'Header',
  components: { MobileMenu, Panel, Menu },
  data () {
    return {
      logo,
      showMenu: false
    }
  },
  methods: {
    HandlerMenu () {
      this.showMenu = false
    }
  }

}
</script>

<style lang="scss">

.mobile-menu{
  display: none;
}

 .header_navigation, .header_nav, .header_nav-right{
  display: flex;
}

.header_navigation {
  align-items: center;
  justify-content: space-between;
  padding: 20px 0 0 0;
}

.burger-menu{
  display: none;
  cursor: pointer;

  div{
    margin: 5px 0;
    width: 25px;
    height: 2px;
    background: black;
  }
}
.logo_img{
  width: 200px;
}

.mobile_menu{
  display: none;
  flex-direction: column;
  position: absolute;
  background: $white;
  width: 300px;
  top: 0;
  left: 0;
  bottom: 0;
}

.menu_link {
  color: $black;
  font-size: 13px;
  letter-spacing: 0.6px;
  text-decoration: none;
  font-weight: 500;
  line-height: 15px;
}
.menu_list,  .menu_link>ul{
  background: white;
  width: 100%;
  list-style: none;
  padding-left: 15px;
}
.menu_link:hover span{
  color: $main;
}

@media (max-width: 992px) {
  .mobile_menu{
    display: flex;
  }
  .menu{
    display: none;
  }
  .burger-menu{
    display: block;
  }
  .menu_list-item{
    padding: 6px 0;
  }
  .right-side{
    float: right;
    margin-right: 5px;
    transform: translateY(5px);
  }

  .panel_item {
    margin: 0 5px;
  }
}

@media (max-width: 427px){
  .logo_img{
    width: 125px;
  }
}
.dropDown-enter-active,
.dropDown-leave-active {
  transition: all .3s ease-out;
}

.dropDown-leave-to,
.dropDown-enter{
  opacity: 0;
}
.dropDown-enter-to{
  opacity: 1;
}

</style>
