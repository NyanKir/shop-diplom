<template>
  <v-app dark app>
    <v-navigation-drawer
      app
      permanent
      expand-on-hover
    >
      <v-list>
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="title">
              Sandra Adams
            </v-list-item-title>
            <v-list-item-subtitle>sandra_a88@gmail.com</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider />

      <v-list
        nav
        dense
      >
        <v-list-item link to="/admin/" nuxt>
          <v-list-item-icon>
            <v-icon>fa-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Dashboard</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/admin/blog" nuxt>
          <v-list-item-icon>
            <v-icon>fa-pen</v-icon>
          </v-list-item-icon>
          <v-list-item-title>My Blog</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/admin/product" nuxt>
          <v-list-item-icon>
            <v-icon>fa-cheese</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Products</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/admin/order" nuxt>
          <v-list-item-icon>
            <v-icon>fa-people-carry</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Orders</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/admin/users" nuxt>
          <v-list-item-icon>
            <v-icon>fa-sign-out-alt</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Log out</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'Admin',
  loading: false

}
</script>

<style>
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #2f2f2f;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #1d1d1d;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #121212;
}
</style>
