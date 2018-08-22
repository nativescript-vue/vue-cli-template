import Vue from 'nativescript-vue';

{{#router}}
import router from './router';
{{else}}
{{#store}}
import Counter from './components/Counter';
{{else}}
import HelloWorld from './components/HelloWorld';
{{/store}}
{{/router}}

{{#store}}
import store from './store';
{{/store}}

import './styles.scss';

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = !DEBUG_MODE;

new Vue({

  {{#router}}
  router,
  template: `<Frame><router-view/></Frame>`,
  {{else}}
  render: h => h('frame',[h({{#store}}Counter{{else}}HelloWorld{{/store}})]),
  {{/router}}

  {{#store}}
  store,
  {{/store}}

}).$start();
