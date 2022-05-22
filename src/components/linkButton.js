import React from "react";
// import generate from "../utils/RandomName";

const LinkButton = (props) => {
  return (
    <>
      <button className="btn btn-lg btn-primary" onClick={props.action ? props.action : false}>
        {props.text}
      </button>
    </>
  );
};

export default LinkButton;
