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

// Uncomment the following to see NativeScript-Vue output logs
//Vue.config.silent = false;

new Vue({

  {{#router}}
  router,
  {{else}}
  render: h => h({{#store}}Counter{{else}}HelloWorld{{/store}}),
  {{/router}}

  {{#store}}
  store,
  {{/store}}

}).$start();
