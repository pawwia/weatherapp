import React,{useState} from 'react';
import Weather from './Weather';

const GiveCityForm = () => {
const [city, setCity]=useState('');
const [clickedSubbmit, setClickedSubbmit]=useState(false);
const formSubmit=(e)=>{
e.preventDefault();
setClickedSubbmit(true);


}
    return (  
<>
<form onSubmit={formSubmit}>
<input type='text' value={city} onChange={e=>{setCity(e.target.value);setClickedSubbmit(false)}}/>
<input type="submit" value='szukaj miasta'/>

</form>
{clickedSubbmit?<Weather city={city}/>:null}
</>
);
}
 
export default GiveCityForm;