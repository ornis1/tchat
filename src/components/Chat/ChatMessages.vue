<template>
  <v-container>
    <v-list flat color="transparent">
      <v-row>
        <v-col
          v-for="message in messages"
          :key="message.id"
          cols="12"
          class="pa-0"
        >
          <ChatMessage :message="message" />
        </v-col>
      </v-row>
    </v-list>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'ChatMessages',
  components: {
    ChatMessage: () => import('@/components/Chat/ChatMessage')
  },
  computed: {
    ...mapGetters({
      messages: 'chat/messages'
    }),
    id() {
      return this.$route.params.id
    }
  },
  methods: {
    ...mapActions('chat', ['loadMessages'])
  },
  watch: {
    '$route.params.id': {
      handler() {
        const { id } = this.$route.params
        this.loadMessages(id)
      },
      immediate: true
    }
  }
}
</script>
