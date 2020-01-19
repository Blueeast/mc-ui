import McButton from './src/button.vue'

McButton.install = function (Vue) {
  Vue.component(McButton.name, McButton)
}

export default McButton