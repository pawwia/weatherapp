import React from 'react';
import GiveCityForm from './GiveCityForm';
import './Page.css';

const Page = () => {
    return ( 
        <div className="page">
        <header>Aktualna pogoda<br/> Prognoza pogody</header>
<section>
<div className="weatherApp">
        <GiveCityForm/>
        </div>
        </section>
<footer>Footer</footer>
        </div>
     );
}
 
export default Page;