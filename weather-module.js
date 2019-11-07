
let conditionType = Object.freeze({
  'bad': 'Bad',
  'normal': 'Normal',
  'nice': 'Nice'
});
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function getMondayOfCurrentWeek()
{
    var d = new Date();
    var day = d.getDay();
    return new Date(d.getFullYear(), d.getMonth(), d.getDate() + (day == 0?-6:1)-day );
}
function getSundayOfCurrentWeek()
{
    var d = new Date();
    var day = d.getDay();
    return new Date(d.getFullYear(), d.getMonth(), d.getDate() + (day == 0?0:7)-day );
}
let defaultWeather = function(){
  return {
    'date': (new Date()).toDateString(),
    'time': (new Date()).toTimeString(),
    'temperature': getRndInteger(22, 30),
    'unit': 'C',
    'sunset': (new Date(2019, 10, 6, 17, 36, 26)).toTimeString(),
    'sunrise': (new Date(2019, 10, 6, 6, 8, 38)).toTimeString(),
    'condition': conditionType.normal,
    'humidity': getRndInteger(60, 99)
  }
}

exports.getWeatherToday = function(){
  let weather = defaultWeather();
  return weather;
}

exports.getWeatherWeek = function(){
  let firstDay = getMondayOfCurrentWeek();
  let date = firstDay.getDate();
  firstDay.setDate(date - 1);
  let result = [];
  for (let i = 0; i < 7; i++) {
    date = firstDay.getDate();
    firstDay.setDate(date + 1);
    let weather = defaultWeather();
    weather.date = firstDay.toDateString();
    result.push(weather);
  }
  return result;
}