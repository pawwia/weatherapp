import React from 'react';
const ShowLocation = (weather) => {
    return ( 

<div>

{console.log(weather)}
<h1>Lokalizacja</h1>
<div className="weatherElement">
    <span>
Miasto:
    </span>
    <span>
{weather.weather.location.name}
    </span>
</div>

<div className="weatherElement">
    <span>
Kraj:
    </span>
    <span>
{weather.weather.location.country}
    </span>
</div>
<div className="weatherElement">
    <span>
Czas lokalny:
    </span>
    <span>
{weather.weather.location.localtime}
    </span>
</div>

<h1>Pogoda teraz <img src={weather.weather.current.condition.icon} alt={weather.weather.current.condition.text}/></h1>
<div className="weatherElement">
    <span>
Pogoda: 
    </span>
    <span>
        
{weather.weather.current.condition.text}
    </span>
</div>
<div className="weatherElement">
    <span>
Temperatura: 
    </span>
    <span>
{weather.weather.current.temp_c} C 
    </span>
</div>
<div className="weatherElement">
    <span>
Odczuwalna temperatura: 
    </span>
    <span>
{weather.weather.current.feelslike_c} C 
    </span>
</div>

</div>  
      
     );
}
 
export default ShowLocation;