/*
  高阶组件，实现权限控制
*/

import React, { useState } from 'react'
import { wrapAuth } from './hoc/auth'

let Button = (props) => {
    console.log(props)
    return <><button>{ props.children }</button></>
}

Button = wrapAuth(Button)


export default function Auth(){

    const [auth, setAuth]  = useState()
    
    return (
      <div>
          <Button auth="admin_user_add">添加用户</Button>
	  {/*删除用户无权限*/}
          <Button auth="admin_user_info">用户信息</Button>
	  <Button auth="admin_user_del">删除用户</Button>
          <Button auth="admin_user_edit">编辑用户</Button>
      </div>
    )
    
}
