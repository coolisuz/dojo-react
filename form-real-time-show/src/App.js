import React, { useState } from 'react'

const App = props => {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName:"",
    email:"",
    password:"",
    confirmPassword:""
  })

  const onChangeHandler = e => {
    setFormState({
      ...formState, 
      [e.target.name]:e.target.value
    })
  }

  const onSubmitHandler = e => {
    e.preventDefault()
    
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        onChange={onChangeHandler}
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        onChange={onChangeHandler}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={onChangeHandler}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={onChangeHandler}
      />
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        onChange={onChangeHandler}
      />
      <input type="submit" />
      <h1>Real Time Output</h1>
      <hr />
      <p>First Name: {formState.firstName}</p>
      <p>Last Name: {formState.lastName}</p>
      <p>Email: {formState.email}</p>
    </form>
  );
}

export default App