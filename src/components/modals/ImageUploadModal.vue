<template>
  <v-dialog :value="imageUpload" hide-overlay persistent max-width="320">
    <v-card class="mx-auto">
      <v-card-title class="pt-10">
        <img
          v-if="url"
          :src="url"
          style="height: 100%; width: 100%; object-fit: contain"
        />
      </v-card-title>
      <v-form @submit.prevent>
        <v-card-text class="pt-5 pb-3">
          <v-text-field
            label="Подпись"
            autofocus
            hint
            hide-details
            v-model="caption"
            @keypress.enter="handleUpload"
          />
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary lighten-2"
            text
            @click="handleToggleImageUpload"
          >
            Отменить
          </v-btn>
          <v-btn
            color="primary lighten-2"
            text
            @click="handleUpload"
            :loading="loading"
          >
            Отправить
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { storage } from '@/plugins/firebase'

export default {
  props: {
    file: { type: Object && null, required: true }
  },
  data() {
    return { loading: false, caption: '', url: '' }
  },
  computed: {
    ...mapGetters('modals', ['imageUpload'])
  },
  methods: {
    ...mapActions({
      toggleImageUpload: 'modals/toggleImageUpload',
      sendMediaMessage: 'chat/sendMediaMessage'
    }),
    previewImage() {
      const fr = new FileReader()
      fr.readAsDataURL(this.file)

      fr.onload = e => {
        this.url = e.target.result
      }
    },
    handleToggleImageUpload() {
      this.reset()
      this.toggleImageUpload()
    },
    reset() {
      this.loading = false
      this.caption = ''
    },
    handleUpload() {
      this.loading = true
      const task = storage.ref(`images/${this.file.name}`).put(this.file)
      task.on(
        'state_changed',
        () => {},
        error => {
          this.reset()
          console.error(error)
        },
        () => {
          storage
            .ref(`images/${this.file.name}`)
            .getDownloadURL()
            .then(url => {
              this.sendMediaMessage({ url, caption: this.caption })
              this.reset()
              this.toggleImageUpload()
            })
        }
      )
    }
  },
  watch: {
    file(val) {
      if (val) {
        this.previewImage()
      }
    }
  }
}
</script>

<style></style>
