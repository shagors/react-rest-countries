import React from 'react';
import './Country.css'

const Country = (props) => {
    //console.log(props);
    const {name, area, population, region, capital, flags} = props.country;
    return (
        <div className='country'>
            <h2>Country Name : {name.common}</h2>
            <img src={flags.png} alt="" />
            <p>Official Name : <small>{props.country.name.official}</small></p>
            <p>Capital : {capital}</p>
            <p><small>Region : {region}</small></p>
            <p>Population : {population}</p>
            <p><small>Area : {area}</small></p>
        </div>
    );
};

export default Country;