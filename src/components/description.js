import React from "react";
// import generate from "../utils/RandomName";

const Description = (props) => {
  console.log(props.text)
  return (
    <>
      {props.text.map((item,index) => <p key={index} style={{fontSize: "18px", maxWidth: "900px"}} className="mb-1 text-center align-items-center mx-auto">{item.p}</p>)}
    </>
  );
};

export default Description;
