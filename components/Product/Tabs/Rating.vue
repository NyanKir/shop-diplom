<template>
  <div class="reviews">
    <div v-for="[index,user] of data.entries()" :key="index" class="reviews_review">
      <div class="reviews_review-info">
        <div class="reviews_review-el">
          <h3 class="h3">
            Grade:
          </h3>
          <Rating :rating="user.rating" />
        </div>
        <div class="reviews_review-el">
          <h3 class="h3">
            From:
          </h3>
          <p class="p">
            {{ user.reviewFrom }}
          </p>
        </div>
        <div class="reviews_review-el">
          <h3 class="h3">
            Date:
          </h3>
          <p class="p p__date">
            20/11/2011
          </p>
        </div>
      </div>
      <div class="reviews_review-desc">
        <h3 class="h3">
          Comment:
        </h3>
        <p class="p">
          {{ user.description }}
        </p>
      </div>
    </div>
    <button class="btn">
      Write your review
    </button>
  </div>
</template>

<script>
import Rating from '../Rating'
export default {
  name: 'TabRating',
  components: { Rating },
  props: ['data']
}
</script>

<style scoped lang="scss">
.btn{
  margin: 0;
}
  .p{
    font-size: 13px;
  }
  .p__date{
    font-style: italic;
    color: $gray;
  }
  .reviews{
    padding: 10px;
    overflow-y: auto;
    width: 100%;
    max-height: 400px;
  }
  .reviews_review-info{
    max-width: 100px;
    width: 100%;
    padding: 5px;
  }
  .reviews_review{
    display: flex;
    border-bottom: 1px solid $gray;
    padding-bottom: 5px;
    margin-bottom: 5px;
  }

  .reviews_review-el{
    margin-top: 5px;

    &:first-child{
      margin-top: 0;
    }
  }

  .reviews_review-desc{
    overflow: hidden;
    width: 100%;
    max-height: 170px;
    margin-left: 5px;
    padding: 0 5px;
    border-left: 1px solid $gray;
    overflow-y: auto;
    .h3{
      top: 0;
      position: sticky;
      background: $white;
    }

  }
</style>
