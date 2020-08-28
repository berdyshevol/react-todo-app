import React, {Component} from "react";
import './InputItem.css'

class InputItem extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      input: props.data.value,
    }
  }

  handleChange = event => {
    const {name, value} = event.target
    this.setState({[name] : value})
  }

  handleEnter = ({key}) => {
    if (key === 'Enter') {
      this.saveAndStopEdit()
    }
  }

  saveAndStopEdit = () => {
    this.props.edit(this.props.data.uuid, this.state.input)
    this.props.stopEdit()
  }

  render() {
    const {input} = this.state
    return (
      <input className="input"
             type="text"
             value={input}
             name="input"
             onChange={this.handleChange}
             onKeyPress={this.handleEnter}
             autoFocus={true}
             onBlur={this.saveAndStopEdit}
      />
    )
  }
}

export default InputItem