import Vue from 'nativescript-vue'
import App from './components/App'

{{#devtools}}import VueDevtools from 'nativescript-vue-devtools'
{{#store}}import store from './store'{{/store}}

if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools)
}
{{/devtools}}

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')

{{#if_eq preset "SideDrawer"}}
Vue.registerElement(
  'RadSideDrawer',
  () => require('nativescript-ui-sidedrawer').RadSideDrawer
)
{{/if_eq}}

new Vue({
  {{#store}}store,{{/store}}
  render: h => h('frame', [h(App)])
}).$start()
