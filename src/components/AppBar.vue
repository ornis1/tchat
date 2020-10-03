<template>
  <v-app-bar app clipped-left color="accent darken-2">
    <AppBarMenu />
    <v-toolbar-title>Simple chat app</v-toolbar-title>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppBar',
  components: {
    AppBarMenu: () => import('@/components/AppBarMenu.vue')
  }
}
</script>

<style></style>
