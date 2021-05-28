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
    <form v-if="this.$store.state.user.isAdmin" class="review" @submit.prevent="sendReview">
      <label for="rating" class="review_item">
        Rating
        <select id="rating" v-model="selected" class="rating">
          <option v-for="i in 5" :key="i" :value="i">
            {{ i }}
          </option>
        </select>
      </label>
      <label for="descr" class="review_item">
        Description
        <textarea
          id="descr"
          v-model="descr"
          name=""
          cols="10"
          rows="5"
          class="descr"
        />
        <span v-if="errorDesc">{{ errorDesc }}</span>
      </label>

      <button class="btn review_send" type="submit">
        Write your review
      </button>
    </form>

    <button v-else class="btn">
      <NuxtLink to="/auth/signin" class="link">
        <span>Log in</span>
      </NuxtLink>
    </button>
  </div>
</template>

<script>
import Rating from '../Rating'
export default {
  name: 'TabRating',
  components: { Rating },
  props: ['data'],
  data: () => ({
    selected: 1,
    descr: '',
    errorDesc: ''
  }),
  methods: {
    sendReview () {
      if (this.descr.trim() === '') {
        this.errorDesc = 'Sorry incorrect date'
        return
      }
      this.errorDesc = ''
      this.$axios.$post('api/product/review', {
        id: this.$route.query.id,
        rating: this.selected,
        description: this.descr.trim(),
        reviewFrom: this.$store.state.user.userId
      })
      this.$store.dispatch('user/showNotice', 'Success, your review was accept!')
      this.selected = 1
      this.descr = ''
    }
  }
}
</script>

<style scoped lang="scss">
  .review{
    display: flex;
    flex-direction: column;
  }

  .review_item{
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    select{
      width: 50px;
      border: 1px solid $gray-85;
      -webkit-appearance: listbox;
    }
  }

  .descr{
    width: 100%;
    border: 1px solid $gray-85;

  }
  .descr+span{
    font-size: 14px;
    color: red;
  }
  .btn{
    margin: 0;
    a{
      color: $white;

    }

  }

  .review_send{
    margin-top: 10px;
  }
  .p{
    text-overflow: ellipsis;
    overflow: hidden;
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
