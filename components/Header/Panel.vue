<template>
  <div class="panel">
    <div class="panel_item">
      <font-awesome-icon :icon="['fas', 'search']" size="lg" class="panel_item-svg" />
    </div>
    <div class="panel_item">
      <font-awesome-icon :icon="['fas', 'user']" size="lg" class="panel_item-svg" @click="on=!on" />
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
        </ul>
      </transition>
    </div>
    <div class="panel_item">
      <font-awesome-icon :icon="['fas', 'shopping-cart']" size="lg" class="panel_item-svg" />
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
}

.panel_item{
  margin: 0 13px;
}
.panel_item-svg{
  cursor: pointer;
}
.dropdown{
  flex-direction: column;
  padding: 10px 5px;
}
.dropdown_link-svg{
  margin-right: 5px;
}
</style>
