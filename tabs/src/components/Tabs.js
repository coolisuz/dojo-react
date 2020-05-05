import React, { Component } from 'react'


export default class Tabs extends Component{
    constructor(props){
        super(props);
        this.state = {
            content: this.props.tabs[1] 
        }
    }
    handleClick = (e, value) => {
        this.setState({ content: this.props.tabs[value].content})            
        }
    render(){
        
        const { tabs } = this.props
        return(
           <ul>
               {Object.keys(tabs).map((item, i) => {
                   return <li key = {i} onClick={(e)=>this.handleClick(e,item)}>{this.props.tabs[item].header}</li>
               })}
               <h1>{this.state.content}</h1>
           </ul>
       )
    }
}