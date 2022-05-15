/*
  useInterval
*/
import React, { useEffect, useState } from "react"
import useInterval from './hook/useInterval'

function Tick(props) {

    let [delay,setDelay] = useState(1000);
    
    useInterval(()=>{
	console.log(delay)
    },delay)
    
    const onTick = () => {
	setDelay(2000)
    };

    const onStop = () => {
	setDelay(null)
    };    

    return (
        <>
          <h2>TICK</h2>
            <button onClick={onTick}>TICKS</button>
            <button onClick={onStop}>STOP</button>	    
        </>
    );
}
export default Tick
