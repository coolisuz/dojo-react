import React, { useState, useEffect } from 'react';

import './App.css';

function App() {
  const [state, setState]=useState(0)

  useEffect(() => {
    console.log('Hello')
    fetch('https://swapi.co/api/people')
        .then(response => response.json())
        .then(response => setState({ people: response.results}))
  },[])
  return (
    <div className="App">
      <header className="App-header">
        {state.people ? state.people.map((item, index) => {
          return(<div key={index}>{item.name}</div>)
        }):null}  
      </header>
    </div>
  );
}

export default App;
