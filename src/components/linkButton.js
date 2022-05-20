import React, { useState } from "react";

const LinkButton = (props) => {
  const [count, setCount] = useState(0);
  const clickMe = () => {
    setCount(count + 1);
  };

  return (
    <>
      <button className="btn btn-lg btn-primary" onClick={clickMe}>
        {props.text}
      </button>
      {count !== 0 ? <p>You clicked {count} times</p> : ""}
    </>
  );
};

export default LinkButton;
