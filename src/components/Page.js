import React from 'react';
import GiveCityForm from './GiveCityForm';
import './Page.css';

const Page = () => {
    return ( 
        <div className="page">
<section>
<div className="weatherApp">
        <GiveCityForm/>
        </div>
        </section>
        </div>
     );
}
 
export default Page;