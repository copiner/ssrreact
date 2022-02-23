import React from 'react';
import { Outlet, Link, useParams} from 'react-router-dom';

import Button from '@mui/material/Button';

const Peach = (props) =>{

    return (
        <div>
          <h1>桃子</h1>
          <Button variant="contained">桃子</Button>
          <Link to='/peach/red'>红桃子</Link>
          <Outlet/>
        </div>
    )
}

export default Peach;
