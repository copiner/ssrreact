/*
  高阶组件，实现权限控制
*/
import React from 'react'

let auths = [
  {id: 100, auth: 'admin_user', name: '用户模块'},
  {id: 101, auth: 'admin_user_get', name: '查看用户'},
  {id: 102, auth: 'admin_user_add', name: '添加用户'},
  {id: 103, auth: 'admin_user_del', name: '删除用户'},
  {id: 104, auth: 'admin_user_edit', name: '编辑用户'}
]

//Array.form(new Set(authTags).includes(authKey)) //校验权限
function checkAuth(auth) {
  // 用户权限表
  const rules = auths;
  for (let i = 0; i < rules.length; i++) {
      const item = rules[i]
      // 无需权限控制或者权限匹配则通过
      if(!auth || (auth == item.auth)){
          return true
      }
  }
  return false
}

// 高阶组件包装原组件
export function wrapAuth(WrappedComponent) {

    let New = class extends React.Component {
	constructor(props) {
	    super(props)
	}

	render () {
	    if (checkAuth(this.props.auth)) {
		return <WrappedComponent {...this.props} />
	    } else {
		return null
	    }
	}
    }
  // ！如果原组件有静态方法，则需要进行拷贝处理
  // https://github.com/mridgway/hoist-non-react-statics
  // hoistNonReactStatic(New, WrappedComponent);
  return New
}

export function wrapAuths(WrappedComponent) {

    return props => {
	return checkAuth(props.auth)?<WrappedComponent {...props} />:null
    }
    
}


export function wrapedAuths({}) {

    return WrappedComponent => {

	return props => {
	    return checkAuth(props.auth)?<WrappedComponent {...props} />:null
	}
	
    }
    
}
/*

let Button = (props) => {
    console.log(props)
    return <><button>{ props.children }</button></>
}
Button = wrapedAuths({})(Button)
*/
