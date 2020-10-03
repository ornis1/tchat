<template>
  <v-list nav class="px-0">
    <v-list-item
      v-for="item in groups"
      :key="item.id"
      :input-value="item.id"
      :ripple="false"
      :to="{ name: 'Chat', params: { id: item.id } }"
      class="mb-0"
      link
      dense
      exact
      tile
    >
      <v-list-item-avatar size="48">
        <Avatar :color="item.color" :name="item.title" />
      </v-list-item-avatar>
      <v-list-item-content class="align-self-center">
        <v-list-item-title>{{ item.title }}</v-list-item-title>
        <v-list-item-subtitle>{{ item.message }} </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return { message: '' }
  },
  components: { Avatar: () => import('@/components/Avatar') },
  computed: {
    ...mapGetters('sidebar', ['groups'])
  },
  methods: {
    ...mapActions('sidebar', ['setGroups'])
  },
  create() {
    this.setGroups()
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
