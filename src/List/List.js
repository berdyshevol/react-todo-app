import React from "react";
import ItemSmart from "../Item/ItemSmart";
import './List.css'

const List = props => (
  <div className="list">
    <ul>
      { props.values.map( ({ value, uuid }) =>
        <ItemSmart
          key={uuid}
          data={{value, uuid}}
          delete={props.delete}
          edit={props.edit}
        />
        )}
    </ul>
  </div>
)

export default List