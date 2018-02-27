# vue-cli-template

> NativeScript-Vue application template for quick prototyping with vue-cli (2.x).

## Usage

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli).

``` bash
# Scaffold project
npm install -g vue-cli
vue init nativescript-vue/vue-cli-template <project-name>
cd <project-name>

# Install dependencies
npm install

# Build for production
npm run build:android
npm run build:ios

# Build, watch for changes and run the application
npm run watch:android
npm run watch:ios
```

## How it works

This template orchestrates the native application build process via the `index.js` script located at the root of the project directory, which is invoked by the `build` and `watch` npm scripts internally.

First of all, the script prepares a fresh (and disposable) instance of the NativeScript application inside `dist`.
It does so by creating a recursive copy of the `template` folder, where the default boilerplate of the NativeScript application is kept under version control for persistence.
This means the `template` directory can be opened with NativeScript Sidekick to adjust the various application settings (though building from there is not possible).
For these changes to take effect, the `build` or `watch` script must be restarted.

Once the boilerplate is copied inside `dist`, the script invokes webpack to assemble the project sources from `src` into `dist/app`.
This is where NativeScript expects to find the files used to build the actual native application in the next and final step of the process.
These files include the platform-specific script `app.{platform}.js` and stylesheet `app.{platform}.css`, as well as the content of the `src/assets` directory.

Finally, the script invokes `tns` (i.e. NativeScript CLI) to build the application and optionally run it on the specified platform.
