<template>
  <div class="service">
    <div class="service_block">
      <font-awesome-icon :icon="['fas', 'rocket']" size="lg" class="service_svg" />
      <div>
        <h4 class="service_title">
          Free Shipping Worldwide
        </h4>
        <p class="service_text">
          Kazahstan Orders Only
        </p>
      </div>
    </div>
    <div class="service_block">
      <font-awesome-icon :icon="['fas', 'headset']" size="lg" class="service_svg" />
      <div>
        <h4 class="service_title">
          Online 24/7 Supports
        </h4>
        <p class="service_text">
          Sign Up For Gift
        </p>
      </div>
    </div>
    <div class="service_block">
      <font-awesome-icon :icon="['fas', 'truck-loading']" size="lg" class="service_svg" />
      <div>
        <h4 class="service_title">
          14-Days Money Back
        </h4>
        <p class="service_text">
          Sign Up For Gift
        </p>
      </div>
    </div>
    <div class="service_block">
      <font-awesome-icon :icon="['fas', 'piggy-bank']" size="lg" class="service_svg" />
      <div>
        <h4 class="service_title">
          Win $100 First Puschase
        </h4>
        <p class="service_text">
          Sign Uo For Voucher
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServiceBlock'
}
</script>

<style scoped lang="scss">
  .service{
    margin: 40px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
  .service_block{
    cursor: pointer;
    transition: .3s;
    display: flex;
    align-items: center;

    &:hover{

      .service_svg{
        transition: .3s;
        color: $main;
      }
    }
  }

  .service_svg{
    color: #222222;
    margin-right: 10px;
    width: 25px;
    height: auto;

  }

  .service_title{
    color: #222222;
    font-weight: 500;
    font-size: 14px;
    line-height: 26px;
    letter-spacing: 0.4px;
    text-transform: capitalize;
  }
  .service_text{
    color: #222222;
    opacity: .9;
    font-size: 13px;
    letter-spacing: 0.4px;
    line-height: 18px;
  }

  @media (max-width: 992px){
      .service_svg{
        margin: 0 0 10px 0;
      }
      .service_block{
        margin: 20px 0;
        padding: 0;
        flex-direction: column;
        text-align: center;
        flex: 1 1 50%;
      }

  }
  @media (max-width: 460px){
    .service_block{
      flex: 1 1 100%;
    }
  }
</style>
