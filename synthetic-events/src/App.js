import React from 'react';
import Button from './components/Button'

function App() {
  const clickHandler = () => alert('You Clicked me')
  const buttonOneText = 'I am the first button being clicked'
  const buttonTwoText = "I am the second button being clicked";

  return (
    <div className="App">
      <Button text={buttonOneText} click={clickHandler} />
      <Button text={buttonTwoText} click={clickHandler} />
    </div>
  );
}

export default App;
