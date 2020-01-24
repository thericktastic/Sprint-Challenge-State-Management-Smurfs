// actions/index.js

import axios from "axios";

export const fetchSmurfs = () => {
  return dispatch => {
    dispatch({ type: "FETCHING_SMURFS_START" });
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
          console.log("This is res.data: ", res.data)
          dispatch({ type: "FETCHING_SMURFS_SUCCESS", payload: res.data})
      })
      .catch(err => console.log("You failed! Here's why: ", err));
  };
};


export const addSmurfs = (id, smurf) => {
    return dispatch => {
        dispatch({ type: "ADDING_SMURFS_START" });
        axios.put(`http://localhost:3333/smurfs/${id}`, smurf)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
}