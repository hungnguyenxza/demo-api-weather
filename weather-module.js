
let conditionType = Object.freeze({
  '1': 'Bad',
  '2': 'Normal',
  '3': 'Nice'
});
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function getMondayOfCurrentWeek()
{
    var d = new Date();
    var day = d.getDay();
    return new Date(d.getFullYear(), d.getMonth(), d.getDate() + (day == 0?-6:1)-day, d.getHours(), d.getMinutes(), d.getSeconds() );
}
let defaultWeather = function(){
  let d = new Date();
  return {
    'date': d.toString(),
    'temperature': getRndInteger(22, 30),
    'unit': 'C',
    'sunset': (new Date(d.getFullYear(), d.getMonth(), d.getDate(), 17, getRndInteger(20, 40), getRndInteger(0, 59))).toTimeString(),
    'sunrise': (new Date(d.getFullYear(), d.getMonth(), d.getDate(), 6, getRndInteger(20, 40), getRndInteger(0, 59))).toTimeString(),
    'condition': conditionType[getRndInteger(1, 3)],
    'humidity': getRndInteger(60, 99)
  }
}

exports.getWeatherToday = function(){
  let weather = defaultWeather();
  
  return weather;
}

exports.checkingUpdate = function(){
  return "version: 3.4.13"; 
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
    weather.date = firstDay.toString();
    result.push(weather);
  }
  return result;
}
