<template>
  <v-dialog :value="modal" width="400" @click:outside="toggleGroup">
    <v-card tag="form" @submit.prevent>
      <v-card-title>
        <v-btn
          fab
          large
          class="mr-5 white--text"
          :color="color"
          @click="togglePalette"
        >
          <v-icon>
            mdi-camera
          </v-icon>
        </v-btn>
        <v-text-field
          label="Название группы"
          autofocus
          hide-details
          v-model="input"
        ></v-text-field>
      </v-card-title>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text color="primary" @click="toggleGroup">
          Отмена
        </v-btn>
        <v-btn text color="primary" type="submit" @click="handleCreateGroup">
          Создать
        </v-btn>
      </v-card-actions>
    </v-card>
    <PaletteModal @pick-color="handlePickColor" />
  </v-dialog>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import colors from 'vuetify/lib/util/colors'

export default {
  data() {
    return { input: '', color: '' }
  },
  components: {
    PaletteModal: () => import('@/components/modals/PaletteModal')
  },
  computed: {
    ...mapGetters('modals', ['group']),
    modal() {
      return this.group
    }
  },
  beforeMount() {
    this.setColor()
  },
  methods: {
    ...mapActions('modals', ['toggleGroup', 'createGroup', 'togglePalette']),
    handleCreateGroup() {
      if (!this.input.trim()) return
      this.createGroup({ title: this.input, color: this.color })
      this.input = ''
    },
    handlePickColor(color) {
      this.color = color
      this.togglePalette()
    },
    setColor() {
      const c = this.getValues(colors)
      const rnd = array => Math.floor(Math.random() * array.length)
      this.color = c[rnd(c)]
    },
    getValues(object) {
      const colors = []
      for (const key in object) {
        if (object[key] && typeof object[key] === 'object') {
          const element = object[key]
          const result = this.getValues(element)
          colors.push(result)
        } else {
          return Object.values(object)
        }
      }
      return colors.flat(Infinity)
    }
  }
}
</script>

<style></style>
