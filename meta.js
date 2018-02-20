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
      default: 'NativeScript-Vue application',
    },
    version: {
      type: 'string',
      required: true,
      label: 'Project version',
      default: '0.1.0',
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
  },
};
