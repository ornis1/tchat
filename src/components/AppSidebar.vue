<template>
  <v-navigation-drawer permanent app clipped>
    <AppSidebarInput />
    <AppSidebarList />
  </v-navigation-drawer>
</template>

<script>
export default {
  components: {
    AppSidebarInput: () => import('@/components/AppSidebarInput'),
    AppSidebarList: () => import('@/components/AppSidebarList')
  }
}
</script>

<style></style>
