<template>
  <v-avatar v-bind="$attrs" :color="$attrs.color" class="mt-auto">
    <span class="white--text headline text-uppercase"> {{ name[0] }}</span>
  </v-avatar>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    }
  }
}
</script>

<style></style>
