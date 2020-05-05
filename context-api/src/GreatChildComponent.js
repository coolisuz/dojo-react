import React, { useContext } from 'react'
import MyContext from "./context/MyContext";


const GreatChildComponent = () => {
    const context = useContext(MyContext)
    
    return (
        <div>{context}</div>
    )
}

export default GreatChildComponent