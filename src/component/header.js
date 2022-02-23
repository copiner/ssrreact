import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Header = (props) =>{
    return (
     <div>
         <h1>header</h1>
         <nav>
             <Link to='/'>列表</Link>
             <Link to='/peach'>桃子</Link>
             <Link to='/peach/apple'>苹果</Link>
             <Link to='/counter'>计数</Link>
         </nav>

     </div>
    )
}

export default Header;
