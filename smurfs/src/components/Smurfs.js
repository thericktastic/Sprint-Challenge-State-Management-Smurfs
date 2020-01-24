import React from "react";
import { connect } from "react-redux";

// actions
import { fetchSmurfs, addSmurf } from "../actions";

// components
import Smurf from "./Smurf";

const Smurfs = props => {
  // console.log("This is props in components/Smurfs.js: ", props)

  // console.log("This is props.smurfsOnProps in components/Smurfs.js: ", props.smurfsOnProps)
  return (
    <div>
      <button onClick={props.fetchSmurfs}>Show me the village</button>
      {!props.smurfsOnProps && !props.loadingOnProps && (
        <h3>Hit that button and find out who's in the Smurf village</h3>
      )}
      {props.smurfsOnProps &&
        !props.loadingOnProps &&
        props.smurfsOnProps.map(item => <Smurf key={item.id} smurf={item} />)}
    </div>
  );
};

// This code takes the state in 'store' and sets it to the prop
const mapStateToProps = state => {
  return {
    loadingOnProps: state.isLoading,
    smurfsOnProps: state.smurfs,
    errorOnProps: state.error
  };
};

// This code connects this component to the 'store'
export default connect(mapStateToProps, { fetchSmurfs, addSmurf })(Smurfs);
