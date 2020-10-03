<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on }">
      <v-app-bar-nav-icon v-on="on"></v-app-bar-nav-icon>
    </template>
    <v-list>
      <v-list-item
        v-for="(item, index) in items"
        :key="index"
        @click="item.handler"
        dense
      >
        <v-list-item-icon>
          <v-icon>
            {{ item.icon }}
          </v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      dialog: false,
      items: [
        {
          title: 'Create group',
          icon: 'mdi-account-multiple',
          handler: this.toggleGroup
        },
        {
          title: 'SignOut',
          icon: 'mdi-logout',
          handler: this.signOut
        }
      ]
    }
  },
  methods: {
    ...mapActions({
      toggleGroup: 'modals/toggleGroup',
      signOut: 'user/signOut'
    })
  }
}
</script>

<style></style>
