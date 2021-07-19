<template>
  <div id="app">
    <KmDataTable
      v-bind="tableConfig"
    />
  </div>
</template>
<script>
// import KmDataTable from './views/pakages/ElTable.vue'
export default {
  components: {
    // KmDataTable
  },
  props: {},
  data () {
    return {
      tableConfig: {
        // 列名称
        columns: [
          {prop: 'id', label: 'ID', align: 'center', width: '150px'},
          {
            prop: 'name',
            label: '姓名',
          //   <div>
          //   <el-button type="text" onClick={() => this.goView(row.productId)}>
          //     {row.name}
          //   </el-button>
          // </div>
            formater: (row) => {
              return (
                <span style="color: red">{ row.name }</span>
              )
            }
          },
          {prop: 'address', label: '地址'},
          {prop: 'phone', label: '手机号'},
        ],
        // 列数据
        // tableData: [{
        //   date: '2016-05-02',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1518 弄'
        // }, {
        //   date: '2016-05-04',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1517 弄'
        // }, {
        //   date: '2016-05-01',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1519 弄'
        // }, {
        //   date: '2016-05-03',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1516 弄'
        // }],
        // 分页相关
        showPagination: true,
        pageSizes: [10, 15, 20, 25],
        layout: 'total, sizes, prev, pager, next, jumper',
        total: 100,
        size: 10,
        // 操作列的宽度
        btnBoxWidth: '150px',
        // 操作按钮
        extraBtn: [
          {
            type: 'danger',
            text: '删除',
            atClick: (row) => {
              console.log(row)
            }
          }
        ],
        url: 'https://www.fastmock.site/mock/b127e0a9af5cb4d8cc82cf9b7682dced/demo/api/list',
        searchForm: [
          {
            el: { placeholder: '请输入设备名称' },
            id: 'condition',
            type: 'input',
            rules: [
              { required: true, message: '请输入设备名称', trigger: 'blur' }
            ]
          },
          {
            id: 'status',
            type: 'select',
            el: { placeholder: '请选择状态' },
            options: [
              {
                label: '未激活',
                value: '未激活',
              },
              {
                label: '在线',
                value: '在线',
              },
              {
                label: '离线',
                value: '离线',
              },
            ],
          },
        ]
      }
    }
  },
  methods: {
    queryList(val) {
      console.log(val)
    },
    resetForm(val) {
      console.log(val)
    }
  }
}
</script>

<style>

</style>
