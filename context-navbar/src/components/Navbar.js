import React, { useContext } from 'react'
import MyContext from '../context/MyContext'

const Navbar = () => {
    const { name } = useContext(MyContext)
    return (
        <div>
            <h4>Hi {name}</h4>
        </div>
    )
}

export default Navbar