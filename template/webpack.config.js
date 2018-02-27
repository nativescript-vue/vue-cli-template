const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const NativeScriptVueTarget = require('nativescript-vue-target');

// Generate platform-specific webpack configuration
module.exports = platform => {

  // CSS / SCSS style extraction loaders
  const cssLoader = ExtractTextPlugin.extract({
    use: [
      {
        loader: 'css-loader',
        options: {url: false},
      },
    ],
  });
  const scssLoader = ExtractTextPlugin.extract({
    use: [
      {
        loader: 'css-loader',
        options: {url: false},
      },
      'sass-loader',
    ],
  });

  return {
    target: NativeScriptVueTarget,
    entry: path.resolve(__dirname, './src/main.js'),
    output: {
      path: path.resolve(__dirname, './dist/app'),
      filename: `app.${platform}.js`,
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          loader: 'babel-loader',
        },
        {
          test: /\.css$/,
          use: cssLoader,
        },
        {
          test: /\.scss$/,
          use: scssLoader,
        },
        {
          test: /\.vue$/,
          loader: 'ns-vue-loader',
          options: {
            loaders: {
              css: cssLoader,
              scss: scssLoader,
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
      extensions: [
        `.${platform}.js`,
        '.js',
        `.${platform}.vue`,
        '.vue',
      ],
    },
    externals (context, request, callback) {
      if (context.indexOf('tns-core-modules') !== -1
        || context.indexOf('nativescript-vue') !== -1
        || /^(tns-core-modules)/i.test(request)) {
        return callback(null, 'commonjs ' + request);
      }
      callback();
    },
    plugins: [
      new ExtractTextPlugin({filename: `app.${platform}.css`}),
      new OptimizeCssAssetsPlugin({
        cssProcessor: require('cssnano'),
        cssProcessorOptions: {discardComments: {removeAll: true}},
        canPrint: false,
      }),
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
