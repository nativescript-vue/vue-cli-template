# {{ app_name }}

> {{ description }}

## Usage

Install package dependencies:
``` bash
npm install
```

Execute one of the following depending on the situation:
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

For more details, see https://github.com/nativescript-vue/vue-cli-template
