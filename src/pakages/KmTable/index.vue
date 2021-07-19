<template>
  <div class="form-table">
    <el-form ref="formLine" :model="formdata" label-width="80px" size="small" :inline="true">
      <RenderFormItem
        v-for="(item, index) in searchFormList"
        :key="item.id"
        :item="item"
        :formdata="formdata"
        @updateValue="updateValue"
      />
      <el-form-item>
        <el-button type="primary" @click="queryList">
          查询
        </el-button>
        <el-button type="primary" @click="resetForm('formLine')">
          重置
        </el-button>
      </el-form-item>
    </el-form>
    <el-table
      :data="data"
      v-loading="tableLoading"
      style="width: 100%; padding-top: 20px">
      <el-table-column
        v-for="(item, index) in columns"
        :key="index"
        :prop="item.prop"
        :label="item.label"
        :width="item.width ? item.width : ''"
        :min-width="item.minWwidth ? item.minWidth : ''">
        <template slot-scope="{ row }">
          <template v-if="!item.formater">
            {{ row[item.prop] }}
          </template>
          <template v-if="item.formater">
            <KmDataTableColumn :formater="item.formater(row)" />
          </template>
        </template>
      </el-table-column>
      <el-table-column
        :width="btnBoxWidth"
      >
        <template slot-scope="scope">
          <el-button
            v-for="(item, index) in extraBtn"
            :key="index"
            size="small"
            :type="item.type ? item.type : 'primary'"
            @click="item.atClick(scope.row)"
          >{{ item.text }}</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="page">
      <el-pagination
        v-if="total > 0 && showPagination"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="pageSizes"
        :page-size="size"
        :layout="layout"
        :total="total">
      </el-pagination>
    </div>
    <!-- <imchild :msg.sync="msg"></imchild> -->
  </div>
</template>

<script>
// import imchild from './components/imchild.vue'
import _ from 'lodash'
import RenderFormItem from './components/render-form-item.vue'
import KmDataTableColumn from './components/tableColumn'
export default {
  components: {
    RenderFormItem,
    // imchild,
    KmDataTableColumn
    // fromater: {
    //   functional: true,
    //   render: (h, ctx) => {ctx.props.content},
    // },
  },
  name: 'KmDataTable',
  props: {
    // form表单选项
    searchForm: {
      type: Array,
      default: () => []
    },
    extraBtn: {
      type: Array,
      required: true
    },
    columns: {
      type: Array,
      default: () => []
    },
    tableData: {
      type: Array,
      default: () => []
    },
    pageSizes: {
      type: Array,
      default: () => [10, 15, 20, 25]
    },
    layout: {
      type: String,
      default: 'total, sizes, prev, pager, next, jumper'
    },
    url: {
      type: String,
      default: ''
    },
    // total: {
    //   type: Number,
    //   default: 0
    // },
    size: {
      type: Number,
      default: 10
    },
    showPagination: {
      type: Boolean,
      default: false
    },
    btnBoxWidth: {
      type: String,
      default: '150px'
    },
    pagePath: {
      type: String,
      default: 'page'
    },
    pageSizePath: {
      type: String,
      default: 'size'
    },
    totalPath: {
      type: String,
      default: 'payload.total'
    },
    dataPath: {
      type: String,
      default: 'payload.content'
    },
    axiosConfig: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      msg: 778899,
      currentPage: 1,
      formdata: {},
      itemvalue: '',
      data: [],
      total: 0,
      tableLoading: false
    }
  },
  methods: {
    handleSizeChange(val) {
      this.size = val
      this.currentPage = 0
      this.queryList()
      // console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.currentPage = val
      this.queryList()
      // console.log(`当前页: ${val}`);
    },
    deleteRow(row) {
      console.log(row)
    },
    // 获取到elform的值
    updateValue({ id, val }) {
      this.formdata = { ...this.formdata, [id]: val }
    },

    queryList() {
      this.tableLoading = true
      const { url } = this
      const params = _.cloneDeep(this.formdata)
      params[this.pagePath] = this.currentPage
      params[this.pageSizePath] = this.size
      if (!url) {
        console.warn('url未空，不发送请求')
      }
      this.$axios({
        method: 'get',
        url,
        params,
        ...this.axiosConfig
      })
      .then(res => {
        this.tableLoading = false
        this.total = _.get(res.data, this.totalPath)
        this.data = _.get(res.data, this.dataPath)
      })
      .catch(res => {
        this.tableLoading = false
        console.error(res)
      })
    },

    resetForm(name) {
      this.formdata = {}
      this.$refs[name].clearValidate()
      this.queryList()
    }
  },
  computed: {
    searchFormList() {
      return this.searchForm
    }
  },
  watch: {
    // tableData: {
    //   handler(newVal,oldVal) {
    //     this.data = newVal
    //   },
    //   deep: true,
    //   immediate: true
    // }
  },
  created() {
    this.queryList()
  }
}
</script>

<style lang="scss">
.page {
  text-align: right;
  margin-top: 20px;
}
</style>