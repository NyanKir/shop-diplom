<template>
  <nav class="menu">
    <ul class="menu_list">
      <li class="menu_list-item" @mouseover="hover=true" @mouseleave="hover=false">
        <NuxtLink to="/" class="menu_link">
          <span>Structural</span>
        </NuxtLink>
        <transition name="backInTop">
          <ul v-show="hover" class="dropdown mobile_menu__inner">
            <li class="dropdown_item">
              <a href="">Header</a>
              <ul>
                <li>
                  <NuxtLink to="/" class="menu_link">
                    Home
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/" class="menu_link">
                    Home
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/" class="menu_link">
                    Home
                  </NuxtLink>
                </li>
              </ul>
            </li>
            <li class="dropdown_item">
              <a href="">Header</a>
              <ul>
                <li>
                  <NuxtLink to="/" class="menu_link">
                    Home
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/" class="menu_link">
                    Home
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/" class="menu_link">
                    Home
                  </NuxtLink>
                </li>
              </ul>
            </li>
            <li class="dropdown_item">
              <a href="dropdown_item-link">Header</a>
              <ul>
                <li>
                  <NuxtLink to="/" class="menu_link">
                    Home
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/" class="menu_link">
                    Home
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/" class="menu_link">
                    Home
                  </NuxtLink>
                </li>
              </ul>
            </li>
          </ul>
        </transition>
      </li>
      <li class="menu_list-item">
        <NuxtLink to="/" class="menu_link">
          <span>Refractory</span>
        </NuxtLink>
      </li>
      <li class="menu_list-item">
        <NuxtLink to="/" class="menu_link">
          <span>Electrical</span>
        </NuxtLink>
      </li>
      <li class="menu_list-item">
        <NuxtLink to="/" class="menu_link">
          <span>Magnetic</span>
        </NuxtLink>
      </li>
      <li class="menu_list-item">
        <NuxtLink to="/" class="menu_link">
          <span>Abrasives</span>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Menu',
  data () {
    return {
      hover: false
    }
  }
}
</script>

<style lang="scss" scoped>
.menu{
  position: relative;
}
.menu_list,.dropdown{
  display: flex;
}
.menu_list-item{
  margin: 0 13px;
}

.dropdown{
  position: absolute;
  width: 100%;
  left: 0;
  right: 0;
  top: 40px;
  background: white;
  justify-content: space-between;

  a{
    text-decoration: none;
  }
}

.backInTop-enter-active,
.backInTop-leave-active {
  transform-origin: top;
  transition: all .5s ease-out;
}
.backInTop-leave-to,
.backInTop-enter{
  opacity: 0;
  transform: rotateX(-90deg);
}
.backInTop-enter-to{
  opacity: 1;
  transform: rotateX(0deg);
}
</style>
