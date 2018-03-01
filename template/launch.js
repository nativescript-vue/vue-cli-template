const {exec} = require('child_process');
const winston = require('winston-color');

const action = process.argv[2];
let platform = process.argv[3];

// Validate action
if (['build', 'debug', 'run'].indexOf(action) === -1) {
  winston.error('Invalid action');
  process.exit(1);
}

// Validation platform
if ([undefined, 'android', 'ios'].indexOf(platform) === -1) {
  winston.error('Invalid platform');
  process.exit(1);
}

switch (action) {
  case 'build':
    winston.info('Building NativeScript application...');
    break;

  case 'debug':
    winston.info('Debugging NativeScript application...');
    break;

  case 'run':
    winston.info('Running NativeScript application...');
    break;
}

if (action !== 'run' && !platform) {
  exec(`tns ${action} android`, {cwd: 'dist', stdio: 'inherit'});
  exec(`tns ${action} ios`, {cwd: 'dist', stdio: 'inherit'});
}
else {
  exec(`tns ${action} ${platform || ''}`, {cwd: 'dist', stdio: 'inherit'});
}
