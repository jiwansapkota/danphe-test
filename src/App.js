import React, { useContext } from 'react';
import './App.css';
// import {useState} from 'react';
// import TaskThree, { printFromOneToHundred } from './TaskThree'
import { ColorProvider, ColorContext } from './store'

function MyTaskOne() {
  const { state, dispatch } = useContext(ColorContext);
  return (<>
    <button className={`${state.color}`} onClick={() => dispatch({ type: 'CHANGE_MY_COLOR' })}>Click Me To Change Color </button>
    <div style={{'paddingTop':'10px'}}>
      {state.colorHistory.map((color, index) => (
        <span key={index} style={{ color }}>
          {index < state.colorHistory.length - 1 ? color + ", " : color}
        </span>))}
    </div>
  </>
  )

}

function App() {
  // const colorList = ["red", "green", "blue", "black", "orange"];
  // var [color, setColor] = useState('red')
  // var [colors, setColors] = useState([])

  // const buttonClickHandler = (e) => {
  //   e.preventDefault()
  //   let newColor;
  //   if (color === "blue") {
  //     newColor = "green";
  //   } else {
  //     newColor = colorList[Math.floor(Math.random() * colorList.length)];
  //   }
  //   setColor(newColor);
  //   var temp = colors
  //   temp.push(newColor)
  //   setColors(temp)
  // }

  return (
    <ColorProvider>
      <div className="App">
        {/* <button className={`${color}`} onClick={buttonClickHandler}>Click Me To Change Color </button>
        <div>
          {colors.map((color, index) => (
            <span key={index} style={{ color }}>
              {index < colors.length - 1 ? color + ", " : color}
            </span>
          ))}
        </div> */}
        <MyTaskOne />
        {/* <TaskThree/> */}
      </div>
    </ColorProvider>
  );
}

export default App;
