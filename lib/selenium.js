
var fs = require('fs');
var path = require('path');

var SELENIUM_VERSION = '3.0.1';
var PROJECT_FOLDER = path.join(__dirname, '..');

module.exports = {

  getVersion: function() {

    return SELENIUM_VERSION;
  },
  getFileName: function() {

    return this.getVersion()+'-server-0c.jar';
  },
  getJarPath: function() {

    var seleniumJarPath = path.join(PROJECT_FOLDER, 'jar', this.getFileName());
    return fs.realpathSync(seleniumJarPath);
  }

}
