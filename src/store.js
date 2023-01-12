import React, { useReducer, createContext} from 'react';

//list of given color for random selection
const colorList = ["red", "green", "blue", "black", "orange"];

//Initial app state
const initialState = {
  color: 'red',
  colorHistory: []
};

//to handle color change event
function changeColorReducer(state, action) {
  switch (action.type) {
    case 'CHANGE_MY_COLOR':
      let newColor = 'red';
      // if previous state is blue, next is green, otherwise select one from the list randomly
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