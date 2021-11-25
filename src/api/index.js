import Mock from "mockjs";
//mock server
const fetchList = (params) => {

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

export default fetchList
