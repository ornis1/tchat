<template>
  <v-list-item-content class="pr-11 pb-1 ">
    <v-list-item-title class="text--primary d-flex align-center">
      <span class="mr-auto">
        {{ message.sender.name }}
      </span>
    </v-list-item-title>

    <v-list-item-subtitle class="message">
      <span>
        {{ message.text }}
      </span>
    </v-list-item-subtitle>
    <slot name="time" />
  </v-list-item-content>
</template>

<script>
export default {
  props: {
    message: {
      type: Object,
      default: () => ({})
    },
    time: String
  }
}
</script>

<style></style>
