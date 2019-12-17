import React, {useState} from 'react';
import usFlag from './img/BorderDelays_USFlag.png';
import cadFlag from './img/BorderDelays_CAFlag.png';
import arrow from './img/BorderDelays_arrow.png';

export function CountrySwitcher(){
    return (<div>
            <h4 className="hint-text">Select your destination country</h4>
            <img src={cadFlag}  className="country-icon flag" alt="canada flag" />
            <img src={arrow}  className="country-icon arrow" alt="arrow" />
            <img src={usFlag} className="country-icon flag" alt="us flag" />
        </div>);
}
