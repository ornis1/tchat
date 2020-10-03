<template>
  <div>
    <ChatToolbar />
    <ChatMessages />
    <ChatInput />
    <ChatBottomDrawer />
  </div>
</template>

<script>
export default {
  name: 'Chat',
  components: {
    ChatToolbar: () => import('@/components/Chat/ChatToolbar'),
    ChatMessages: () => import('@/components/Chat/ChatMessages'),
    ChatInput: () => import('@/components/Chat/ChatInput'),
    ChatBottomDrawer: () => import('@/components/Chat/ChatBottomDrawer')
  }
}
</script>

<style></style>
