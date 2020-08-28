import React, {Component} from "react";
import uuid from 'react-uuid'
import List from "../List/List";
import './MainContent.css'

class MainContent extends Component {
  state = {
    inputValue: "",
    values: [],
  }

  handlePress = ({key}) => {
    if (key === 'Enter') {
      this.setState(prevState => ({
          ...prevState,
          values: [
                    ...prevState.values,
                    {
                      uuid: uuid(),
                      value: prevState.inputValue,
                    }
                  ],
          inputValue: "",
        })
      )
    }
  }

  handleChange = event => {
    const {name, value} = event.target
    this.setState({[name]: value})
  }

  handleKeyDown = ({key}) => {
    if (key === 'Escape') {
      this.setState({inputValue: ""})
    }
  }

  handleDelete = (uuid) => {
    console.log("Delete", uuid)
    this.setState(prevState =>
            ({
              ...prevState,
              values: prevState.values.filter( v => v.uuid !== uuid)
            })
      )
  }

  handleEdit = (uuid, newValue) => {
    this.setState(prevState =>
      ({
        ...prevState,
        values: prevState.values.map( v =>
          v.uuid == uuid
            ? v = {uuid: v.uuid, value: newValue}
            : v
        )
      })
    )
  }

  render() {
    const {inputValue, values} = this.state
    return (
      <div className='todo-list'>
        <input
          type="text"
          name="inputValue"
          value={inputValue}
          onKeyPress={this.handlePress}
          onKeyDown={this.handleKeyDown}
          onChange={this.handleChange}
        />
        <List
          values={values}
          delete={this.handleDelete}
          edit={this.handleEdit}
        />
      </div>
    )
  }
}

export default MainContent