import React from "react";
import './List.css'


const List = React.memo((props) => {
  return <div className="list">{props.children}</div>
})

export default List;
