<template>
  <v-list nav class="px-0">
    <v-list-item
      v-for="item in chats"
      :key="item.id"
      :input-value="item.id"
      :ripple="false"
      :to="{ name: 'Chat', query: { p: item.id } }"
      class="mb-0"
      link
      dense
      exact
      tile
    >
      <v-list-item-avatar size="48">
        <v-img :src="item.photo"></v-img>
      </v-list-item-avatar>

      <v-list-item-content class="align-self-center">
        <v-list-item-title>{{ item.title }}</v-list-item-title>
        <v-list-item-subtitle>{{ item.subtitle }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('sidebar', ['chats'])
  }
}
</script>

<style scoped lang="scss">
.v-list-item {
  height: 60px;
  &:before {
    border-radius: 0px;
  }
}
</style>
