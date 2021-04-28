<template>
  <div class="slider">
    <button class="slider_arrow" @click="goNext(false)">
      <font-awesome-icon :icon="['fas', 'arrow-left']" size="lg" />
    </button>
    <div class="overflow">
      <div ref="move" class="overflow_move" :style="{transform: 'translate('+slide+'px)'}">
        <img v-for="[i, image] of gallery.entries()" :key="i" :src="image" class="slider_image" @click="$emit('changeImage',$event)">
      </div>
    </div>
    <button class="slider_arrow" @click="goNext(true)">
      <font-awesome-icon :icon="['fas', 'arrow-right']" size="lg" />
    </button>
  </div>
</template>

<script>
export default {
  name: 'Slider',
  props: ['gallery'],
  data () {
    return {
      slide: 0
    }
  },
  methods: {
    goNext (check) {
      if (this.$refs.move.scrollWidth <= this.$refs.move.offsetWidth) {
        return
      }
      if (check) {
        if (this.$refs.move.scrollWidth - this.$refs.move.offsetWidth > -this.slide) {
          this.slide -= 80
          return
        }
        this.slide = 0
      } else {
        if (!this.slide) {
          this.slide = -(this.$refs.move.scrollWidth - this.$refs.move.offsetWidth)
          return
        }
        this.slide += 80
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .slider{
    display: flex;
    margin: 0 auto;

    .slider_arrow{
      z-index: 1;
      cursor: pointer;
      top: 0;
      bottom: 0;
      margin: auto;
      background: transparent;
      border: none;

      display: flex;
      align-items: center;
      justify-content: center;
      transition: .3s;

      svg,&{
        width: 20px;
        height: 20px;
      }
      &:hover{
        color: $main;
        transition: .3s;
        transform: translate(3px);
        &:first-child{
          transform: translate(-3px);
        }
      }
      &:active,&:focus{
        outline: none;
      }
    }

  }
  .overflow{
    width: calc(100% - 40px);
    overflow: hidden;
  }
  .overflow_move{
    width: 100%;
    display: flex;
    transition: .3s all ease;
  }
  .slider_image{
    cursor: pointer;
    padding: 0 10px;
    max-width:  80px;
    height: auto;

    &:hover{
      border: 1px solid $main;
    }
    &:first-child{
      margin-left: 0;
    }
  }
</style>
