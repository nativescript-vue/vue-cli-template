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
npm run build
npm run build:<platform>

# Build, watch for changes and debug the application
npm run debug
npm run debug:<platform>

# Build, watch for changes and run the application
npm run watch
npm run watch:<platform>

# Clean the NativeScript application instance (i.e. rm -rf dist)
npm run clean
```

> When invoking the various npm scripts, omitting the platform will attempt to launch `tns` for both platforms, which will only work in a properly configured OSX environment.

## How it works

This template orchestrates the native application build process via webpack with the clever use of the `prepare.js` and `launch.js` scripts located at the root of the project directory.
These are invoked directly from `webpack.config.js` before the bundling step and via `webpack-synchronizable-shell-plugin`, respectively.

First of all, `prepare.js` creates or updates the (dispososable) instance of the NativeScript application inside `dist`.
It does so by creating a recursive copy of the `template` folder, where the default boilerplate for the NativeScript application is kept under version control for persistence.
This means the `template` directory can be opened with NativeScript Sidekick to adjust the various application settings and Android permissions (though building from there is not possible).

For these changes to take effect, the npm script must be restarted.

Since many NativeScript plugins rely on postinstall hooks to work properly, these are automatically copied from `package.json` to the dependencies section in `template/package.json` (changes to this file should be committed with the project).
These plugins will be resolved externally by webpack (i.e. when the native package is built) with the use of the `nativescript-vue-externals` module, which identifies external {N} plugins in the project's dependencies.

Once the application instance is ready inside `dist`, webpack bundles the project sources from `src` into `dist/app` for the specified platform(s).
This is where NativeScript expects to find the files used to build the native application in the next and final step of the process.
These files include the platform-specific script `app.<platform>.js` and stylesheet `app.<platform>.css`, as well as the content of the `src/assets` directory (aliased as `~`).

Finally, the `launch.js` script is invoked once webpack has finished bundling the sources. This script executes `tns --path dist` (i.e. NativeScript CLI) with the appropriate arguments for building, debugging or running the application on the specified platform(s).

## Using NativeScript plugins

Installing plugins differs slightly from the official NativeScript [documentation](https://docs.nativescript.org/plugins/plugins#installing-plugins).

Instead of `tns plugin add`, simply use `npm install` from the root of the project directory and clean the `dist` folder like so:

```
npm install <plugin-name>
npm run clean
```

Please note that some plugins' instructions omit `tns-core-modules/` when importing required NtiveScript components. This will not work with this template, which requires the following:
```
import { Image } from "tns-core-modules/ui/image";
```
