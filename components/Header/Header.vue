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
import Menu from '@/components/Header/Menu/Menu'
import Panel from '@/components/Header/Panel'
import MobileMenu from '@/components/Header/MobileMenu/MobileMenu'

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
.header{
  margin-bottom: 50px;
}
 .header_navigation, .header_nav, .header_nav-right,.menu_list, .dropdown{
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
  border-right: 1px solid $gray;
  position: absolute;
  background: $white;
  width: 300px;
  top: 0;
  left: 0;
  bottom: 0;
}

.menu{
  position: relative;
}

.link {
  color: $black;
  font-size: 13px;
  letter-spacing: 0.6px;
  text-decoration: none;
  font-weight: 500;
  line-height: 15px;
  &:hover span{
    color: $main;
  }
}

.menu_list,  .menu_list>.link>ul{
  height: auto;
  width: 100%;
  overflow: hidden;
  background: $white;
  list-style: none;
  padding-left: 0;
}

.menu_list-item{
  margin: 0 13px;
}

.dropdown{
  background: $white;
  position: absolute;
  width: 100%;
  left: 0;
  right: 0;
  top: 40px;
  justify-content: space-between;

  a{
    text-decoration: none;
  }
}
.dropdown_header{
  color:$main;
}

.rm-indents{
  list-style: none;
  padding: 0;
}

.right-side{
  float: right;
}

.menu_list-item{
  padding: 6px 0;
}
@media (max-width: 992px) {
  .menu_list{
    flex-direction: column;
  }
  .mobile_menu{
    z-index: 2;
    display: flex;
  }
  .menu{
    display: none;
  }
  .burger-menu{
    display: block;
  }

  .right-side{
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
//Animations
.dropDown-enter-active,
.dropDown-leave-active {
  transition: all 0.4s ease;
}
.dropDown-enter-to,
.dropDown-leave {
    max-height: 500px;
}
.dropDown-enter,
.dropDown-leave-to {
  max-height: 0;
}
//
.backInTop-enter-active,
.backInTop-leave-active {
  transition: all .3s ease-out;
}
.backInTop-leave-to,
.backInTop-enter{
  opacity: 0;
  transform: translateY(-20px);
}
.backInTop-leave,
.backInTop-enter-to{
  opacity: 1;
  transform: translateY(0px);
}
//
.backInLeft-enter-active,
.backInLeft-leave-active {
  transition: all .3s ease-out;
}
.backInLeft-leave-to,
.backInLeft-enter{
  transform: translateX(-300px);
}

.backInLeft-enter-to{
  transform: translateX(0);
}
</style>
