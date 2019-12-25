import React, {useState} from 'react';
import arrow from './img/BorderDelays_arrow.png';

//state of from & to

export interface ICountryData {
    name: string,
    img: string;
}

export interface ICountrySwitcherProps {
    countries: [ICountryData, ICountryData],
    onSwitch: (toCountry: ICountryData) => void
}

interface ICountrySwitcherState {
    from: ICountryData,
    to: ICountryData;
}

export function CountrySwitcher(props: ICountrySwitcherProps){
    const {countries, onSwitch} = props;
    const [firstCountry, secondCountry] = countries;
    const initialState: ICountrySwitcherState = {
        from: firstCountry,
        to: secondCountry
    };
    const [countryState, setCountryState] = useState(initialState);

    function updateToCountry(countryClicked: ICountryData){
        const currentTo = countryState.to;
        if (countryClicked != currentTo){
            setCountryState({
                from: countryState.to,
                to: countryState.from
            });
            onSwitch(countryState.from);
        }
        else {
            onSwitch(countryState.to);
        }
        
        
    }

    return (<div>
            <h4 className="hint-text">Select your destination country</h4>
            <img src={countryState.from.img} onClick={() => {updateToCountry(countryState.from)}} className="country-icon flag" alt="flag" /> 
            <img src={arrow}  className="country-icon arrow" alt="arrow" />
            <img src={countryState.to.img} onClick={() => {updateToCountry(countryState.to)}} className="country-icon flag" alt="flag" />
        </div>);
}

