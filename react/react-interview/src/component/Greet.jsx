import React from "react";

const Greet = ({clicktext}) => {

    const gotClicked = () => alert("I got clicked")



  return <div>

    <button onClick={gotClicked}>{clicktext}</button>
  </div>;
};

export default Greet;
