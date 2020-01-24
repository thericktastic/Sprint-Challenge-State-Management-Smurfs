// actions/index.js

import axios from "axios";

export const fetchSmurfs = () => {
  return dispatch => {
    dispatch({ type: "FETCHING_SMURFS_START" });
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        // console.log("This is res.data: ", res.data)
        dispatch({ type: "FETCHING_SMURFS_SUCCESS", payload: res.data });
      })
      .catch(err => console.log("You failed! Here's why: ", err));
  };
};

export const addSmurf = smurf => {
  return dispatch => {
    dispatch({ type: "ADDING_SMURFS_START" });
    axios
      .post("http://localhost:3333/smurfs/", smurf)
      .then(res => {
        dispatch({ type: "PUTTING_SMURFS_SUCCESS", payload: res.data });
        console.log("This is res on actions/addSmurf.js: ", res);
      })
      .catch(err => console.log(err));
  };
};
