# el-form

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### tableConfig
```
npm install km-data-table
```

### main的js中引入
```
import KmDataTable from 'km-data-table'
Vue.use(KmDataTable);
```

### tableConfig
```
// form表单选项
	// 表单列表 支持 input 和 select
    searchForm: {
      type: Array,
      default: () => []
    },
	// table自定义按钮 支持自定义事件
    extraBtn: {
      type: Array,
      required: true
    },
	// 表单列名称
    columns: {
      type: Array,
      default: () => []
    },
	// 分页size 详见element
    pageSizes: {
      type: Array,
      default: () => [10, 15, 20, 25]
    },
	// 分页layout 详见element
    layout: {
      type: String,
      default: 'total, sizes, prev, pager, next, jumper'
    },
	// 请求地址
    url: {
      type: String,
      default: ''
    },
	// 分页大小
    size: {
      type: Number,
      default: 10
    },
	// 是否显示分页
    showPagination: {
      type: Boolean,
      default: false
    },
	// 操作列宽度
    btnBoxWidth: {
      type: String,
      default: '150px'
    },
	// 自定义页数传参字段名
    pagePath: {
      type: String,
      default: 'page'
    },
	// 自定义传参分页字段名
    pageSizePath: {
      type: String,
      default: 'size'
    },
	// 自定义接收返回total
    totalPath: {
      type: String,
      default: 'payload.total'
    },
	// 自定义接收返回data路径
    dataPath: {
      type: String,
      default: 'payload.content'
    },
	// 自定义axios参数
    axiosConfig: {
      type: Object,
      default: () => {}
    }
  ```