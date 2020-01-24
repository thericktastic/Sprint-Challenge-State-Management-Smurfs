import React from "react";

const Smurf = props => {
  console.log("This is props in components/Smurf: ", props);

  return (
    <div>
      <p>Smurf's name: {props.smurf.name}</p>
    </div>
  );
};

export default Smurf;
