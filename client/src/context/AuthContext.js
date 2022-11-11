import { createContext } from "react";
import { useReducer } from "react";
import { useEffect } from "react";

const INITIAL_STATE =  {
  user: JSON.parse(localStorage.getItem("user")) || null,
  loading: false,
  error: null,
};

export const AuthContext = createContext(INITIAL_STATE)

const AuthReducer = (state, action) => {
  switch(action.type){
    case "LOGIN_START":
    return {
      user: null,
  loading: true,
  error: null,
    };

    case "LOGIN_SUCCESS":
    return {
      user: action.payload,
  loading: false,
  error: null,
    };

    case "LOGIN_FAILURE":
    return {
      user: null,
  loading: false,
  error: action.payload,
    };

    case "LOGOUT":
    return {
      user: null,
  loading: false,
  error: null,
    };
    default:
      return state;
  }
};

export const AuthContextprovider = ({children}) => {
  const [state, dispatch] = useReducer (AuthReducer, INITIAL_STATE);

  //Saves user to local storage
  useEffect (() =>{
localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user])

  return (
    <AuthContext.Provider value = {{
     user : state.user,
     loading: state.loading,
     options: state.options,
    dispatch ,
      }}>
      {children}
    </AuthContext.Provider>
  )
}