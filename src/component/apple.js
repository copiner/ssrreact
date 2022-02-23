import React from 'react';
import { useSearchParams, useLocation } from "react-router-dom";

const Apple = (props) =>{

    let [searchParams, setSearchParams] = useSearchParams();
    let location = useLocation();

    const handleClick = () => {
        console.log(searchParams.get("shape"))
        console.log(location)
    }

    return (
        <div>
          <h1>苹果</h1>
          <input type="button" value="苹果" onClick={handleClick} />
        </div>
    )
}

export default Apple;
