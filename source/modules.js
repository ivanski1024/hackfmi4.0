exports.loadModules = function() {
  var settings = require('../config/config.json');
  for(var key in settings.modules) {
    if( obj.hasOwnProperty(key) ) {
      return require(settings.modules[key]);
    } 
  }
}