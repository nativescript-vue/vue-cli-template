> **Note:** This is a new version of the template, if you are looking for the old template, it is available on the [legacy branch](https://github.com/nativescript-vue/vue-cli-template/tree/legacy).

# vue-cli-template

> NativeScript-Vue application template for quick prototyping with vue-cli (2.x).

## Usage

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli/tree/master).

``` bash
# Scaffold project
npm install -g @vue/cli @vue/cli-init
vue init nativescript-vue/vue-cli-template <project-name>
cd <project-name>

# Install dependencies
npm install

# Build
tns build <platform> --bundle

# Build, watch for changes and run the application
tns run <platform> --bundle

# Build, watch for changes and run the application with
# HMR enabled (Hot Module Replacement)
# ---
# make sure you have the latest nativescript cli installed for this to work
# npm install -g nativescript@next
tns run <platform> --bundle --hmr

# Clean the NativeScript application instance
tns platform remove <platform>
```

### Debugging vs Production

During usual run, project runs with following settings -

1. Code is **not** minified
2. Vue.config.silent is false, so every component creation is logged

```bash
# Build, watch for changes and debug the application
tns debug <platform> --bundle
```

To minify code, and prevent Vue logs -

```bash
# Build for production
tns build <platform> --bundle --env.production

# Run as production
tns run <platform> --bundle --env.production
```

## Using NativeScript plugins

Installing plugins is the same as official NativeScript [documentation](https://docs.nativescript.org/plugins/plugins#installing-plugins).

Use `tns plugin add` from the root of the project directory.

```shell
tns plugin add <plugin-name>
```

Please note that some plugins still have issues resolving with this template, visit the community [Slack](https://developer.telerik.com/wp-login.php?action=slack-invitation) for getting them to work and for general help.
