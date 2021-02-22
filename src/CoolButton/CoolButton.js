import React from "react";
import "bulma/css/bulma.css";

const CoolButton = (props) => {
  return (
    <>
      <button class={props.className}>{props.action}</button>
    </>
  );
};

export default CoolButton;
