<template>
  <v-data-table
    dense
    show-expand
    :single-expand="true"
    :expanded.sync="expanded"
    item-key="_id"
    :headers="headers"
    :items="desserts"
    class="elevation-1 pa-10"
    :loading="loading"
    align="start"
  >
    <template v-slot:item.gallery="{ item }">
      <v-img
        max-height="50"
        max-width="50"
        :src="item.gallery[0]"
      />
    </template>
    <template v-slot:item.price="{ item }">
      ${{ item.price }}
    </template>
    <template v-slot:item.discountPrice="{ item }">
      ${{ item.discountPrice||0 }}
    </template>

    <template v-slot:expanded-item="{ headers, item }">
      <td :colspan="headers.length">
        <v-container>
          <v-row>
            <v-col sm="12 ">
              <h3 class="display-5 white--text font-weight-medium">
                <NuxtLink :to="'/product/'+item.title+'?id='+item._id">
                  {{ item.title }}
                  <v-icon small>
                    fa-external-link-square-alt
                  </v-icon>
                </NuxtLink>
              </h3>
            </v-col>
            <v-col sm="12 ">
              <h3 class="display-5 white--text font-weight-medium">
                Gallery
              </h3>
              <div class="d-flex">
                <v-img
                  v-for="(img,index) in item.gallery"
                  :key="index"
                  max-height="150"
                  max-width="150"
                  :src="img"
                  class="mx-1"
                />
              </div>
            </v-col>
            <v-col sm="12">
              <h3 class="display-5 white--text font-weight-medium">
                Descriptions
              </h3>
              <p class="white--text font-weight-light">
                {{ item.description }}
              </p>
            </v-col>
            <v-col sm="6">
              <h3 class="display-5 white--text font-weight-medium">
                Categories
              </h3>
              <v-list-item v-for="category in item.categories" :key="category">
                <v-list-item-content>
                  <v-list-item-title>{{ category }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-col>
            <v-col sm="6">
              <h3 class="display-5 white--text font-weight-medium">
                Filters
              </h3>
              <v-list-item v-for="(filter, title) in item.filters" :key="title">
                <v-list-item-content>
                  <v-list-item-title>{{ title.charAt(0).toUpperCase()+title.slice(1) }}</v-list-item-title>
                  <v-list-item-subtitle v-for="(values, subTitle) in filter" :key="subTitle">
                    {{ subTitle }}
                    {{ values.count }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-col>
          </v-row>
        </v-container>
      </td>
    </template>
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>My Products</v-toolbar-title>
        <v-spacer />

        <v-divider
          class="mx-4"
          inset
          vertical
        />
        <v-dialog
          v-model="dialog"
          max-width="700px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
              New Item
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-form
                ref="form"
                v-model="valid"
              >
                <v-container>
                  <v-row>
                    <v-col
                      cols="12"
                      sm="6"
                      md="6"
                    >
                      <v-text-field
                        ref="title"
                        v-model="editedItem.title"
                        label="Title"
                        :rules="[
                          () => !!editedItem.title || 'This field is required',
                        ]"
                        outlined
                      />
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="6"
                    >
                      <v-text-field
                        ref="price"
                        v-model="editedItem.price"
                        prefix="$"
                        label="Price"
                        :rules="[
                          () => !!editedItem.price || 'This field is required',
                          () => !!editedItem.price && Number.isInteger(+editedItem.price)|| 'Only digits'
                        ]"
                        outlined
                      />
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="6"
                    >
                      <v-text-field
                        ref="discountPrice"
                        v-model="editedItem.discountPrice"
                        prefix="$"
                        label="Discount Price"

                        outlined
                      />
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="6"
                    >
                      <v-file-input
                        ref="gallery"
                        show-size
                        multiple
                        accept="image/png, image/jpeg, image/bmp"
                        placeholder="Pick an image"
                        label="Gallery Images"
                        :rules="[
                          () => !!editedItem.gallery.length || 'This field is required',
                        ]"
                        @change="changeFile"
                      />
                    </v-col>

                    <v-col
                      cols="12"
                      sm="12"
                      md="12"
                    >
                      <v-textarea
                        ref="description"
                        v-model="editedItem.description"
                        :rules="[
                          () => !!editedItem.description || 'This field is required',
                        ]"
                        outlined
                        label="Description"
                      />
                    </v-col>
                    <v-col
                      cols="12"
                      md="6"
                      sm="6"
                    >
                      <v-text-field
                        v-model="filter.title"
                        label="Filter"
                        outlined
                        :rules="[
                          () => !!filter.title || 'This field is required',
                        ]"
                      />

                      <v-text-field
                        v-model="filter.name"
                        label="Filter Name"
                        outlined
                        :rules="[
                          () => !!filter.name || 'This field is required',
                        ]"
                      />

                      <v-text-field
                        v-model="filter.value"
                        label="Filter Value"
                        outlined
                        :rules="[
                          () => !!filter.value || 'This field is required',
                        ]"
                      />

                      <v-text-field
                        v-model="filter.quantity"
                        outlined
                        label="Quantity"
                        :rules="[
                          () => !!filter.quantity || 'This field is required',
                          () => !!filter.quantity && Number.isInteger(+filter.quantity)|| 'Only numbers'
                        ]"
                      />
                      <v-btn color="blue darken-1" @click="addToFilter">
                        Add
                      </v-btn>
                    </v-col>

                    <v-col
                      cols="12"
                      sm="6"
                      md="6"
                    >
                      <h3 class="display-5 white--text font-weight-medium">
                        Filters
                      </h3>
                      <v-list-item v-for="(filter, title) in editedItem.filters" :key="title">
                        <v-list-item-content>
                          <v-list-item-title>{{ title.charAt(0).toUpperCase()+title.slice(1) }}</v-list-item-title>
                          <v-list-item-subtitle v-for="(values, subTitle) in filter" :key="subTitle">
                            {{ subTitle }}
                            {{ values.count }}
                          </v-list-item-subtitle>
                          <v-btn color="blue darken-1" @click="deleteFromFilter(title)">
                            Delete
                          </v-btn>
                        </v-list-item-content>
                      </v-list-item>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="6"
                    >
                      Categories
                      <v-checkbox
                        v-for="(link,index) in links"
                        :key="index"
                        v-model="editedItem.categories"
                        :rules="[
                          () => editedItem.categories.length >0|| 'You should select one field',
                        ]"
                        :label="link"
                        :value="link"
                      />
                    </v-col>
                  </v-row>
                </v-container>
              </v-form>
            </v-card-text>

            <v-card-actions>
              <v-spacer />
              <v-btn
                color="error darken-1"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="yellow darken-1"
                text
                @click="reset"
              >
                Reset Form
              </v-btn>
              <v-btn
                color="green darken-1"
                text
                @click="save"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="headline">
              Are you sure you want to delete this item?
            </v-card-title>
            <v-card-actions>
              <v-spacer />
              <v-btn color="blue darken-1" text @click="closeDelete">
                Cancel
              </v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">
                OK
              </v-btn>
              <v-spacer />
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        fa-pen
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        fa-trash
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table>
</template>

<script>
export default {
  name: 'Products',
  layout: 'admin',
  data: () => ({
    filter: {
      title: '',
      value: '',
      name: '',
      quantity: 0
    },
    expanded: [],
    valid: true,
    loading: false,
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: 'Title',
        value: 'title'
      },
      {
        text: 'Picture',
        value: 'gallery'
      },

      {
        text: 'Price',
        value: 'price'
      },
      {
        text: 'Discount Price',
        value: 'discountPrice'
      },
      {
        text: 'Description',
        value: 'description',
        sortable: false,
        width: '250px'
      },
      { text: 'Actions', value: 'actions', sortable: false }
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      title: '',
      gallery: [],
      price: 0,
      discountPrice: 0,
      description: '',
      categories: [],
      filters: {}
    },
    defaultItem: {
      title: '',
      gallery: [],
      price: 0,
      discountPrice: 0,
      description: '',
      categories: [],
      filters: {}
    },
    links: [],
    enabled: true
  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Product' : 'Edit Product'
    }

  },

  watch: {
    dialog (val) {
      val || this.close()
    },
    dialogDelete (val) {
      val || this.closeDelete()
    }
  },

  created () {
    this.fetchData()
    const cb = (e) => {
      this.links.push(e.href.replace('/category/', ''))
      e.child && Object.values(e.child).forEach(cb)
    }
    Object.values(this.$store.state.menu.links).forEach(cb)
  },

  methods: {
    async fetchData () {
      this.loading = true
      try {
        const res = await this.$axios({
          method: 'get',
          url: '/api/products',
          params: {
            all: true
          }
        })
        this.desserts = res.data.data
        this.loading = false
      } catch (e) {
        console.log(e)
      }
    },

    editItem (item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },
    async changeFile (files) {
      const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result)
        reader.onerror = error => reject(error)
      })
      const data = files.map(async el => await toBase64(el))
      this.editedItem.gallery = await Promise.all(data).then((el) => { return el })
    },
    addToFilter () {
      this.editedItem.filters = {
        ...this.editedItem.filters,
        [this.filter.title]: {
          [this.filter.name]: {
            value: this.filter.value,
            count: +this.filter.quantity
          }
        }
      }
      this.filter = {
        title: '',
        value: '',
        name: '',
        quantity: 0
      }
    },
    deleteFromFilter (title) {
      const filters = { ...this.editedItem.filters }
      delete filters[title]

      this.editedItem.filters = filters
    },

    deleteItem (item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm () {
      console.log(this.desserts[this.editedIndex - 1]._id)
      this.desserts.splice(this.editedIndex, 1)
      this.closeDelete()
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete () {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    async save () {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem)
      } else {
        this.$refs.form.validate()
        if (!this.valid) {
          return true
        }
        await this.$axios.$post('/api/product', JSON.stringify({
          title: this.editedItem.title,
          price: this.editedItem.price,
          discountPrice: this.editedItem.discountPrice,
          description: this.editedItem.description,
          categories: this.editedItem.categories.map((el) => {
            if (el.includes('/')) {
              return el.split('/').pop()
            }
            return el
          }),
          gallery: this.editedItem.gallery,
          filters: this.editedItem.filters
        }), {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        this.desserts.push(this.editedItem)
      }
      await this.fetchData()
      await this.close()
    },
    reset () {
      this.$refs.form.resetValidation()
    }
  }
}
</script>

<style scoped>

</style>
