import React from 'react';
import './App.css';
import { ColorProvider } from './store'
import MyTaskOne from './components/MyTaskOne';
// import TaskThree from './TaskThree'

function App() {
  return (
    <ColorProvider>
      <div className="App">
        <MyTaskOne />
        {/* <TaskThree/> */}
      </div>
    </ColorProvider>
  );
}

export default App;
