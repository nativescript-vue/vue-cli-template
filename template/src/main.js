const Vue = require('nativescript-vue');
const App = require('./App').default;

import './styles.scss';

new Vue({
  template: `<page><app/></page>`,

  components: {
    App,
  },
}).$start();
