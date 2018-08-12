# vue-cli-template

> NativeScript-Vue application template for quick prototyping with vue-cli (2.x).

## Usage

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli/tree/master).

``` bash
# Scaffold project
npm install -g vue-cli
vue init nativescript-vue/vue-cli-template <project-name>
cd <project-name>

# Install dependencies
npm install

# Build for production
tns build <platform> --bundle

# Build, watch for changes and debug the application
tns debug <platform> --bundle

# Build, watch for changes and run the application
tns run <platform> --bundle

# Clean the NativeScript application instance
tns platform remove <platform>
```

## Using NativeScript plugins

Installing plugins is the same as official NativeScript [documentation](https://docs.nativescript.org/plugins/plugins#installing-plugins).

Use `tns plugin add` from the root of the project directory.

```shell
tns plugin add <plugin-name>
```

Please note that some plugins still have issues resolving with this template, visit the community [Slack](https://developer.telerik.com/wp-login.php?action=slack-invitation) for getting them to work and for general help.
