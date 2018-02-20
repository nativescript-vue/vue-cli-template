const Vue = require('nativescript-vue');
const App = require('./App').default;

new Vue({
  template: `<page><app/></page>`,

  components: {
    App,
  },
}).$start();
