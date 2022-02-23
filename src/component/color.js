import React from 'react';
import { useParams,useNavigate } from "react-router-dom";

const Color = (props) =>{
    const navigate = useNavigate();

    let { color } = useParams();

    const handleClick = () => {
        console.log(color)
        navigate('/apple?shape=big',{state:color})
    }

    return (
        <div>
          <h1>{color}苹果{"color"}</h1>
          <input type="button" value="颜色" onClick={handleClick} />
        </div>
    )
}

export default Color;
