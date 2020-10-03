<template>
  <v-btn
    @click="toggleGroup"
    class="my-1 justify-left"
    block
    tile
    elevation="0"
    style="text-transform:unset"
  >
    <v-icon>
      mdi-account-multiple
    </v-icon>
    <span>
      Create group
    </span>
  </v-btn>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions({
      toggleGroup: 'modals/toggleGroup'
    })
  }
}
</script>

<style></style>
