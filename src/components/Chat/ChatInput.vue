<template>
  <v-footer inset app class="pa-0">
    <v-text-field
      v-model="input"
      solo
      hide-details=""
      class="chat-input"
      placeholder="Сообщение..."
      append-icon="mdi-send"
      tile
      autocomplete="off"
      @click:append="onSubmit"
      @keypress.enter="onSubmit"
    >
      <template #prepend-inner>
        <v-file-input
          outlined
          hide-input
          hide-details
          :class="['mt-0', 'pt-0']"
          v-model="file"
          @change="handleChange"
        />
      </template>
    </v-text-field>
    <ImageUploadModal :file="file" />
  </v-footer>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'ChatInput',
  components: {
    ImageUploadModal: () => import('@/components/modals/ImageUploadModal.vue')
  },
  data: () => ({
    input: '',
    duration: 300,
    offset: 0,
    easing: 'easeInOutCubic',
    file: null
  }),
  methods: {
    ...mapActions({
      sendMessage: 'chat/sendMessage',
      toggleImageUpload: 'modals/toggleImageUpload'
    }),
    onSubmit() {
      this.$vuetify.goTo(9999, this.options)
      if (!this.input) return
      this.sendMessage(this.input)
      this.input = ''
    },
    handleChange() {
      if (this.file) {
        this.toggleImageUpload()
      }
    }
  },
  computed: {
    ...mapGetters('modals', ['imageUpload']),
    options() {
      return {
        duration: this.duration,
        offset: this.offset,
        easing: this.easing
      }
    }
  },
  watch: {
    imageUpload: {
      handler(v) {
        // Модальное окно закрылось
        // Чистим инпут
        if (v === false) this.file = null
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.v-file-input {
  transform: translate(0px, 0px) rotate(45deg);
}
</style>
