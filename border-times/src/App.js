import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function GetWaitTime(crossingId) {
  return Math.random();
  // define variables for each crossing time
  // read them from the website
  // assign each value to the corresponding variable
  // return variables
}

function BorderCrossingCard(props) {
  let {title, img, waittime} = props;

  return (
    <div>
      <div className="Name">
        {title}
      </div>
      <div className="WaitTime">
        {waittime}
        </div>
        <br />
    </div>
  )
}

function App() {
  const [title, setTitle] = useState("Hello");
  const titles = ["Lynden", "Peace Arch", "Truck Crossing", "Aldergrove"];
  return (
    <div className="App">
      <header className="App-header">
        {/*
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{title}</h1>
        */}
        <h1>Border Delays</h1>
        <img src="./img/BorderDelays_CAFlag.png" className="country-icon flag" alt="canada flag" />
        <img src="./img/BorderDelays_arrow.png" className="country-icon arrow" alt="arrow" />
        <img src="./img/BorderDelays_USFlag.png" className="country-icon flag" alt="us flag" />
        <h4>Select your destination country</h4>
        <button onClick={
          function() {
            setTitle("World");
          }
        }>Click</button>
{titles.map(function(title) { return <BorderCrossingCard title={title} img={"image"} waittime={GetWaitTime(1)} />})}
        {/*}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
      </a>*/
      }
      </header>
    </div>
  );
}

export default App;
