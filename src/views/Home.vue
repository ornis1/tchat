<template>
  <div class="d-flex fill-height">
    <v-chip v-if="!chatId" disabled class=" ma-auto">
      Please select a chat to start messaging
    </v-chip>
    <Chat v-else />
    <!-- <h1>CHat {{ $route.query.p }}</h1> -->
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    Chat: () => import('@/components/Chat/Chat')
  },
  computed: {
    chatId() {
      return this.$route.query.p
    }
  }
}
</script>

<style></style>
