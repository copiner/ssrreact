import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Header = () =>{
    return (
     <div>
        <h1>Bookkeeper</h1>
        <nav>
            <Link to='/'>列表</Link>
            <Link to='/apple'>苹果</Link>
        </nav>
        <Outlet />
     </div>
    )
}

export default Header;
