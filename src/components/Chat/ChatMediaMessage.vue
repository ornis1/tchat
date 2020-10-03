<template>
  <v-list-item-content class="pa-0">
    <v-card min-width="100%" flat :elevation="0" color="transparent">
      <v-hover #default="{hover}">
        <v-img
          :class="[
            'd-grid',
            'rounded-0',
            'rounded-t',
            { 'rounded-b': !hasCaption }
          ]"
          :src="message.url"
        >
          <slot v-if="hover && !hasCaption" name="time" />
        </v-img>
      </v-hover>
    </v-card>
    <v-list-item-subtitle v-if="hasCaption" class="px-2 py-1">
      <span>
        {{ message.caption }}
      </span>
      <slot v-if="hasCaption" name="time" />
    </v-list-item-subtitle>
  </v-list-item-content>
</template>

<script>
export default {
  name: 'ChatMediaMessage',
  props: {
    message: {
      type: Object,
      required: true
    }
  },
  computed: {
    hasCaption() {
      return !!this.message.caption
    }
  }
}
</script>

<style scoped>
.v-card {
  display: grid;
}
</style>
