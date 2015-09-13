
var fs = require('fs');

var configFilename = 'selenium.conf.json';

var cwd = fs.realpathSync('./');
var cwdConfigFolderPath = cwd+'/config';


var readConfigFrom = function(path) {
  
  var seleniumConfig;

  try {
    seleniumConfig = JSON.parse(fs.readFileSync(
      path, 
      { encoding: String() }
    ));

  } catch(err) {

  }
  
  return seleniumConfig;
}

var getConfig = function() {
  
  var config0 = cwd+'/'+configFilename;
  var config1 = cwdConfigFolderPath+'/'+configFilename;

  return readConfigFrom(config0) || 
    readConfigFrom(config1) ||
    {};
}


module.exports = {

  getSeleniumCommandOptions: function() {

    var cmdOpts = [];

    var config = getConfig();
    
    if('port' in config) {
      cmdOpts = cmdOpts.concat(['-port', config.port]);
    }

    if('log' in config) {
      cmdOpts = cmdOpts.concat(['-log', config.log]);
    }

    return cmdOpts;
  }

}
