<template>
  <div class="d-flex fill-height">
    <v-chip v-if="show" disabled class="ma-auto">
      Please select a chat to start messaging
    </v-chip>
    <router-view v-else></router-view>
  </div>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    show() {
      return this.$route.name === 'Home' && !this.$vuetify.breakpoint.xs
    }
  }
}
</script>

<style></style>
