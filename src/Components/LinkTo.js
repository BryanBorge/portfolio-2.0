import React from "react";

const LinkTo = (props) => {
  return (
    <a href={props.to} target="_blank" rel="noreferrer">
      {props.children}
    </a>
  );
};

export default LinkTo;
