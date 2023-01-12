import React,{useContext} from 'react';
import { ColorContext } from '../store';

function MyTaskOne() {
    const { state, dispatch } = useContext(ColorContext);
    return (<>
      <button className={`${state.color}`} onClick={() => dispatch({ type: 'CHANGE_MY_COLOR' })}>Click Me To Change Color </button>
      <div style={{'paddingTop':'10px'}}>
        {state.colorHistory.map((color, index) => (
          <span key={index} style={{ color }}>
            {/* condition to remove comma from last item */}
            {index < state.colorHistory.length - 1 ? color + ", " : color}
          </span>))}
      </div>
    </>
    )
  
  }

export default MyTaskOne