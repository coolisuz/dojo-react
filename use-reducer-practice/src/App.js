import React, { useReducer } from 'react';

const initalState = {
  name: '',
  email: ''
}

function reducer(state, action){
  return {
    ...state,
    [action.type]: action.payload
  }
}


const App = () => {
  const [state, dispatch] = useReducer(reducer, initalState)

  function handleChange(e){
    const { name, value } = e.target
    dispatch({
      type: name, 
      payload: value
    })
  }

  return (
    <div className="App">
      {JSON.stringify(state)}
      <div>
        <label>
          <span>Name: </span>{' '}
          <input type="text" name="name" value={state.name} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          <span>Email: </span>{' '}
          <input type="email" name="email" value = {state.email} onChange={handleChange} />
        </label>
      </div>
    </div>
  );
}

export default App;
