<template>
  <v-container class="fill-height">
    <v-row justify="center" align="center">
      <v-card height="fit-content">
        <v-card-title class="justify-center">
          Авторизация
        </v-card-title>
        <v-card-actions>
          <v-btn
            class="white black--text text-transform-normal mx-auto"
            text
            @click="signIn"
          >
            <v-icon class="mr-2">
              mdi-google
            </v-icon>
            <span>Continue with Google</span>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  methods: {
    ...mapActions('user', ['signIn'])
  },
  computed: {
    ...mapGetters('user', ['user'])
  }
}
</script>

<style scoped>
.v-btn {
  text-transform: unset;
}
</style>
