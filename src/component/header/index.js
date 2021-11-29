import React from 'react';
import { Link } from 'react-router-dom'
import stl from './index.css'

class Header extends React.Component{
    render(){
        return(
            <div className={stl.bg}>
                <Link to='/apple'>苹果</Link>
                <Link to='/login'>登录</Link>
                <Link to='/'>列表</Link>
            </div>
        )
    }
}
 export default Header
