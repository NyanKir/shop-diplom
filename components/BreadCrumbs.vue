<template>
  <div class="breadcrumbs">
    <h3 v-show="hasDefaultSlot" class="h3">
      <slot />
    </h3>
    <ol class="breadcrumbs_container">
      <li class="breadcrumbs_crumb">
        <NuxtLink to="/" class="breadcrumbs_link">
          <span class="breadcrumbs_text">
            Home
          </span>
        </NuxtLink>
      </li>
      <li v-for="link in getNormalPaths" :key="link.title" class="breadcrumbs_crumb">
        <NuxtLink :to="link.path" class="breadcrumbs_link">
          <span class="breadcrumbs_text">
            {{ link.title }}
          </span>
        </NuxtLink>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'BreadCrumbs',
  computed: {
    getNormalPaths () {
      const keys = Object.keys(this.$route.params).filter(r => this.$route.params[r])
      const paths = this.$route.fullPath.split('/').filter(r => r).map((p, i, m) => {
        return m.slice(0, i + 1).join('/')
      })
      return keys.map((el, i) => {
        return { title: this.$route.params[el], path: '/' + paths[i + 1] }
      })
    },
    hasDefaultSlot () {
      return !!this.$slots.default
    }
  }
}
</script>

<style scoped lang="scss">
.breadcrumbs{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 10px;
}
.breadcrumbs_container{
  display: flex;
  list-style: none;
  padding: 0;
}
.breadcrumbs_crumb:not(:last-child,:first-child){
  margin: 0 8px;
}
.breadcrumbs_crumb:last-child{
  margin-left: 8px;
}
.breadcrumbs_crumb:first-child{
  margin-right: 8px;
}
.breadcrumbs_crumb:not(:last-child):after{
  z-index: -1;
  content: '/';
  position: absolute;
  font-weight: 300;
  margin-left: 4px;
}
.breadcrumbs_link{
  text-decoration: none;
  color: $black;

  &:hover{
    color: $main;
  }
}
.breadcrumbs_text{
  text-transform: capitalize;
  font-size: 13px;
  font-weight: 300;
}

</style>
