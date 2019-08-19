import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'

import BootstrapVue from 'bootstrap-vue'

import './assets/css/main.scss'

// widget setup
// (optional) 'Custom elements polyfill'
import 'document-register-element/build/document-register-element'
// vue-custom-element by karol-f
import vueCustomElement from 'vue-custom-element'
Vue.use(vueCustomElement)

Vue.use(BootstrapVue)
Vue.config.productionTip = false

App.store = store
App.router = router
Vue.customElement('fit-calc', App)
