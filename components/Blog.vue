<template>
  <div class="blog">
    <div class="blog_img-wrapper">
      <NuxtLink :to="{ path: '/blog/'+data._id}">
        <img :src="data.picture" :alt="data.picture" class="blog_img">
      </NuxtLink>
      <div class="blog_img-panel">
        <time>{{ new Date(data.date).toDateString() }}</time>
        <NuxtLink :to="{ path: '/blog/'+data._id}" class="link">
          <span>{{ data.title }}</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Blog',
  props: ['data']
}
</script>

<style scoped lang="scss">

.blog_img-wrapper{
  overflow: hidden;
  position: relative;
  width: 100%;
  height: auto;

  &:hover .blog_img-panel{
    opacity: 1;
    transition: .3s;
  }
}
.blog{
  width: 100%;
  height: 100%;
}
.blog_img{
  width: 100%;
  height: 100%;

}
.blog_img-panel{
  background: $white;
  padding: 15px;
  right: 0;
  left: 0;
  bottom: 10px;
  margin:  10px ;
  position: absolute;
  opacity: 0;
  transition: .3s;
  display: flex;
  flex-direction: column;

  time{
    color: $main;
    font-size: 12px;
    margin-bottom: 5px;
  }
  span{
    font-size: 14px;
    letter-spacing: .4px;
    font-weight: 500;
  }
}

@media (max-width: 992px) {
  .blog_img-wrapper{
    max-width: 100%;
  }
}
</style>
