import KmDataTable from './index.vue'

// 为组件添加 install 方法，用于按需引入
KmDataTable.install = function (Vue) {
    Vue.component(KmDataTable.name, KmDataTable)
}

export default KmDataTable