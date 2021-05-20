<template>
  <v-container v-if="!loading" class="w100">
    <v-row>
      <v-col cols="12">
        <v-img
          :src="blog.picture"
          max-width="250"
          class="marg"
        />
      </v-col>
      <v-col cols="12">
        <div>
          <time class="time">
            {{ new Date(blog.date).toDateString() }}
          </time>
          <h3 class="h3">
            {{ blog.title }}
          </h3>
        </div>

        <p class="p">
          {{ blog.description.trimLeft() }}
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Id',
  layout: 'sidebar',
  data: () => ({
    blog: null,
    loading: false
  }),
  async created () {
    this.loading = true
    const res = await this.$axios.$get('api/blog/' + this.$route.params.id)

    this.blog = res.blog[0]
    this.loading = false
  }

}
</script>

<style scoped lang="scss">
  .w100{
    max-width: 100%;
  }
  .marg{
    margin: 0 auto;
  }
  .p{
    white-space: break-spaces;
  }
  .time{
    color: $main;
    opacity: .8;
    font-size: 12px;
  }
</style>
