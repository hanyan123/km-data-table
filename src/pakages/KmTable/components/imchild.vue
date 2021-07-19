<template>
  <div class="msg">
    {{ msg }}
    <button @click="addNum">点我</button>
  </div>
</template>

<script>
export default {
  props: {
    msg: {
      type: Number,
      default: 0
    }
  },
  methods: {
    addNum() {
      this.$emit("update:msg", 1699999)
    }
  }
}
</script>

<style>
.msg {
  color: red;
}
</style>