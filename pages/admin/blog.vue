<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    sort-by="calories"
    class="elevation-1"
    :loading="loading"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>My Blog</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        />
        <v-spacer />
        <v-dialog
          v-model="dialog"
          max-width="500px"
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
                      sm="12"
                      md="12"
                    >
                      <v-text-field
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
                        class="texta"
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
                        accept="image/png, image/jpeg, image/bmp"
                        placeholder="Pick an image"
                        label="Gallery Images"
                        :rules="[
                          () => !!editedItem.picture.length || 'This field is required',
                        ]"
                        @change="changeFile"
                      />
                    </v-col>
                    <v-col
                      v-if="!!editedItem.picture"
                      cols="12"
                      sm="12"
                      md="12"
                    >
                      <v-img
                        max-height="150"
                        max-width="150"
                        :src="editedItem.picture"
                        class="ma-2"
                      />
                    </v-col>
                  </v-row>
                </v-container>
              </v-form>
            </v-card-text>

            <v-card-actions>
              <v-spacer />
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue darken-1"
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
        fa-edit
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        fa-trash
      </v-icon>
    </template>
    <template v-slot:item.title="{ item }">
      <div class="text-no-wrap">
        <NuxtLink :to="{ path: '/blog/'+item._id}">
          {{ item.title }}
        </NuxtLink>
      </div>
    </template>
    <template v-slot:item.picture="{ item }">
      <v-img
        max-height="50"
        max-width="50"
        :src="item.picture"
      />
    </template>
    <template v-slot:item.description="{ item }">
      <p class="p">
        {{ item.description }}
      </p>
    </template>
    <template v-slot:item.date="{ item }">
      <div class="text-no-wrap">
        {{ new Date(item.date).toDateString() }}
      </div>
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
  name: 'Blog',
  layout: 'admin',
  data: () => ({
    valid: false,
    loading: false,
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: 'Title',
        sortable: false,
        value: 'title'
      },
      { text: 'Picture', value: 'picture' },
      { text: 'Description', value: 'description' },
      { text: 'Date', value: 'date', width: '100' },
      { text: 'Actions', value: 'actions', sortable: false }
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      title: '',
      picture: 0,
      description: ''
    },
    defaultItem: {
      title: '',
      picture: 0,
      description: ''
    }
  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Blog' : 'Edit Blog'
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
  },

  methods: {
    async changeFile (file) {
      const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result)
        reader.onerror = error => reject(error)
      })
      console.log(file)
      this.editedItem.picture = await toBase64(file)
    },
    async fetchData () {
      try {
        this.loading = true
        const res = await this.$axios.$get('/api/blogs')
        this.desserts = res.blog
        this.loading = false
      } catch (e) {
        console.log(e)
      }
    },
    async createData () {

    },

    editItem (item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm () {
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

    save () {
      this.$refs.form.validate()
      if (!this.valid) {
        return true
      }
      if (this.editedIndex > -1) {
        this.$axios.$patch('/api/blog', JSON.stringify({
          _id: this.desserts[this.editedIndex]._id,
          title: this.editedItem.title,
          description: this.editedItem.description,
          picture: this.editedItem.picture
        }), {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        Object.assign(this.desserts[this.editedIndex], this.editedItem)
      } else {
        this.$axios.$post('/api/blog', JSON.stringify({
          title: this.editedItem.title,
          description: this.editedItem.description,
          picture: this.editedItem.picture
        }), {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        // this.desserts.push(this.editedItem)
      }
      this.fetchData()
      this.close()
    }
  },
  head () {
    return {
      title: 'Blog'
    }
  }
}
</script>

<style scoped lang="scss">

  .p{
    overflow:hidden;
    display:inline-block;
    text-overflow: ellipsis;
    height: inherit;
    white-space: break-spaces;
  }
  .texta{
    white-space: break-spaces;
  }
</style>
