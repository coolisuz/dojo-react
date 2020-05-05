import React, {useState } from 'react';
import AppWrapperComponent from './AppWrapperComponent'
import MyContext from './context/MyContext'
import GreatChildComponent from './GreatChildComponent'
import './App.css';

function App() {
  const [val, setVal] = useState(1)
  return (
    <div className="App">
      <header className="App-header">
        <MyContext.Provider value={val,setVal}>
          <AppWrapperComponent>
            <GreatChildComponent />
          </AppWrapperComponent>
        </MyContext.Provider>
      </header>
    </div>
  );
}

export default App;
