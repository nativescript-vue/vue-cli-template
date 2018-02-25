const path = require('path');
const webpack = require('webpack');
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
          loader: 'babel-loader',
        },
        {
          test: /\.vue$/,
          loader: 'nativescript-vue-loader',
        },
      ],
    },
    resolve: {
      modules: [
        'node_modules/tns-core-modules',
        'node_modules',
      ],
      extensions: [
        `.${platform}.js`,
        '.js',
        `.${platform}.vue`,
        '.vue',
      ],
    },
    externals (context, request, callback) {
      if (context.indexOf('tns-core-modules') !== -1 || /^(ui|application)/i.test(request)) {
        return callback(null, 'commonjs ' + request);
      }
      callback();
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        compress: {warnings: false},
        output: {comments: false},
      }),
    ],
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
