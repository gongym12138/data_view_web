<template>
  <div>
    <router-view v-if="isRouterAlive" />
  </div>
</template>

<script>
export default {
  name: 'Blank',
  provide() {
    return {
      reload: this.reload
    }
  },
  data() {
    return {
      isRouterAlive: true
    }
  },
  methods: {
    reload() {
      this.isRouterAlive = false
      this.$nextTick(function() {
        this.isRouterAlive = true
      })
    }
  }
}
</script>
