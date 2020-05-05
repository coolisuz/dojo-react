import React, { useState } from 'react';


function App(props) {
  const [ formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  const onChangeHandler = event => {
    setFormState({
      ...formState,
      [event.target.name]:event.target.value
    })
  }

  const onSubmitHandle = event => {
    event.preventDefault()
    console.log(formState)
  }

  return (
    <div className="App">
      <form onSubmit={onSubmitHandle}>
        <label>First Name</label>
        <input type="text" name="firstName" onChange={onChangeHandler}/>
        <br/>
        <label>Last Name</label>
        <input type="text" name="lastName" onChange={onChangeHandler} />
        <br />
        <label>Email</label>
        <input type="email" name="email" onChange={onChangeHandler} />
        <br />
        <label>Password</label>
        <input type="password" name="password" onChange={onChangeHandler} />
        <br/>
        <label>Confirm Password</label>
        <input type="password" name="confirmPassword" onChange={onChangeHandler}/>
        <br/>
        <input type="submit"/>
      </form>
    </div>
  );
}

export default App;
