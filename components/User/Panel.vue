<template>
  <div class="panel">
    <div class="panel_block">
      <NuxtLink to="/user/panel/information" class="panel_link">
        <div class="panel_block-orient">
          <font-awesome-icon :icon="['far', 'user-circle']" size="lg" class="panel_item-svg" />
          <h3 class="h3 panel_h3">
            Information
          </h3>
        </div>
      </NuxtLink>
    </div>
    <div class="panel_block">
      <NuxtLink to="/user/panel/address" class="panel_link">
        <div class="panel_block-orient">
          <font-awesome-icon :icon="['fas', 'map-marker']" size="lg" class="panel_item-svg" />
          <h3 class="h3 panel_h3">
            Add address
          </h3>
        </div>
      </NuxtLink>
    </div>
    <div class="panel_block">
      <NuxtLink to="/user/panel/order" class="panel_link">
        <div class="panel_block-orient">
          <font-awesome-icon :icon="['fas', 'calendar-alt']" size="lg" class="panel_item-svg" />
          <h3 class="h3 panel_h3">
            Order history and details
          </h3>
        </div>
      </NuxtLink>
    </div>
    <div class="panel_block panel_block__disabled">
      <NuxtLink to="/" class="panel_link" :event="''">
        <div class="panel_block-orient">
          <font-awesome-icon :icon="['fas', 'list-alt']" size="lg" class="panel_item-svg" />
          <h3 class="h3 panel_h3">
            Credit slips
          </h3>
        </div>
      </NuxtLink>
    </div>
    <div class="panel_block panel_block__disabled">
      <NuxtLink to="/" class="panel_link" :event="''">
        <div class="panel_block-orient">
          <font-awesome-icon :icon="['fas', 'user-shield']" size="lg" class="panel_item-svg" />
          <h3 class="h3 panel_h3">
            Personal data
          </h3>
        </div>
      </NuxtLink>
    </div>
    <div class="panel_block">
      <NuxtLink to="/wishlist" class="panel_link">
        <div class="panel_block-orient">
          <font-awesome-icon :icon="['fas', 'heart']" size="lg" class="panel_item-svg" />
          <h3 class="h3 panel_h3">
            My WishList
          </h3>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Panel'
}
</script>

<style scoped lang="scss">
  .panel{
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr ;
    grid-gap: 10px;
    margin: 10px 0;
  }
  .panel_block{
    border: 1px solid $gray-85;
    background: #fdfdfd;

    &:hover .panel_item-svg{
      color: $main;
    }
    &:hover {
      border-color: $main;
    }
  }

  .panel_block__disabled,  .panel_block__disabled >.panel_link{
    cursor: not-allowed;
    color: $gray-85;
    .panel_item-svg{
      color: $gray-85;
      &:hover{
        color: $gray-85;
      }
    }
  }
  .panel_block__disabled{
    &:hover{
      border: 1px solid $gray-85;

    }

  }
  .panel_block-orient{
    padding: 15px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .panel_item-svg{
    color: $b-41;
    font-size: 30px;
  }
  .panel_h3{
    color: $b-41;
    text-align: center;
    margin-top: 10px;
    font-size: 16px;
    font-weight: 400;
  }
  .panel_link{
    text-decoration: none;
  }
  @media (max-width: 767px){
    .panel {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr;
    }
  }
</style>
