<template>
  <v-list-item transition="slide-x-transition" :ripple="false" class="message">
    <v-list-item-avatar class="mt-auto mb-0">
      <v-img :src="message.sender.photo" />
    </v-list-item-avatar>

    <component
      v-touch="touchOptions"
      :is="component[message.type]"
      :message="message"
      :time="time"
    >
      <template #time>
        <span class="time caption">
          {{ time }}
        </span>
      </template>
    </component>
  </v-list-item>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'ChatMessage',
  props: {
    message: {
      type: Object,
      default: () => ({})
    }
  },
  components: {
    ChatDefaultMessage: () =>
      import('@/components/Chat/ChatDefaultMessage.vue'),
    ChatMediaMessage: () => import('@/components/Chat/ChatMediaMessage.vue')
  },
  data() {
    return {
      menu: false,
      timeoutId: null,
      component: {
        text: 'ChatDefaultMessage',
        photo: 'ChatMediaMessage'
      }
    }
  },

  computed: {
    time() {
      const date = new Date(this.message.timestamp?.toDate())
      if (!date) return ''
      const minutes = `0${date.getUTCMinutes()}`.slice(-2)
      const hours = `0${date.getUTCHours()}`.slice(-2)

      return `${hours}:${minutes}`
    },
    touchOptions() {
      return { start: this.handleStartTouch, end: this.handleEndTouch }
    }
  },
  methods: {
    ...mapActions('chat', ['setSelectedMessage']),
    vibrate(duration) {
      if ('vibrate' in window?.navigator) {
        window.navigator.vibrate(duration)
      }
    },
    handleStartTouch() {
      // Turn on only on mobile
      if (!this.$vuetify.breakpoint.smAndDown) return
      clearTimeout(this.timeoutId)
      this.timeoutId = setTimeout(() => {
        this.vibrate(70)
        this.setSelectedMessage(this.message)
      }, 400)
    },
    handleEndTouch() {
      clearTimeout(this.timeoutId)
    }
  },
  destroyed() {
    clearTimeout(this.timeoutId)
  }
}
</script>

<style lang="stylus" scoped>
.message {
  max-width: 450px !important;
}
>>>.message {
  white-space: normal !important;
}

.time {
  position: absolute;
  right: 8px;
  bottom: 0;
  opacity: 0.8;
  letter-spacing: unset !important;
  z-index: 1;
}

.pos-r {
  position: relative;
}

.message {
  white-space: normal;
}

.avatar {
  // align-self: flex-end;
  align-self: flex-start;
}

.date {
  align-self: flex-start;
}

.btn-answer {
  opacity: 0;

  &:hover {
    text-decoration: underline;
  }
}

.changed {
  float: right;
}

.v-menu__content {
  & .v-list-item {
    width: 100%;
    margin-top: 0;
  }
}

.v-list-item {
  width: fit-content;
  margin-top: 10px;
  overflow: initial;

  &:hover .btn-answer {
    opacity: 1;
  }

  &__avatar {
    align-self: flex-end;
  }

  &__content {
    position: relative;
    border-radius: 6px;
    background-color: #333;
    padding: 10px;

    & .v-list-item__content {
      border-left: 2px solid #2196f3;
      border-radius: 0;
      padding: 0;
      padding-left: 10px;

      &:before {
        display: none;
      }
    }
  }
}
</style>
