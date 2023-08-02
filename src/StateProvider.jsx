import React, { createContext, useContext, useReducer } from "react";

// Step 1: Prepare the data layer by creating a context
export const StateContext = createContext();

// Step 2: Wrap app and provide the data layer using a custom StateProvider component
// The StateProvider component takes in a reducer function, initial state, and children as props
export const StateProvider = ({ reducer, initialState, children }) => (
  // Here, use the createContext hook to create the StateContext
  // Pass the useReducer hook to set up the state management with the provided reducer and initial state
  // The StateContext.Provider wraps around the entire app and makes the state and dispatch available to all child components
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}{" "}
    {/* This allows to render all the child components within the StateProvider */}
  </StateContext.Provider>
);

// Step 3: Create a custom hook useStateValue to access the state and dispatch from the data layer
// This hook allows components to easily access the state and dispatch without prop drilling
export const useStateValue = () => useContext(StateContext);

// Step 4: Export the StateProvider component as the default export
// This allows the StateProvider to be easily imported and used in the main app component
export default StateProvider;
