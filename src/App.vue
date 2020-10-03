<template>
  <v-app>
    <AppBar v-if="show" />
    <AppSidebar v-if="show" />
    <v-main>
      <router-view />
    </v-main>
    <GroupModal v-if="show" />
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
    AppBar: () => import('@/components/AppBar'),
    AppSidebar: () => import('@/components/AppSidebar'),
    GroupModal: () => import('@/components/modals/GroupModal')
  },
  data() {
    return { show: true }
  },
  watch: {
    '$route.path': {
      handler() {
        this.show = this.$route.path !== '/auth'
      },
      immediate: true
    }
  }
}
</script>
