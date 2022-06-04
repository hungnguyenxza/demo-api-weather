let path = require('path');
let weather = require('./weather-module');
module.exports = function(app){
  app.route('/')
    .get(function(req, res){
      res.sendFile(path.join(__dirname, 'index.html'));
    });

  app.route('/get-weather-today')
  .get(function (req, res){
    res.send(weather.getWeatherToday());
  });
  app.route('/get-weather-week')
  .get(function (req, res){
    res.send(weather.getWeatherWeek());
  });
  app.route('/checking-autobot-update')
  .get(function (req, res){
    res.send(weather.checkingUpdate());
  });
}
