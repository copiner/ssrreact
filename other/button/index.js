import React from 'react';
import ReactDom from 'react-dom';

import Button from './item'


let render = () =>{
  ReactDom.render(
      <Button/>,
      document.getElementById('root')
  );
}

export default render;
