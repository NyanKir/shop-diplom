<template>
  <v-data-table
    :headers="dessertHeaders"
    :items="desserts"
    :single-expand="true"
    :expanded.sync="expanded"
    item-key="_id"
    show-expand
    :loading="loading"
    class="elevation-1"
  >
    <template v-slot:item.price="{ item }">
      ${{ item.price }}
    </template>
    <template v-slot:item.shipping="{ item }">
      ${{ item.shipping }}
    </template>    <template v-slot:item.description="{ item }">
      {{ item.description||'Nothing' }}
    </template>
    <template v-slot:item.date="{ item }">
      {{ new Date(item.date).toLocaleDateString("en-US") }}
    </template>
    <template v-slot:item.status="{ item }">
      {{ Object.keys(item.status).includes('cancel')?'cancel':Object.keys(item.status).includes('accept')?'accept': 'pending' }}
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
        v-if="!(Object.keys(item.status).includes('accept') || Object.keys(item.status).includes('cancel'))"
        small
        class="mr-2 "
        color="green"
        @click="accepted(item)"
      >
        fa-check
      </v-icon>
      <v-icon
        v-if="!(Object.keys(item.status).includes('accept') || Object.keys(item.status).includes('cancel'))"

        small
        color="red"
        @click="canceled(item)"
      >
        fa-times
      </v-icon>
    </template>
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Orders</v-toolbar-title>
        <v-spacer />
      </v-toolbar>
    </template>
    <template v-slot:expanded-item="{ headers, item }">
      <td :colspan="headers.length">
        <v-container>
          <v-row>
            <v-col md="2" sm="4">
              Title
            </v-col>
            <v-col md="3" sm="4">
              Options
            </v-col>
            <v-col md="3" sm="1">
              Price
            </v-col>
            <v-col md="2" sm="1">
              Count
            </v-col>
            <v-col md="3" sm="2">
              Total
            </v-col>
          </v-row>
          <v-row v-for="(prod,index) in item.cart" :key="index" class="d-flex">
            <v-col cols="12" md="2" sm="4">
              <NuxtLink :to="'/product/'+products.filter(el=>el._id===prod.id)[0].title+'?id='+products.filter(el=>el._id===prod.id)[0]._id">
                {{ products.filter(el=>el._id===prod.id)[0].title }}

                <v-icon small>
                  fa-external-link-square-alt
                </v-icon>
              </NuxtLink>
            </v-col>
            <v-col cols="12" md="3" sm="4">
              <div v-for="(options,value) in prod.options" :key="options">
                {{ value }}
                {{ options }}
              </div>
            </v-col>
            <v-col cols="12" md="3" sm="1">
              ${{ products.filter(el=>el._id===prod.id)[0].discountPrice || products.filter(el=>el._id===prod.id)[0].price }}
            </v-col>
            <v-col cols="12" md="2" sm="1">
              {{ prod.count }}
            </v-col>
            <v-col cols="12" md="3" sm="2">
              ${{ (products.filter(el=>el._id===prod.id)[0].discountPrice || products.filter(el=>el._id===prod.id)[0].price) * prod.count }}
            </v-col>
          </v-row>
        </v-container>
      </td>
    </template>
  </v-data-table>
</template>
<script>
export default {
  name: 'Order',
  data () {
    return {
      expanded: [],
      loading: false,
      dessertHeaders: [
        {
          text: 'User',
          align: 'start',
          sortable: false,
          value: 'userId'
        },
        { text: 'Date', value: 'date' },
        { text: 'Description', value: 'description' },
        { text: 'Total Price', value: 'price' },
        { text: 'Shipping', value: 'shipping' },
        { text: 'Status', value: 'status' },
        { text: 'Actions', value: 'actions', sortable: false },
        { text: '', value: 'data-table-expand' }

      ],
      desserts: [],
      products: []
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    async fetchData () {
      this.loading = true
      try {
        const res = await this.$axios({
          method: 'get',
          url: '/api/order',
          params: {
            all: true
          }
        })
        this.desserts = res.data.order
        this.products = res.data.products
        this.loading = false
      } catch (e) {
        console.log(e)
      }
    },
    accepted (item) {
      this.$axios.$post('/api/status', {
        status: 'accept',
        id: item._id
      })
      this.fetchData()
    },
    canceled (item) {
      this.$axios.$post('/api/status', {
        status: 'cancel',
        id: item._id
      })
      this.fetchData()
    }
  },
  head () {
    return {
      title: 'Order'
    }
  },
  layout: 'admin'
}

</script>

<style scoped>

</style>
