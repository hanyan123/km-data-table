<template>
  <el-form-item
    :label="item.label"
    :prop="item.id"
    :rules="item.rules ? item.rules : undefined"
  >
    <el-input
      v-if="item.type === 'input'"
      v-model="inputValue"
      :placeholder="item.el.placeholder"
      @input="(value) => { return valueInput(value, item.id)}"
    ></el-input>
    <el-select
      v-if="item.type === 'select'"
      v-model="inputValue"
      :rules="item.rules ? item.rules : undefined"
      :placeholder="item.el.placeholder"
      @change="(value) => {return valueInput(value, item.id)}"
    >
      <el-option
        v-for="(option, index) in item.options"
        :key="index"
        :label="option.label"
        :value="option.value"
      ></el-option>
    </el-select>
  </el-form-item>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    },
    formdata: {
      type: Object,
      default: () => {}
    }
    // itemValue: {}
  },
  data() {
    return {
      msg: 1213131,
      inputValue: ''
    }
  },
  computed: {
    // inputValue() {
    //   return this.itemValue
    // }
  },
  methods: {
    valueInput(val, id) {
      this.$emit('updateValue', { id, val })
    },
  },
  watch: {
    // 重置form表单 监听首页的内容
    formdata: {
      handler(val) {
        if (!Object.keys(val).length) {
          this.inputValue = ''
        }
      }
    }
  }
}
</script>

<style>

</style>