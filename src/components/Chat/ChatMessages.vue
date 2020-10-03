<template>
  <v-container>
    <v-list flat color="transparent">
      <v-row>
        <transition-group name="list">
          <v-col
            v-for="message in messages"
            :key="message.id"
            cols="12"
            class="pa-0"
          >
            <ChatMessage :message="message" />
          </v-col>
        </transition-group>
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
<style>
.list-enter-active,
.list-leave-active {
  transition: all 0.3s;
}
.list-enter {
  opacity: 0;
}
.list-leave-to /* .list-leave-active до версии 2.1.8 */ {
  opacity: 0;
  transform: translateX(-100%);
}
</style>
