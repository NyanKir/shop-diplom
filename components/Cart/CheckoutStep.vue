<template>
  <div class="checkout_step" :class="{'checkout__disabled': disabled}">
    <div class="checkout_header">
      <font-awesome-icon v-if="completed" :icon="['fas', 'check']" size="lg" class="checkout_svg" />
      <h1 class="h1 checkout_h1">
        {{ title }}
      </h1>
      <button v-if="edit" class="checkout_btn" @click="$emit('editHandler')">
        <font-awesome-icon :icon="['fas', 'pen']" size="xs" />
        <span>
          Edit
        </span>
      </button>
    </div>

    <div v-if="!completed" class="checkout_body">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CheckoutStep',
  props: {
    title: { type: String },
    completed: { type: Boolean },
    edit: { type: Boolean, default: true },
    disabled: { type: Boolean, default: false }
  }
}
</script>

<style scoped lang="scss">
  .checkout__disabled{
    pointer-events: none;
    opacity: .4;
  }
  .checkout_step{
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 10px;
    margin: 5px 0;
    border: 1px solid $gray-f2;

    &:first-child{
      margin: 0 0 5px 0;
    }
  }

  .checkout_header{
    display: flex;
    align-items: center;
  }

  .checkout_body{
    margin-top: 10px;
  }
  .checkout_h1{
    margin: 0 auto 0 0;
    font-size: 14px;
    font-weight: 400;
  }

  .checkout_svg{
    margin:0  10px 0 0;

    color: $green;
  }
  .checkout_svg__red{
    color: $red;
  }
  .checkout_btn{
    border: none;
    background: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;

    svg{
      margin-right: 5px;
    }

    &:hover{
      color: $main;
    }
  }
</style>
