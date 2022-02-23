import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import routes from '../routes';

const Header = (props) =>{
    return (
     <div>
         <h1>header</h1>
         {
           routes.map(v => {
               const { path, children, name } = v;
               return <Link key={v.path} to={path}>{name}</Link>
           })
         }
     </div>
    )
}

export default Header;
