<template>
  <v-text-field
    class="mt-3"
    hide-details
    prepend-inner-icon="mdi-magnify"
    solo
    background-color="transparent"
    placeholder="Search"
    flat
    dense
    color="grey"
    clearable
    v-model="model"
  >
  </v-text-field>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data: () => ({ focus: false }),
  computed: {
    ...mapGetters('sidebar', ['input']),
    model: {
      get() {
        return this.input
      },
      set(v) {
        this.setInput(v || '')
      }
    }
  },
  methods: {
    ...mapActions('sidebar', ['setInput'])
  }
}
</script>

<style></style>
