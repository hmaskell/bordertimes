import React, {useState} from 'react';

import './App.css';

import {BorderCrossingCard} from "./BorderCard";
import {CountrySwitcher} from "./CountrySwitcher";
import {borderData, IBorderData} from "./BorderData";

//fa fa-external-link"

function renderBorderData(borderData: IBorderData){
  return (
    <div className={`${borderData.className} border`}>
      <BorderCrossingCard name={borderData.name} icon={borderData.icon} delay={borderData.delay}/>
    </div>
  );
}

function App() {
  return (
    <div className="grid-container">
      <header className="header">
        <h1>Border Delays</h1>
        <CountrySwitcher></CountrySwitcher>
      </header>

      {borderData.map(renderBorderData)}
      
      <footer className="footer">
        <a href="https://travel.gc.ca/returning/border-times" target="_blank">
          CA Border 
          <i className="fa fa-external-link"></i>
        </a>
         
        <a href="https://travel.gc.ca/travelling/border-times-us" target="_blank">
          US Border 
          <i className="fa fa-external-link"></i></a>
          <p>Made by Heather and Owen, 2019</p>
      </footer>

    </div>
  );
}

export default App;
