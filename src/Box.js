import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import Glass from './Glass';

const Types = {
  ITEM: 'glass'
};


function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget()
  }
}

const target = {
  canDrop(props) {
    return true;
  },

  drop(props) {
    props.handleDrop();
  },
};

class Box extends Component {
  render() {
    const { connectDropTarget } = this.props;
    let children;
    if(this.props.drop) {
      children = <Glass />
    } else children = null
    return connectDropTarget(
      <div style={{position:'absolute',top:'600px',color:'red', border:'1px solid black', width:'600px',height:'600px'}}>{children}</div>
    )
  }
}

export default DropTarget(Types.ITEM, target, collect)(Box);
