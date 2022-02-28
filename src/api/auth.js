import Mock from "mockjs";
//mock server
export const mockApi = (params) => {

  const data = Mock.mock({
    "list|5": [
      {
        id:"@id()",
        name: "@name()"
      }
    ]
  });

  return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(data);
      }, Mock.Random.integer(3000, 5000));
  });

};

let auths = [
  {id: 100, auth: 'admin_user', name: '用户模块'},
  {id: 101, auth: 'admin_user_get', name: '查看用户'},
  {id: 102, auth: 'admin_user_add', name: '添加用户'},
  {id: 103, auth: 'admin_user_del', name: '删除用户'},
  {id: 104, auth: 'admin_user_edit', name: '编辑用户'},
]
