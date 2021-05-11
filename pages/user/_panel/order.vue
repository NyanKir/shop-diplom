<template>
  <section class="container">
    <BreadCrumbs>
      My Orders
    </BreadCrumbs>
    <div class="orders">
      <p class="p">
        Here are the orders you've placed since your account was created.
      </p>
      <table class="orders_table">
        <tr class="orders_table-tr">
          <th class="orders_table-th">
            Order <br> reference
          </th>
          <th class="orders_table-th">
            Date
          </th>
          <th class="orders_table-th">
            Total price
          </th>
          <th class="orders_table-th">
            Status
          </th>
        </tr>
        <tr v-for="order in data" :key="order._id" class="orders_table-tr">
          <td class="orders_table-td">
            <NuxtLink :to="'order/'+order._id" class="link">
              <span>
                {{ order._id }}
              </span>
            </NuxtLink>
          </td>
          <td class="orders_table-td">
            {{ new Date(order.date).toLocaleDateString("en-US") }}
          </td>
          <td class="orders_table-td">
            ${{ order.price }}
          </td>
          <td class="orders_table-td">
            {{ order.status }}
          </td>
        </tr>
      </table>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Order',
  layout: 'sidebar',
  data () {
    return {
      data: []
    }
  },
  async mounted () {
    const res = await this.$axios({
      method: 'get',
      url: '/api/orders',
      params: {
        id: this.$store.state.user.userId
      }
    })
    this.data = res.data.data
    console.log(res)
  },
  head () {
    return {
      title: 'Order History'

    }
  }
}
</script>

<style scoped lang="scss">
  .orders{
    overflow-x: auto;
    padding: 10px;
    border: 1px solid $gray-f2;
  }
  .p{
    font-size: 13px;
    margin-bottom: 10px;
  }
  .orders_table{
    width: 100%;
    border-collapse: collapse;
  }
  .orders_table-th{
    font-size: 14px;
    background: $gray-f2;
    border: 1px solid $gray;
  }
  .orders_table-td, .orders_table-th {
    font-size: 13px;
    text-align: left;
    padding: 8px;
    border: 1px solid $gray-85;

  }
</style>
