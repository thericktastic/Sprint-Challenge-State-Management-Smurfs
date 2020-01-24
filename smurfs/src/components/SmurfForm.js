import React, { Component } from "react";
import { connect } from "react-redux";
import { addSmurf } from "../actions";

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurf: {
        name: "Iffey",
        age: 23,
        height: "6cm"
      }
    };
  }

  handleChanges = e => {
    this.setState({
      smurf: {
        ...this.state.smurf,
        [e.target.name]: e.target.value
      }
    })
  }

  putSmurf = e => {
    e.preventDefault();
    this.props.addSmurf(this.state.smurf);
  };

  render() {
    console.log("This is this.state.smurf: ", this.state.smurf)
    return (
      <form onSubmit={this.putSmurf}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="name"
            onChange={this.handleChanges}
            value={this.state.smurf.name}
          />
        </div>
        <div>
          <input
            type="text"
            name="age"
            placeholder="age"
            onChange={this.handleChanges}
            value={this.state.smurf.age}
          />
        </div>
        <div>
          <input
            type="text"
            name="height"
            placeholder="height"
            onChange={this.handleChanges}
            value={this.state.smurf.height}
          />
        </div>
        <button type="submit">Add Smurf</button>
      </form>
    );
  }
}

// This code takes the state in 'store' and sets it to the prop
const mapStateToProps = state => {
  return {
    loadingOnProps: state.isLoading,
    smurfsOnProps: state.smurfs,
    errorOnProps: state.error
  };
};

// This code connects this component to the 'store'
export default connect(mapStateToProps, { addSmurf })(SmurfForm);
