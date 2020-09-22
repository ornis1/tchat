<template>
  <v-app-bar app clipped-left dense flat>
    <v-menu offset-y open-on-hover v-if="false">
      <template v-slot:activator="{ on }">
        <v-app-bar-nav-icon v-on="on"></v-app-bar-nav-icon>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index">
          <v-list-item-icon>
            <v-icon>
              {{ item.icon }}
            </v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-toolbar-title>Simple chat app</v-toolbar-title>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    items: [{ title: 'Create group', icon: 'mdi-account-multiple' }]
  })
}
</script>

<style></style>
