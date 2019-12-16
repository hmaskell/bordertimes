import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function GetWaitTime(crossingId) {
  return Math.random();
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
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{title}</h1>
        <button onClick={
          function() {
            setTitle("World");
          }
        }>Click</button>
{titles.map(function(title) { return <BorderCrossingCard title={title} img={"image"} waittime={GetWaitTime(1)} />})}
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
        </a>
      </header>
    </div>
  );
}

export default App;
