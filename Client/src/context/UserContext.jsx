import React, { useReducer } from "react";
import actionTypes from "./actionType";
export const UserContext = React.createContext({});
let initialState = {
  user: localStorage.getItem("user") ?? {},
  isAuthenticated: localStorage.getItem("user") ? true : false,
  loading: false,
};
const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(RootReducer, initialState);
  return (
    <UserContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
const RootReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.LOGOUT: {
      return { isAuthenticated: false, user: {} };
    }
    case actionTypes.SET_AUTHENTICATION: {
      return { ...state, isAuthenticated: true, user: action.payload };
    }
    case actionTypes.SET_USER: {
      return { ...state, user: action.payload };
    }
    default:
      return new Error(`Invalid action types ${actionTypes}`);
  }
};
