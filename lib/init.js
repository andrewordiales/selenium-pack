
var fs = require('fs');
var spawn = require('child_process').spawn;

var lib = {
  pid: require('./pid.js'),
  selenium: require('./selenium.js'),
  utils: require('./utils.js')
}

function startSelenium() {

  console.log('Starting selenium server');

  if(lib.pid.getRunning() != null) {
    console.log('Existing PID file found.');
    console.log('Kill existing process',
      'and remove pid file',
      '('+lib.pid.getPidFilePath()+')'
    );
    return 1;
  }

  var spawnArgs = ['-jar', lib.selenium.getJarPath()];
  var spawnOpts = { detached: true, stdio: 'ignore' };

  var selenium = spawn('java', spawnArgs, spawnOpts);
  selenium.unref();

  console.log('Selenium server started.');

  try {
    lib.pid.save(selenium.pid);
  } catch(e) {
    console.log('Unable to write PID file');
    console.log('Selenium Server PID:', selenium.pid);
  }

}

function stopSelenium() {

  try {

    var pid = lib.pid.getRunning();

    var killCommand = 'kill';
    var commandArgs = [pid];

    if(lib.utils.onWindows()) {
      killCommand = 'taskkill';
      commandArgs.unshift('/f', '/pid');

    }

    spawn(killCommand, commandArgs);

    lib.pid.delete();
  } catch(e) {
    console.log('Error occurred.');
  }

}

function clearPidFile() {
  lib.pid.delete();
}

module.exports = {

  start: startSelenium,
  stop: stopSelenium,
  clear: clearPidFile
}
