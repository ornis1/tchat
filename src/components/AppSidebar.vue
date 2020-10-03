<template>
  <v-navigation-drawer
    color="accent darken-2"
    touchless
    app
    clipped
    :mobile-breakpoint="0"
    :width="width"
    :value="value"
  >
    <AppSidebarInput />
    <v-divider></v-divider>

    <AppSidebarList />
  </v-navigation-drawer>
</template>

<script>
export default {
  components: {
    AppSidebarInput: () => import('@/components/AppSidebarInput'),
    AppSidebarList: () => import('@/components/AppSidebarList')
  },
  computed: {
    value() {
      return !(this.isMobile && this.$route.name === 'Chat')
    },
    isMobile() {
      return this.$vuetify.breakpoint.smAndDown
    },
    width() {
      return this.isMobile ? '100vw' : 256
    }
  }
}
</script>

<style scoped>
.v-navigation-drawer {
  display: flex;
}
</style>
