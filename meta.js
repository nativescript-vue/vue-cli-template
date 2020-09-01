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
    update: {
      type: 'confirm',
      label: 'You are about to update the current project, are you sure?',
      default: false,
      when: 'inPlace',
    },
    name: {
      type: 'string',
      required: true,
      label: 'Project name',
      when: '!inPlace',
    },
    description: {
      type: 'string',
      label: 'Project description',
      default: 'A native application built with NativeScript-Vue',
      when: '!inPlace',
    },
    app_name: {
      type: 'string',
      required: true,
      label: 'Application name',
      default: 'NativeScript-Vue Application',
      when: '!inPlace',
    },
    app_id: {
      type: 'string',
      required: true,
      label: 'Unique application identifier',
      default: 'org.nativescript.application',
      validate: validateAppId,
      when: '!inPlace',
    },
    version: {
      type: 'string',
      required: true,
      label: 'Project version',
      default: '1.0.0',
      validate: validateVersion,
      when: '!inPlace',
    },
    author: {
      type: 'string',
      label: 'Author',
      when: '!inPlace',
    },
    license: {
      type: 'string',
      label: 'License',
      default: 'MIT',
      when: '!inPlace',
    },
    lang: {
      type: 'list',
      label: 'Select the programming language',
      choices: [
        'javascript',
        'typescript',
      ],
      default: 'javascript',
      when: '!inPlace',
    },
    preset: {
      type: 'list',
      label: 'Select a preset (more coming soon)',
      choices: [
        'Simple',
        'TabView',
        'SideDrawer',
      ],
      default: 'Simple',
      when: '!inPlace',
    },
    // router: {
    //   type: 'confirm',
    //   label: 'Install vue-router? (experimental)',
    //   default: false,
    //   when: '!inPlace',
    // },
    store: {
      type: 'confirm',
      label: 'Install vuex? (state management)',
      default: false,
      when: '!inPlace',
    },
    devtools: {
      type: 'confirm',
      label: 'Install vue-devtools?',
      default: true,
      when: '!inPlace',
    },
    color_scheme: {
      type: 'list',
      label: 'Color scheme',
      choices: [
        'none',
        'default',
        'aqua',
        'blue',
        'brown',
        'forest',
        'grey',
        'lemon',
        'lime',
        'orange',
        'purple',
        'ruby',
        'sky',
      ],
      default: 'none',
      when: '!inPlace',
    },
  },
  helpers: {
    androidVersionCode: version => {
      const parts = version.split('.')
      return parts[0] + '0' + parts[1] + '0' + parts[2]
    },
  },
  filters: {
    'src/**/!(main.ts|main.js)': '!inPlace',
    'src/main.js': '!inPlace && lang == "javascript"',
    'src/main.ts': '!inPlace && lang == "typescript"',
    'package.json': '!inPlace',
    'README.md': '!inPlace',
    '.gitignore': '!inPlace',

    'src/tsconfig.js': '!inPlace && lang == "typescript"',
    'src/types/**/*': '!inPlace && lang == "typescript"',
    'src/router/**/*': '!inPlace && router',
    'src/components/Home.vue': '!inPlace && router',
    'src/store.js': '!inPlace && store && lang == "javascript"',
    'src/store.ts': '!inPlace && store && lang == "typescript"',
    'src/components/Counter.vue': '!inPlace && store',
  },
  complete(data, {logger, chalk}) {
    if (data.inPlace) {
      logger.log('')
      logger.log(chalk.green(`Successfully updated application.`))
      logger.log('')
      logger.log(`One last step is required to be fully updated`)
      logger.log(`You will need to update your ${chalk.underline('package.json')}`)
      logger.log(`To match the dependencies from the template`)
      logger.log(chalk.yellow(`https://github.com/nativescript-vue/vue-cli-template/blob/master/template/package.json`))
      logger.log('')
      logger.log(chalk.grey(`-------------------------------------------`))
      logger.log(`The reason we don't do this automatically is`)
      logger.log(`that you would lose any modifications you've`)
      logger.log(`made to ${chalk.underline('package.json')}`)
    } else {
      logger.log(`cd ${chalk.yellow(data.destDirName)}`)
      logger.log(`npm install`)
      logger.log(`ns preview`)
      logger.log(chalk.grey(`# or`))
      logger.log(`ns run`)
    }
  }
}
