import Vue from 'nativescript-vue';
import App from './App';
{{#store}}
import store from './store';
{{/store}}

import './styles.scss';

new Vue({
  {{#store}}
  store,
  {{/store}}
  render: h => h(App),
}).$start();
