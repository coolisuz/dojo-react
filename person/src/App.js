import React from 'react';
import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard'

const people = {
  doe: {
    firstName: 'Doe',
    lastName: 'Jane',
    age: 45,
    hairColor: 'black'
  }
}


const App = () => {
  return (
    <div>
      <PersonCard people = {people}/>
    </div>
  );
}

export default App;
