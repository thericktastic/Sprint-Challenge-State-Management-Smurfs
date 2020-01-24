import React from "react";

const SmurfForm = () => {
  return (
    <form>
      <div>
        <input type="text" name="name" placeholder="name" value="" />
      </div>
      <div>
        <input type="text" name="age" placeholder="age" value="" />
      </div>
      <div>
        <input type="text" name="height" placeholder="height" value="" />
      </div>
      <button type="submit">Add Smurf</button>
    </form>
  );
};

export default SmurfForm;
