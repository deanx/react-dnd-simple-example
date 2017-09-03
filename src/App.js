import React, { Component } from 'react'
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import Glass from './Glass';
import Box from './Box';
class App extends Component {
   handleDrop() {
    this.setState({
      drop:true
    })
  }
  constructor() {
    super();
    this.state = {
      drop:false
    }
  }
  render() {
    return (
     <div>
      {this.state.drop === false ? <Glass/> : null}
      <Box handleDrop={() => this.handleDrop()} drop={this.state.drop}/>
     </div>
   );
  }
}

export default DragDropContext(HTML5Backend)(App);
