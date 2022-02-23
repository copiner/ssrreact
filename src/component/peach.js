import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const Peach = () =>{
  return (
    <div>
      <h1>桃子</h1>
      <Button variant="contained">桃子</Button>
      <Link to='/peach/apple'>桃子-->苹果</Link>
      <Outlet/>
    </div>
  )
}

export default Peach;
