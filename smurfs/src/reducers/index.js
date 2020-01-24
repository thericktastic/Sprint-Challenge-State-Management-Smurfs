// reducers/index.js

// Set initialState for the app
const initialState = {
    isLoading: false,
    smurf: null,
    error: ""
}

console.log("This is initialState in reducers/index.js: ", initialState);

// Reducers will throw an error if 'action' is anything but an object
export const reducer = (state = initialState, action) => {
    switch (action.type) {
    default:
        return state
    }
}