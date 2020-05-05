import React, { Component } from 'react'

const Greetings = ({ firstname, lastname }) => {
    return (
        <div>
            <h1>My name is {firstname} {lastname}</h1>
        </div>
    )
}


class HelloWorld extends Component {
    render() {
        return (
            <Greetings firstname = {"Saidjamol"} lastname="Ikramov" />
            
        )
    }
}

export default HelloWorld