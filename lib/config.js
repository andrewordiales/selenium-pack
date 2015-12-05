
var fs = require('fs');

var CONFIG_FILENAME = 'selenium.conf.json';

var CWD = fs.realpathSync('.');
var CWD_CONFIG_FOLDER_PATH = CWD+'/config';


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
  
  var config0 = CWD+'/'+CONFIG_FILENAME;
  var config1 = CWD_CONFIG_FOLDER_PATH+'/'+CONFIG_FILENAME;

  return readConfigFrom(config0) || 
    readConfigFrom(config1) ||
    {};
}


module.exports = {

  getSeleniumCommandOptions: function() {

    var cmdOpts = [];

    var config = getConfig();
    
    Object.keys(config).forEach(function(configKey) {
      cmdOpts = cmdOpts.concat(['-'+configKey, config[configKey]]);
    });
    
    /*
    if('port' in config) {
      cmdOpts = cmdOpts.concat(['-port', config.port]);
    }

    if('log' in config) {
      cmdOpts = cmdOpts.concat(['-log', config.log]);
    }
    */
    
    return cmdOpts;
  }

}
