import React from 'react'
import PersonCard from './PersonCard'

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      doeAge: 55,
      smithAge:88,
      fillmoreAge:42,
      
    }
  }

  handleClickDoe = () => {
    this.setState({doeAge: this.state.doeAge+1})
  }

  handleClickSmith = () => {
    this.setState({smithAge: this.state.smithAge+1})
  }

  handleClickFillmore = () => {
    this.setState({fillmoreAge: this.state.fillmoreAge+1})
  }


  render(){
    return (
      <div>
        <PersonCard name={"Doe, Jane"} age={this.state.doeAge} hairColor="Black" handleClick={this.handleClickDoe}/>
        <PersonCard name={"Fillmore, Millar"} age={this.state.fillmoreAge} hairColor="Brown" handleClick={this.handleClickFillmore}/>
        <PersonCard name={"Smith, Maria"} age={this.state.smithAge} hairColor="Yellow" handleClick={this.handleClickSmith}/>
      </div>
    );
  }
}