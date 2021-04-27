<template>
  <div class="panel">
    <div class="panel_item">
      <span>
        <font-awesome-icon :icon="['fas', 'search']" size="lg" class="panel_item-svg" />
      </span>
    </div>
    <div class="panel_item ">
      <span>
        <font-awesome-icon :icon="['fas', 'user']" size="lg" class="panel_item-svg" @click="on=!on" />
      </span>
      <transition name="backInTop">
        <ul v-show="on" class="dropdown rm-indents">
          <li>
            <NuxtLink to="/auth/signin" class="link fnt-weg-400">
              <span>
                <font-awesome-icon :icon="['fas', 'unlock-alt']" size="lg" class="dropdown_link-svg" />
                Sign in
              </span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/wishlist" class="link fnt-weg-400">
              <span>
                <font-awesome-icon :icon="['fas', 'heart']" size="lg" class="dropdown_link-svg" />
                Wishlist
              </span>
            </NuxtLink>
          </li>
        </ul>
      </transition>
    </div>
    <div class="panel_item">
      <NuxtLink to="/cart">
        <span>
          <font-awesome-icon :icon="['fas', 'shopping-cart']" size="lg" class="panel_item-svg" />
        </span>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Panel',
  data () {
    return {
      on: false
    }
  }
}
</script>

<style lang="scss" scoped>
.panel{
  display: flex;
  position: relative;
  align-items: center;
}

.panel_item{
  margin: 0 13px;
}
.panel_item-svg{
  color: $black;
  cursor: pointer;
}
.dropdown{
  border: 1px solid $gray;
  flex-direction: column;
  padding: 10px ;
}
.dropdown_link-svg{
  margin-right: 5px;
}
</style>
