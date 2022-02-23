/*
  context useContext memo
*/
import React, { useState, memo} from "react";

let Favor = React.createContext("red");

const Inner = () => {
    let color = React.useContext(Favor);
    return <div><span>{color}</span></div>
}

const Outer = () => {
  return <Inner />
}

const Left = () => {
  console.log("left")
  return <><span>left</span></>
}

const Right = memo(() => {
  console.log("right")
  return <><span>right</span></>
})

export default function App() {
  const [color, setColor] = useState("red")
  
  return (
      <>
	 <h2>颜色偏爱</h2> 
	  <button onClick={() => setColor("red")}>RED</button>
	  <button onClick={() => setColor("green")}>GREEN</button>
	  <div>
	  <Favor.Provider value={color}>
	      <Left />
              <Outer />
              <Right />
	  </Favor.Provider>
	  </div>
      </>
  );
}
