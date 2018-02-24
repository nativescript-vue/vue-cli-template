const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const NativeScriptVueTarget = require('nativescript-vue-target');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const WebpackSynchronizableShellPlugin = require('webpack-synchronizable-shell-plugin');

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

// Prepare NativeScript application config using webpack plugins (should be exported only once)
const tnsConfig = {
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new WebpackSynchronizableShellPlugin({
      onBuildStart: {
        scripts: [
          'tns create dist --template nativescript-vue-base-template',
        ],
        blocking: true,
        parallel: false,
      },
    }),
    new FileManagerPlugin({
      onEnd: {
        copy: [
          {
            source: path.resolve(__dirname, './src/resources'),
            destination: path.resolve(__dirname, './dist/app/App_Resources'),
          },
        ],
      },
    }),
  ],
};

// Determine platform(s) from webpack CLI environment options
module.exports = env => {
  const platforms = ['ios', 'android'];
  const platform = env && (env.android && 'android' || env.ios && 'ios');

  return platforms.includes(platform)
    ? merge(tnsConfig, config(platform))
    : [merge(tnsConfig, config('android')), config('ios')];
};
