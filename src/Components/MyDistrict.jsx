import React, { useContext } from 'react';
import {CountryInfoContext} from '../pages/UseContextPage';

const MyDistrict = () => {
    const countryData = useContext(CountryInfoContext);
    return (
        <div id='my-district' className='alert alert-danger'>
            <h5> Component 3 </h5>
            Country Data: {countryData}
        </div>
    )
}

export default MyDistrict;