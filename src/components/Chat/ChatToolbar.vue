<template>
  <v-toolbar flat color="accent darken-2">
    <v-btn
      v-if="this.$vuetify.breakpoint.smAndDown"
      fab
      small
      color="transparent"
      elevation="0"
      @click="$router.push({ name: 'Home' })"
    >
      <v-icon>
        mdi-arrow-left
      </v-icon>
    </v-btn>
    <v-list-item class="toolbar">
      <v-list-item-avatar>
        <Avatar :color="color" :name="title" />
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title>
          {{ title }}
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-toolbar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ChatToolbar',
  components: {
    Avatar: () => import('@/components/Avatar')
  },
  computed: {
    ...mapGetters('chat', ['info']),
    title() {
      return this.info?.title || ''
    },
    color() {
      return this.info?.color || ''
    }
  },
  methods: {
    ...mapActions('chat', ['loadInfo'])
  },
  watch: {
    '$route.params.id': {
      handler() {
        const { id } = this.$route.params
        this.loadInfo(id)
      },
      immediate: true
    }
  }
}
</script>
<style lang="scss" scoped>
.v-toolbar {
  width: 100%;
  position: fixed;
  transform: translateY(-100%) translateX(-1px);
  z-index: 5;
  border-left: 1px solid rgba(255, 255, 255, 0.12);
}
</style>
