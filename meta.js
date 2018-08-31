const validateAppId = app_id => {
  let parts = app_id.split('.')
  if (parts.length < 2) {
    return 'App ID must contain two or more strings, separated by a dot.'
  }
  if (
    parts.some(part => {
      return !/^[a-zA-Z]\w+$/i.test(part)
    })
  ) {
    return 'Each string must start with a letter and should contain only letters and numbers.'
  }
  if (!/^[a-z]/.test(app_id[0])) {
    return 'App ID must start with a lowercase letter.'
  }

  return true
}

const validateVersion = version => {
  if (!/^(\d+\.)(\d+\.)(\d)$/.test(version)) {
    return 'Version must have major, minor and patch numbers.'
  }
  return true
}

module.exports = {
  prompts: {
    name: {
      type: 'string',
      required: true,
      label: 'Project name',
    },
    description: {
      type: 'string',
      label: 'Project description',
      default: 'A native application built with NativeScript-Vue',
    },
    app_name: {
      type: 'string',
      required: true,
      label: 'Application name',
      default: 'NativeScript-Vue Application',
    },
    app_id: {
      type: 'string',
      required: true,
      label: 'Unique application identifier',
      default: 'org.nativescript.application',
      validate: validateAppId,
    },
    version: {
      type: 'string',
      required: true,
      label: 'Project version',
      default: '1.0.0',
      validate: validateVersion,
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
      label: 'Install vue-router? (experimental)',
      default: false,
    },
    store: {
      type: 'confirm',
      label: 'Install vuex? (state management)',
      default: false,
    },
    color_scheme: {
      type: 'list',
      label: 'Color scheme',
      choices: [
        'aqua',
        'blue',
        'brown',
        'dark',
        'forest',
        'grey',
        'lemon',
        'light',
        'lime',
        'orange',
        'purple',
        'ruby',
        'sky',
      ],
      default: 'light',
    },
  },
  helpers: {
    androidVersionCode: version => {
      const parts = version.split('.')
      return parts[0] + '0' + parts[1] + '0' + parts[2]
    },
  },
  filters: {
    'app/router/**/*': 'router',
    'app/components/Home.vue': 'router',
    'app/store/**/*': 'store',
    'app/components/Counter.vue': 'store',
  },
}
