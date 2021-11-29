import React from "react";

const Show = (props) => {
  return (
    <>
      <h2>{props.title}--{props.status?"done":"notdone"}</h2>
    </>
  );
};

export default Show;
