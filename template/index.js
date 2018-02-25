const config = require('./webpack.config');
const fs = require('fs-extra');
const path = require('path');
const {execSync, spawn} = require('child_process');
const webpack = require('webpack');
const winston = require('winston-color');

const env = process.env.NODE_ENV || 'development';
const platform = process.env.PLATFORM || 'android';

// Prepare NativeScript application from template (if necessary)
const distPath = path.resolve(__dirname, './dist');
const templatePath = path.resolve(__dirname, './template');
if (!fs.existsSync(distPath)) {
  winston.info('Preparing NativeScript application from template...');
  fs.ensureDirSync(distPath);
  fs.copySync(templatePath, distPath, {overwrite: true});
  execSync('NODE_ENV=development npm i', {cwd: 'dist'});
} else {
  winston.info('NativeScript application already prepared.');
}

// Run NativeScript application
const tnsRunApplication = (platform) => {
  let action;
  if (env === 'production') {
    winston.info('Building NativeScript application...');
    action = 'build';
  }
  else {
    winston.info('Running NativeScript application...');
    action = 'run';
  }
  const tnsProcess = spawn('tns', [action, platform], {cwd: 'dist', stdio: 'inherit'});
  tnsProcess.on('close', (code) => {
    winston.info(`NativeScript process exited with code ${code}.`);
  });
};

let firstBuild = true;
const onWebpackComplete = (err, stats) => {
  // Output webpack build stats
  winston.info('Webpack build complete.');
  console.log(stats.toString({
    children: false,
    hash: false,
    modules: false,
    timings: false,
    version: false,
  }));

  // NativeScript build / run
  if (firstBuild) {
    firstBuild = false;
    tnsRunApplication(platform);
  }
};

// Webpack build / watch
const compiler = new webpack(config(platform));
if (env !== 'production') {
  compiler.watch({
    aggregateTimeout: 300,
    poll: undefined,
  }, onWebpackComplete);
} else {
  compiler.run(onWebpackComplete);
}
