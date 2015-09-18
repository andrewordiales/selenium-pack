
var os = require('os');

exports.onWindows = function() {
  return os.platform() === 'win32';
}
