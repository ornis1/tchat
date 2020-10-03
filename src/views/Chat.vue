<template>
  <Chat />
</template>

<script>
export default {
  components: {
    Chat: () => import('@/components/Chat')
  },
  methods: {
    onKeyDown({ keyCode }) {
      if (keyCode === 27) {
        this.$router.push({ name: 'Home' })
      }
    }
  },
  created() {
    window.addEventListener('keydown', this.onKeyDown)
  },
  destroyed() {
    window.removeEventListener('keydown', this.onKeyDown)
  }
}
</script>

<style></style>
