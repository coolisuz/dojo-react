import React from 'react'

export default class PersonCard extends React.Component{
    render(){
        const {name, age, hairColor} = this.props
        return(
            <div>
                <h4>{name}</h4>
                <p>Age: {age}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={this.props.handleClick}>Birthday Button for {name}</button>
                <hr />
            </div>
        )
    }
}