<template>
  <div class="container">
    <h3 class="h3">
      <slot />
    </h3>
    <ol class="breadcrumbs">
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
      const keys = Object.keys(this.$route.params)
      const paths = this.$route.fullPath.split('/').filter(r => r).map((p, i, m) => {
        return m.slice(0, i + 1).join('/')
      })

      return keys.map((el, i) => {
        return { title: this.$route.params[el], path: '/' + paths[i + 1] }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.container{
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}
.breadcrumbs{
  display: flex;
  list-style: none;
  padding: 0;
}
.breadcrumbs_crumb{
  margin: 0 8px;

}
.breadcrumbs_crumb:not(:last-child):after{
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
  font-size: 14px;
  font-weight: 300;
}

</style>
