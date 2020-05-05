import React, { useContext } from 'react'
import MyContext from '../context/MyContext'
const Form = () => {
    const {name, setName} = useContext(MyContext)
    const handleSubmit = e => {
        e.preventDefault()
        setName(e.target.value)
    }
    return (
      <form onSubmit={handleSubmit}>
        <label>Your Name: </label>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </form>
    );
}

export default Form