
var fs = require('fs');
var utils = require('./utils.js');
var path = require('path');

var PID_FILE_PATH_POSIX   = "/tmp/selenium.pid";
var PID_FILE_PATH_WINDOWS = path.join(process.env['temp'] || '/windows/temp', 'selenium.pid');

var PID_FILE_PATH = !utils.onWindows() ? PID_FILE_PATH_POSIX : PID_FILE_PATH_WINDOWS;


module.exports = {

  getRunning: function() {

    var pid = null;

    try {
      pid = fs.readFileSync(PID_FILE_PATH, { encoding: String() }).toString();
    } catch(e) {
      pid = null;
    }

    return pid;
  },
  save: function(pid) {
    fs.writeFileSync(PID_FILE_PATH, pid);
  },
  delete: function() {
    fs.unlinkSync(PID_FILE_PATH);
  },
  getPidFilePath: function() {
    return PID_FILE_PATH;
  }

}
