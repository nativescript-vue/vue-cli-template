const path = require('path');

// Generate platform-specific webpack configuration
const config = platform => {
  return {
    entry: path.resolve(__dirname, './src/main.js'),
    output: {
      path: path.resolve(__dirname, './dist/app'),
      filename: `app.bundle.${platform}.js`,
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
  };
};

// Determine platform(s) from webpack CLI environment options
module.exports = env => {
  const platforms = ['ios', 'android'];
  const platform = env && (env.android && 'android' || env.ios && 'ios');

  return platforms.includes(platform) ? config(platform) : [config('android'), config('ios')];
};
