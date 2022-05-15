import React from 'react';
const ShowLocation = (weather) => {
    return ( 

<div>
<span>Miasto: {weather.weather.location.name}</span><br/>
<span>Kraj: {weather.weather.location.country}</span><br/>

<span>Aktualna pogoda: <img src={weather.weather.current.condition.icon}/>{weather.weather.current.temp_c} stopni Celciusza</span>


</div>        
     );
}
 
export default ShowLocation;