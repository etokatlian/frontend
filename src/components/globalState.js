import React, { createContext, useReducer } from 'react';

let initialState = {
  user: {
    isLoggedin: false,
    firstName: 'Eric',
    lastName: 'Tokatlian'
  }
};

let reducer = (state, action) => {
  switch (action.type) {
    case 'user_login_successful':
      return {
        ...state,
        user: {
          ...state.user,
          isLoggedin: true
        }
      };
  }
};

const GlobalContext = createContext(initialState);

const GlobalContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalContextProvider };
