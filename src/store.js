import React, { useReducer, createContext} from 'react';


const colorList = ["red", "green", "blue", "black", "orange"];

const initialState = {
  color: 'red',
  colorHistory: []
};

function changeColorReducer(state, action) {
  switch (action.type) {
    case 'CHANGE_MY_COLOR':
      let newColor = 'red';
      if (state.color === 'blue') {
        newColor = 'green';
      } else {
        newColor = colorList[Math.floor(Math.random() * colorList.length)];
      }
      return {
        color: newColor,
        colorHistory:[...state.colorHistory,newColor]
      };
    default:
      return state;
  }
}
const ColorContext = createContext();

function ColorProvider({ children }) {
  const [state, dispatch] = useReducer(changeColorReducer, initialState);
  return (
    <ColorContext.Provider value={{ state, dispatch }}>
      {children}
    </ColorContext.Provider>
  );
}

export {ColorProvider, ColorContext}