import React, {Component} from 'react'

export default class Button extends Component {
    render(){
        return(
            <div>
                <button onClick={this.props.handleClick}>Clicked {this.props.count} times</button>
            </div>
        )
    }
}