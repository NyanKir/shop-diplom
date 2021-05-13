<template>
  <div class="collage">
    <div class="collage_item collage_huge">
      <div class="collage_title">
        <span class="collage_title-head">Big Deal</span>
        <p class="collage_title-text">
          Ceramic Products
        </p>
      </div>
      <img src="cms-banner-1.jpg" alt="">
    </div>
    <div class="collage_item collage_medium">
      <div class="collage_title">
        <span class="collage_title-head">Flat 50%</span>
        <p class="collage_title-text">
          Ceramic Poat
        </p>
      </div>
      <img src="cms-banner-2.jpg" alt="">
    </div>
    <div class="collage_item collage_medium collage_medium__double">
      <div class="collage_title">
        <span class="collage_title-head">New Offer</span>
        <p class="collage_title-text">
          Unique Art
        </p>
      </div>
      <img src="cms-banner-5.jpg" alt="">
    </div>
    <div class="collage_item collage_tiny">
      <div class="collage_title">
        <span class="collage_title-head">Special</span>
        <p class="collage_title-text">
          Buy Bowl
        </p>
      </div>
      <img src="cms-banner-3.jpg" alt="">
    </div>
    <div class="collage_item collage_tiny">
      <div class="collage_title">
        <span class="collage_title-head">New Deal</span>
        <p class="collage_title-text">
          Accessories
        </p>
      </div>
      <img src="cms-banner-4.jpg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Collage'
}
</script>

<style scoped lang="scss">
    .collage{
      display: grid;
      grid-template-columns: auto auto auto;
      grid-template-rows: auto auto auto;
      grid-gap: 30px;
    }
    .collage_huge{
      grid-column: 1/3;
      grid-row: 1/3;
    }
    .collage_item{
      cursor: pointer;
      position: relative;
      overflow: hidden;
      transition: .4s ease-in-out;

      &:hover{

        img{
          transform: scale(1.05);
        }
      }
      img{
        transition: .4s ease;
        display: block;
        width: 100%;
        height: auto;
      }
    }
    .collage_title{
      z-index: 3;
      position: absolute;
      top: 10px;
      left: 10px;
      background: $white;
      text-align: center;
      padding: 10px 15px;
    }
    .collage_title-head{
      font-size: 13px;
      color: $main;
    }
    .collage_title-text{
      font-weight: 500;
      font-size: 14px;
      color: #222222;
    }
    .collage_tiny{
    }
    .collage_huge{
    }
    .collage_medium{
      max-width: 345px;
      width: 100%;
    }
    .collage_medium__double{
      grid-row: 2/4;
    }

    @media (max-width: 992px){

      .collage_medium{
        width: 263px;
      }
    }
    @media (max-width: 770px){

      .collage_huge{
        grid-column: 1/3;
        grid-row: 1/2;
        width: 100%;
      }
      .collage_tiny{
        grid-row: 2/3;
      }
      .collage_medium{
        grid-row: 3/4;
        width: auto;
      }

    }

    @media (max-width: 460px){
      .collage{
        grid-column-gap: 0;
      }
      .collage_item{
        grid-column: 1/2;
        grid-row: auto;
      }
    }
</style>
