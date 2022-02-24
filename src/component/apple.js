import React, { useState } from 'react';
import { useSearchParams, useLocation } from "react-router-dom";

const Apple = (props) =>{

    let [val, setVal] = useState(0);

    let [searchParams, setSearchParams] = useSearchParams();
    let location = useLocation();

    const handleClick = () => {
        console.log(searchParams.get("shape"))
        console.log(location)
    }

    const handleChange = (e) =>{
        setVal(e.target.value);
    }

    return (
        <div>
            <h1>苹果{val}</h1>
            <input type="button" value="苹果" onClick={handleClick} />
            <input type="number" value={val} onChange={handleChange}/>
        </div>
    )
}

export default Apple;
