import React from 'react';
import routes from '../routes';
import { Routes, Route, Navigate,Outlet,Link } from 'react-router-dom';

import NoMatch from '../component/nomatch';
const App = () => {
  return (
      <>
          <h1>Bookfruits</h1>
          <Routes>
            {
              routes.map(v => {
                  const { path, children, element } = v;
                  if(children && children.length){
                     return ( <Route key={path} path={path} element = {element} >
                                  {
                                      children.map( c=> <Route key={c.path} path={c.path} element = {c.element} /> )
                                  }
                              </Route> )
                  } else {
                      return <Route key={path} path={path} element = {element} />
                  }

              })
            }
            <Route path="*" element={<NoMatch />} />
          </Routes>
      </>
  )
};

export default App;
