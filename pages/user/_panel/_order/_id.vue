<template>
  <section class="container">
    <BreadCrumbs>
      Order and bill
    </BreadCrumbs>
    <div v-if="order" class="order border">
      <div class="border">
        <h3 class="h3">
          Order reference {{ order._id.slice(5,-1) }} - placed on {{ new Date(order.date).toLocaleDateString("en-US") }}
        </h3>
      </div>
      <div class="border">
        <h3 class="h3">
          Follow your order`s status step-by-step
        </h3>
        <table class="status">
          <tr class="status_tr">
            <th class="status_th">
              Date
            </th>
            <th class="status_th">
              Status
            </th>
          </tr>
          <tr v-for="(name,status) in order.status" :key="status">
            <td class="status_td">
              {{ status }}
            </td>
            <td class="status_td">
              {{ name }}
            </td>
          </tr>
        </table>
      </div>
      <div class="border">
        <div>
          <h3 class="h3">
            Delivery address
          </h3>
          <table class="status">
            <tr class="status_tr">
              <th class="status_th">
                Country
              </th>
              <th class="status_th">
                City
              </th>
              <th class="status_th">
                State
              </th>
              <th class="status_th">
                Code
              </th>
            </tr>
            <tr>
              <td class="status_td">
                {{ order.address.country }}
              </td>
              <td class="status_td">
                {{ order.address.city }}
              </td>
              <td class="status_td">
                {{ order.address.state }}
              </td>
              <td class="status_td">
                {{ order.address.code }}
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div class="border">
        <div>
          <h3 class="h3">
            Your products
          </h3>
          <table class="status">
            <tr class="status_tr">
              <th class="status_th">
                Title
              </th>
              <th class="status_th">
                Options
              </th>
              <th class="status_th">
                Price
              </th>
              <th class="status_th">
                Quantity
              </th>
            </tr>
            <tr v-for="(product,index) in products" :key="index">
              <td class="status_td">
                {{ product.title }}
              </td>
              <td class="status_td">
                <ul v-for="(value,title) in order.cart.filter(el=>el.id===product._id)[0].options" :key="value" class="list">
                  <li>
                    <span>
                      {{ title }}
                    </span>
                    - {{ value }}
                  </li>
                </ul>
              </td>
              <td class="status_td">
                <Price :price="product.price" :discount="product.discountPrice" />
              </td>
              <td class="status_td">
                {{ order.cart.filter(el=>el.id===product._id)[0].count }}
              </td>
            </tr>
          </table>
          <h3 class="h3 total">
            Total: ${{ order.price }}
          </h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Price from '@/components/Product/Price'
export default {
  name: 'Id',
  components: { Price },
  layout: 'sidebar',
  data () {
    return {
      order: undefined,
      products: undefined
    }
  },
  async mounted () {
    const res = await this.$axios({
      method: 'get',
      url: '/api/order',
      params: {
        id: this.$route.params.id
      }
    })
    this.products = res.data.products
    this.order = res.data.order[0]
  },
  head () {
    return {
      title: 'Order'
    }
  }
}
</script>

<style scoped lang="scss">
  .total{
    text-align: right;
    margin-top: 5px;
  }
  .h3{
    font-size: 13px;
    color: $b-22;
  }
  .border{
    border: 1px solid $gray-f2;
    padding: .5rem;
  }
  .order{
    width: 100%;

    .border{
      margin: .5em;
    }
  }

  .status{
    margin-top: 5px;
    width: 100%;
    border-collapse: collapse;
  }
  .list{
    list-style: none;
    padding: 0;
    margin: 0;
    li{
      font-size: 13px;
    }
    span{
      text-transform: capitalize;

    }
  }
  .status_th{
    font-size: 14px;
    background: $gray-f2;
    border: 1px solid $gray;
  }
  .status_td, .status_th {
    font-size: 13px;
    text-align: left;
    padding: 8px;
    border: 1px solid $gray-85;
  }

  .status_td ::v-deep .price_regular{
    font-size: 13px;
  }
  .status_td ::v-deep .price_discount{
    font-size: 13px;
  }
</style>
