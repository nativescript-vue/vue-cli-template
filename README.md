> **Note:** This is a new version of the template for NativeScript 7, if you are looking for the old template, it is available on the [ns6 branch](https://github.com/nativescript-vue/vue-cli-template/tree/ns6).

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
ns build <platform>

# Preview the application on a device
ns preview

# Build, watch for changes and run the application
ns run

# Clean the NativeScript application instance
ns platform remove <platform>

# Hot Module Replacement (HMR) disabled Debugging session 
ns debug <platform> --no-hmr
```
<details><summary>Yarn usage</summary>
<p>

``` bash
# Scaffold project
yarn global add @vue/cli @vue/cli-init
vue init nativescript-vue/vue-cli-template <project-name>
cd <project-name>

# Install dependencies
yarn

```

</p>
</details>

### Debugging vs Production

During usual run, project runs with following settings -

1. Code is **not** minified
2. Vue.config.silent is false, so every component creation is logged

```bash
# Build, watch for changes and debug the application
ns debug <platform>
```

To minify code, and prevent Vue logs -

```bash
# Build for production
ns build <platform> --env.production

# Run as production
ns run <platform> --env.production
```

## Using NativeScript plugins

Installing plugins is the same as official NativeScript [documentation](https://docs.nativescript.org/plugins/plugins#installing-plugins).

Use `ns plugin add` from the root of the project directory.

```shell
ns plugin add <plugin-name>
```
