import React from "react";

function Card(props) {
  return (
    <div
      className="list-of-food d-flex flex-column w-50  m-auto align-items-center my-0 py-5 rounded"
    >
        {props.children}
    </div>
  );
}

export default Card;
