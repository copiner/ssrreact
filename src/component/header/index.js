import React from 'react';
import { Link } from 'react-router-dom'

class Header extends React.Component{
    render(){
        return(
            <div>
                <Link to='/login'>登录</Link>
                <Link to='/'>列表</Link>
            </div>
        )
    }
}
 export default Header
