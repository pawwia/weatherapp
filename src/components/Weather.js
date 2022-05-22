import React,{useState, useEffect} from 'react';
import ShowLocation from './ShowLocation';
import ErrorHandle from './ErrorHandle';
const Weather = (props) => {
    
    const queryWeather='https://api.weatherapi.com/v1/forecast.json?key=aea8a6e4b16c4785b06114150221205&q='+props.city+'&days=5&aqi=yes&alerts=no&lang=pl';
const [dataWeather,setDataWeather]=useState();
const [error,setError]=useState(false);
    useEffect(()=>{
        fetch(queryWeather)
        .then(response=>response.ok?response.json():setError(true))
        .then(data=>setDataWeather(data))
.catch(err=>console.log(err))
     

    },[])


if (error) return(<ErrorHandle/>)
 else if(dataWeather)  return (
<ShowLocation weather={dataWeather}/>

      );
}
 
export default Weather;