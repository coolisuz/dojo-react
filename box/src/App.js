import React, { useState } from 'react'
import './App.css'


function App () {
  const [color, setColor] = useState('')
  const [boxes, setBoxes] = useState([]);
  
const  handleClick = (e) => {
    const newBox = [];
    newBox.push(<div className="box" style={{ backgroundColor: color }}></div>);
    setBoxes([...boxes, ...newBox]);
    setColor('');
}
  const handleChange = (e) =>{
    setColor(e.target.value)
  }

  
    
    return(
      <div className="App-header">
        <label>Color</label>
        <input type="text" value={color} name="color" onChange={handleChange} />
        <input type="submit" onClick={handleClick} value="Create box"/>
        {boxes.map((item, index) =>{
        return <div key={index}>{item}</div>  
        })}
      </div>
    )
  
}

export default App;


// import React, { Component } from "react";
// import "./App.css";

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       color: "",
//       boxes: [],
//     };
//   }

//   handleClick = (e) => {
//     const box = this.state.boxes;
//     box.push(
//       <div className="box" style={{ backgroundColor: this.state.color }}></div>
//     );
//     this.setState({ boxes: box });
//     this.setState({ color: "" }); //clearing out input after click
//   };

//   handleChange = (e) => {
//     this.setState({ color: e.target.value });
//   };

//   render() {
//     return (
//       <div className="App-header">
//         <label>Color</label>
//         <input
//           type="text"
//           value={this.state.color}
//           name="color"
//           onChange={this.handleChange}
//         />
//         <input type="submit" onClick={this.handleClick} value="Create box" />
//         {this.state.boxes.map((item, index) => {
//           return <div key={index}>{item}</div>;
//         })}
//       </div>
//     );
//   }
// }