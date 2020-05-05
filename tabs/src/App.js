import React from 'react';
import Tabs from './components/Tabs'
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      tab1: {
        header: "Tab 1",
        content: "Tab 1 content is showing here"
      },
      tab2: {
        header: "Tab 2",
        content: "Tab 2 content is showing here"
      },
      tab3: {
        header: "Tab 3",
        content: "Tab 3 content is showing here"
      }
    };
  }

  
  render(){
    return(
      <div className = "App-header">
        <Tabs tabs = {this.state}/> 
      </div>
    )
  }


}

export default App;
