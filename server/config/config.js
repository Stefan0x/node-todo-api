// Only for Heroku
var env = process.env.NODE_ENV || 'development';

if (env === 'development' || env === 'test') {
  // Config Datei (geheim) wird nicht ins Git-Repo geladen!!
  var config = require('./config.json');
  // Wenn ein Object (config) über eine Variable (env) ausgelesen wird,
  // müssen die eckigen Klammern verwendet werden
  var envConfig = config[env];

  // Environment variables
  Object.keys(envConfig).forEach((key) => {
    process.env[key] = envConfig[key];
  });
}
