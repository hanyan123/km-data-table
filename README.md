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
tableConfig: {
	// 列名称数据
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
	// url 依赖axios
	url: 'https://www.fastmock.site/mock/b127e0a9af5cb4d8cc82cf9b7682dced/demo/api/list',
	
	// axiosConfig: {} 配置 详见axios的配置
	
	// 搜索框form表单 目前支持select 和 input
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
  ```