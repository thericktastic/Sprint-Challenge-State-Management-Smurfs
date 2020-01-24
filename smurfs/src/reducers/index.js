// reducers/index.js

// Set initialState for the app
const initialState = {
  isLoading: false,
  smurfs: null,
  error: ""
};

console.log("This is initialState in reducers/index.js: ", initialState);

// Reducers will throw an error if 'action' is anything but an object
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHING_SMURFS_START":
      return {
        ...state,
        isLoading: true
      };
    case "FETCHING_SMURFS_SUCCESS":
      return {
        ...state,
        isLoading: false,
        smurfs: action.payload
      };
    default:
      return state;
  }
};
