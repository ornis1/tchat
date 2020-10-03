<template>
  <v-dialog :value="value" overlay-opacity="1">
    <v-container fluid>
      <v-row>
        <v-col
          md="6"
          lg="4"
          cols="12"
          :key="colorName"
          v-for="(colorObj, colorName) in colors"
        >
          <span class="title ">
            {{ colorName }}
          </span>
          <v-list-item-group @change="$emit('pick-color', $event)">
            <v-list-item
              v-for="(color, shade, index) in colorObj"
              :key="shade"
              :style="`background-color:${color}`"
              :input-value="color"
              :value="color"
            >
              <v-list-item-title
                :class="[
                  'black--text',
                  'd-flex',
                  'justify-space-between',
                  {
                    'white--text': index === 0 || shade.includes('darken')
                  }
                ]"
              >
                <span> {{ colorName }} {{ shade }} </span>
                <span>{{ color }}</span>
              </v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-col>
      </v-row>
    </v-container>
  </v-dialog>
</template>

<script>
import colors from 'vuetify/lib/util/colors'
export default {
  name: 'PaleteModal',
  data() {
    return { colors }
  },
  computed: {
    value() {
      return this.$store.getters['modals/palette']
    }
  }
}
</script>

<style></style>
