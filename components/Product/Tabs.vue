<template>
  <div class="tabs">
    <button
      v-for="tab in tabs"
      :key="tab"
      :class="['tab_button','btn', { active: currentTab === tab }]"
      @click="currentTab = tab"
    >
      {{ tab }}
    </button>
    <component :is="currentTabComponent" class="tabs_tab" :data="getCurrentTabProps" keep-alive />
  </div>
</template>

<script>
import TabDescription from './Tabs/Description'
import TabRating from './Tabs/Rating'
export default {
  name: 'Tabs',
  components: { TabRating, TabDescription },
  props: ['description', 'rating'],
  data () {
    return {
      currentTab: 'Description',
      tabs: ['Description', 'Rating']
    }
  },
  computed: {
    currentTabComponent () {
      return 'Tab' + this.currentTab
    },
    getCurrentTabProps () {
      return this.$props[this.currentTab.toLowerCase()]
    }
  }

}
</script>

<style scoped lang="scss">
.tabs {
  padding: 20px 0px;
  margin-top: 1em;
  user-select: none;
  overflow-x: auto;
}

.tab_button {
  transition: none;
  margin: 0 2px;
  color: $black;
  cursor: pointer;
  background: transparent;
  padding: 10px 20px;
  text-transform: capitalize;

  &:first-child{
    margin-left: 0;
  }

  &:hover, &:active {
    color: $white;
    background: $main;
  }

  &.active {
    color: $white;
    background: $main;
  }
}

.tabs_tab{
  border: 1px solid $gray;
  padding: 10px;
}
.tabs_description-tab{
  text-align: justify;
  font-size: 13px;
}
</style>
