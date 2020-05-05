import React, { useReducer } from 'react'

const initialState = {
  firstName: {
    value: '',
    error:''
  },
  lastName: {
    value: '',
    error: ''
  },
  email: {
    value: '',
    error: ''
  }
}

function reducer(state, action){
  return {
    ...state,
    [action.type]: action.payload
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  function handleChange(e){
    const {name, value} = e.target
    dispatch({
      type: name, 
      payload: value
    })
  }

  return (
    <div>
      <label>First Name</label>
      <input type="text" name="firstName" value={state.firstName.value} onChange={handleChange} />
      <br/>
      <label>Last Name</label>
      <input type="text" name="lastName" value={state.lastName.value} onChange={handleChange} />
      <br/>
      <label>Email</label>
      <input type="email" name="email" value={state.email.value} onChange={handleChange} />
      <br/>
    </div>
  )
}

export default App