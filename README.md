# vue-cli-template

> NativeScript-Vue application template for quick prototyping with vue-cli (2.x).

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli/tree/master).

## Getting started

Install [vue-cli](https://github.com/vuejs/vue-cli):
``` bash
npm install -g vue-cli
```

Scaffold the project:
``` bash
vue init nativescript-vue/vue-cli-template <project-name>
cd <project-name>
```

Install package dependencies:
``` bash
npm install
```

Execute one of the following npm scripts:
``` bash
# Watch for changes and run the application on a connected device or native emulator
npm start

# Same as 'start', but run the application in debug mode
npm run debug

# Build the application for production or publication
npm run build

# Same as 'build', but also deploy the application to connected devices or native emulator
npm run deploy
```

### Specifying target platform(s)

Selecting the target platform(s) can be accomplished from the command line when invoking the above npm scripts.
For example, the following will debug the application on Android only:
``` bash
npm run debug -- --env.android
```

Omitting the `-- --env.<platform>` argument will attempt to target both platforms, which will only work in a properly configured OSX environment.

### Cleaning the build directory

The NativeScript application in `dist/` can be destroyed using the following:
``` bash
npm run clean
```
This can be useful when changing the application name or ID in `template/`.

## How it works

This template orchestrates the NativeScript-Vue application build process via `webpack.config.js`, located at the root of the project directory.
Settings like application ID and required permissions are stored in the `template` directory, which contains the source-controlled NativeScript project boilerplate (can be opened with Sidekick to configure, but not to build). This directory is copied on-demand to `dist`, where the native application is built with NativeScript after webpack has bundled the sources located in `src`. The sources bundled by Webpack produce `dist/app/app.<platform>.js`, `dist/app/app.<platform>.css` as well as the content of the `src/assets` directory (aliased as `~`).

When one of the npm scripts is invoked, NativeScript plugins found in the dependencies section of `package.json` are automatically injected into `template/package.json`. This ensures the plugins' postinstall hooks will be executed when the native application is prepared. Also, these plugins are set to resolve externally (i.e. when NativeScript builds the native application) by the `nativescript-vue-externals` npm package.

Finally, `exec-tns-webpack-plugin` executes the appropriate `tns` action (i.e. NativeScript CLI) based on the npm script that was invoked. This webpack plugin is also responsible of terminating gracefully should the build process be interrupted by the user.

## Using NativeScript plugins

Installing plugins differs slightly from the official NativeScript [documentation](https://docs.nativescript.org/plugins/plugins#installing-plugins).

Instead of `tns plugin add`, simply use `npm install` from the root of the project directory and restart the npm script:

``` bash
# Exit currently running npm script
npm install <plugin-name>
npm start
```

Please note that some plugins still have issues resolving with this template, visit the community [Slack](https://developer.telerik.com/wp-login.php?action=slack-invitation) for getting them to work and for general help.
