import React, { Component } from 'react'
import { DragSource } from 'react-dnd';
const Types = {
  ITEM: 'glass'
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

const itemSource = {
  beginDrag(props) {

    const item = { src: props.src, id: props.id }
    return item
  },
  endDrag(props, monitor, component) {
    return {}
  }
}

class Glass extends Component {
  render() {
    const { isDragging, connectDragSource } = this.props;
    return connectDragSource(
      <div className='toys'>
        {!isDragging && <img src='http://www.totalmerchandise.co.uk/uploads/product-images/conical_pint_glass1.jpg' alt='toy' />}
      </div>
    )
  }
}
export default DragSource(Types.ITEM, itemSource, collect)(Glass)
