const path = require('path');
const NativeScriptVueTarget = require('nativescript-vue-target');

// Generate platform-specific webpack configuration
const config = platform => {
  return {
    target: NativeScriptVueTarget,
    entry: path.resolve(__dirname, './src/main.js'),
    output: {
      path: path.resolve(__dirname, './dist/app'),
      filename: `app.bundle.${platform}.js`,
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['babel-preset-env'],
              cacheDirectory: true,
            },
          },
        },
      ],
    },
    resolve: {
      modules: [
        'node_modules/tns-core-modules',
        'node_modules',
      ],
    },
    externals (context, request, callback) {
      if (context.indexOf('tns-core-modules') !== -1 || /^(ui|application)/i.test(request)) {
        return callback(null, 'commonjs ' + request);
      }
      callback();
    },
    node: {
      'http': false,
      'timers': false,
      'setImmediate': false,
      'fs': 'empty',
    },
  };
};

// Determine platform(s) from webpack CLI environment options
module.exports = env => {
  const platforms = ['ios', 'android'];
  const platform = env && (env.android && 'android' || env.ios && 'ios');

  return platforms.includes(platform) ? config(platform) : [config('android'), config('ios')];
};
