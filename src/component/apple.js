import React from 'react';
import Button from '@mui/material/Button';
import { useSearchParams } from "react-router-dom";

const Apple = (props) =>{
    console.log(props)
    let [searchParams, setSearchParams] = useSearchParams();

    const handleClick = () => {
        console.log(searchParams.get("shape"))
    }

    return (
        <div>
          <h1>苹果</h1>
          <Button onClick={handleClick} variant="contained">你好，世界</Button>
        </div>
    )
}

export default Apple;
