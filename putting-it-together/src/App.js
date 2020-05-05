import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      doe: {
        name:'Doe, Jane',
        age: 45,
        hairColor: 'Black'
      },
      smith: {
        name: 'Smith, John',
        age: 88,
        hairColor: 'Brown'
      }
    }
  }
  handleChange = () => {
    
  }
}





export default App;
