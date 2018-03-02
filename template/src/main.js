import Vue from 'nativescript-vue';

import App from './App';

{{#router}}
import router from './router';
{{/router}}

{{#store}}
import store from './store';
{{/store}}

import './styles.scss';

new Vue({

  {{#router}}
  router,
  template: `
  <Page ref="page" actionBarHidden="true">
    <router-view></router-view>
  </Page>
  `,
  {{else}}
  render: h => h(App),
  {{/router}}

  {{#store}}
  store,
  {{/store}}

}).$start();
