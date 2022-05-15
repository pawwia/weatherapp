import React,{useState, useEffect} from 'react';
import ShowLocation from './ShowLocation';
const Weather = (props) => {

    const queryWeather='http://api.weatherapi.com/v1/current.json?key=aea8a6e4b16c4785b06114150221205&q='+props.city+'&aqi=no';
const [dataWeather,setDataWeather]=useState();
const [error,setError]=useState();
    useEffect(()=>{
        fetch(queryWeather)
        .then(response=>response.json())
        .then(data=>setDataWeather(data),
        (error)=>{
setError("błąd pobierania api");
console.log(error);
        }
        )
    },[])

  if(dataWeather)  return (
        
<ShowLocation weather={dataWeather}/>
      );
}
 
export default Weather;