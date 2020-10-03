<template lang="pug">
  v-navigation-drawer(
    v-model="model"
    bottom
    fixed
    height="auto"
    color="accent darken-1"
    class="rounded-t-xl mx-auto"
    overlay-opacity="0.8"
    overlay-color="black"
    )
    template(#default)
      v-list
        v-list-item-group(
          v-model="selectedItem"
        )
          v-list-item(
            v-if="item.show"
            v-for="(item, index) in items"
            @click="item.handler"
            :key="index"
            :value="index"
            :input-value="index")
            | {{ item.label }}

          //- v-list-item-content

</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'ChatBottomDrawer',
  data() {
    return {
      selectedItem: null
    }
  },
  computed: {
    ...mapGetters('chat', ['bottomDrawer', 'selectedMessage']),
    ...mapGetters('user', ['user']),
    model: {
      get() {
        return this.bottomDrawer
      },
      set(value) {
        this.setBottomDrawer(value)
      }
    },
    items() {
      return [
        {
          label: 'Удалить',
          handler: this.deleteMessage,
          show: this.selectedMessage?.sender.id === this.user.id
        }
      ]
    }
  },
  methods: {
    ...mapActions('chat', ['setBottomDrawer', 'deleteMessage'])
  }
}
</script>

<style></style>
