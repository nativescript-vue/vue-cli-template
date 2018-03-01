module.exports = {
  prompts: {
    name: {
      type: 'string',
      required: true,
      label: 'Project name',
    },
    app_id: {
      type: 'string',
      required: true,
      label: 'Application ID',
      default: 'org.nativescript.application',
    },
    description: {
      type: 'string',
      label: 'Project description',
      default: 'NativeScript-Vue application',
    },
    version: {
      type: 'string',
      required: true,
      label: 'Project version',
      default: '1.0.0',
    },
    author: {
      type: 'string',
      label: 'Author',
    },
    license: {
      type: 'string',
      label: 'License',
      default: 'MIT',
    },
    router: {
      type: 'confirm',
      label: 'Vue-Router',
    },
    store: {
      type: 'confirm',
      label: 'Vuex store',
    },
  },
  helpers: {
    androidVersionCode: (version) => {
      const parts = version.split('.');
      return parts[0] + '0' + parts[1] + '0' + parts[2];
    },
    cleanAppName: (name) => {
      return name.replace(/\W/g, '');
    },
  },
  filters: {
    'src/router/**/*': 'router',
    'src/components/Home.vue': 'router',
    'src/store/**/*': 'store',
    'src/components/Counter.vue': 'store',
  },
};
