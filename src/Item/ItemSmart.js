import React, {Component} from "react";
import "./Item.css"
import ItemDummy from "./ItemDummy";

class ItemSmart extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isEdit: false,
    }
  }

  handleEdit = () => {
    this.setState({isEdit: true})
  }

  stopEdit = () => {
    this.setState({isEdit: false})
  }

  render() {
    const {isEdit} = this.state
    return (
      <ItemDummy
        data={ {...this.props.data, isEdit} }
        delete={this.props.delete}
        edit={this.props.edit}
        editButton={this.handleEdit}
        stopEdit={this.stopEdit}
      />)
  }
}

export default ItemSmart