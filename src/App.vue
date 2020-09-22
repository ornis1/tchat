<template>
  <v-app>
    <AppBar />
    <AppSidebar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
    AppBar: () => import('@/components/AppBar'),
    AppSidebar: () => import('@/components/AppSidebar')
  }
}
</script>
