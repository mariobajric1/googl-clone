import React, { createContext, useContext, useReducer } from "react";

//Prepares Data Layer
export const StateContext = createContext();

//Higher Order Component
// initialState grabs i.s. and reducer decucts changes
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//hook that pulls info from the datalayer
export const useStateValue = () => useContext(StateContext);
