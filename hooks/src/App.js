import React, { useState } from 'react';


const App = props => {
  const [count, setCount] = useState(0)
  const handleClick = e => {
    e.preventDefault();
    setCount(count + 1)
  }
  return (
    <div>
      {count}
      <button onClick={handleClick}>Click Me</button>
    </div>
  )

}
// const App = props =>{
//   const [state, setState] = useState({
//     clickCount: 0
//   })

//   const handleClick = e =>{
//     // e.preventDefault()
//     setState({ clickCount: state.clickCount + 1})
//   }
//   return (
//     <div>
//       {state.clickCount}
//       <button onClick={handleClick}>Click Me</button>
//     </div>
//   )
// }
export default App;
