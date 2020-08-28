import React from "react";
import InputItem from "../InputItem/InputItem";

const ItemDummy = (props) => (
  <div className="todo-item">
    <li onDoubleClick={() => props.editButton()} >
      {!props.data.isEdit
        ?
        <div className="display-item">
          <h2>
            {props.data.value}
          </h2>
          <div>
            <button onClick={() => props.editButton()}>Edit</button>
            <button onClick={() => props.delete(props.data.uuid)}>Delete
            </button>
          </div>
        </div>
        :
        <InputItem
          data={props.data}
          edit={props.edit}
          stopEdit={props.stopEdit}
        />
      }
    </li>
  </div>
)

export default ItemDummy