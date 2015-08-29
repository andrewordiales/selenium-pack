
var fs = require('fs');

var SELENIUM_VERSION = '2.47.1';

module.exports = {

  getVersion: function() {

    return SELENIUM_VERSION;
  },
  getFileName: function() {

    return this.getVersion()+'-server-0c.jar';
  },
  getJarPath: function() {

    return fs.realpathSync(__dirname+'/../jar/'+this.getFileName());
  }

}