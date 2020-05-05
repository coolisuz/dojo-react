import React, { useState } from "react";

const App = props => {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    submitted: false
  });

  const onChangeHandler = e => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
      
    });
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    setFormState({
      ...formState,
      submitted: true
    })
  };
  let match
  if(formState.password !== formState.confirmPassword){
    match = "Passwords do not match!"
  }
  
  return (
    <div>
      {!formState.submitted ? <h1>You have not submitted</h1> : <h1>Congratulations you have submitted the form</h1>}
      <form onSubmit={onSubmitHandler}>
        <label>First Name: </label>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          onChange={onChangeHandler}
        />
        {formState.firstName !=="" && formState.firstName.length < 3 ? "must" : ""}
        
        <br/>
        <label>Last Name: </label>
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          onChange={onChangeHandler}
        />
        {formState.lastName !=="" && formState.lastName.length < 3 ? "must" : ""}
        <br />
        <label>Email: </label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={onChangeHandler}
        />
        <br />
        <label>Password: </label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={onChangeHandler}
        />
        {formState.password.length < 8 && formState.password.length !== 0 ? "Password must be at least 8 characters" : ""}
        <br/>
        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={onChangeHandler}
        />
        {match}
        <br/>
        <input type="submit" />
        <h1>Real Time Output</h1>
        <hr />
        <p>First Name: {formState.firstName}</p>
        <p>Last Name: {formState.lastName}</p>
        <p>Email: {formState.email}</p>
      </form>
    </div>
  );
};

export default App;
