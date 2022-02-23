import React from 'react';
import { useParams } from "react-router-dom";

const Color = (props) =>{
    console.log(props)
    let { color } = useParams();

    const handleClick = () => {
        console.log(color)
    }

    return (
        <div>
          <h1>{color}苹果{"color"}</h1>
          <input type="button" value="颜色" onClick={handleClick} />
        </div>
    )
}

export default Color;
