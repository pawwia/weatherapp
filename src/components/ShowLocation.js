import React from 'react';
import './ShowLocation.css';
const ShowLocation = (weather) => {
   
    const d=new Date();
    const weekDay=['Niedziela','Poniedziałek','Wtorek','Środa','Czwartek','Piątek','Sobota'];
    const todayDay=d.getDay();
    const days=[weekDay[todayDay],weekDay[todayDay+1],weekDay[todayDay+2]];

    {console.log(todayDay)}
    return ( 
<div className='weatherResult'>

{console.log(weather)}
{console.log(days)}
<div className="weatherToday">
<div className="imageToday"><img src={weather.weather.current.condition.icon} alt={weather.weather.current.condition.text} /></div>
<div className="textToday">
<h2>Dziś</h2>
<h1 ><>{weather.weather.location.name}, {weather.weather.location.country}</></h1>
<a>Temperatura: {weather.weather.current.temp_c} °C</a><br/>
<a>{weather.weather.current.condition.text}</a>

</div>

</div>
<div className="weatherForecastCont">
<div className="weatherForecast">
<div className="weatherForecastTitle">{days[0]}</div>
<div className='weatherForecastImage'><img src={weather.weather.forecast.forecastday[0].day.condition.icon} alt={weather.weather.forecast.forecastday[0].day.condition.text} /> </div>
<div className='weatherForecastTemperature'>{weather.weather.forecast.forecastday[0].day.avgtemp_c} °C</div>
</div>
<div className="weatherForecast">
<div className="weatherForecastTitle">{days[1]}</div>
<div className='weatherForecastImage'> <img src={weather.weather.forecast.forecastday[1].day.condition.icon} alt={weather.weather.forecast.forecastday[1].day.condition.text} /> </div>
<div className='weatherForecastTemperature'>{weather.weather.forecast.forecastday[1].day.avgtemp_c} °C</div>
</div><div className="weatherForecast">
<div className="weatherForecastTitle">{days[2]}</div>
<div className='weatherForecastImage'><img src={weather.weather.forecast.forecastday[2].day.condition.icon} alt={weather.weather.forecast.forecastday[2].day.condition.text} /> </div>
<div className='weatherForecastTemperature'>{weather.weather.forecast.forecastday[2].day.avgtemp_c} °C</div>
</div>
</div>
</div>
      
     );
}
 
export default ShowLocation;