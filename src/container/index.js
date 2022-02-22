import React from 'react';
import routes from '../routes';
import { Routes, Route, Navigate } from 'react-router-dom';

const App = () => {
  return (
      <>
      <Routes>
        {
          routes.map(v => {
              const { path, children, element } = v;
              if(children && children.length){
                 return(
                      <Route key={path} path={path} element = {element} >
                        <Route key={children.path} path={children.path} element = {children.element} />
                      </Route>
                  )
              } else {
                  return <Route key={path} path={path} element = {element} />
              }

          })
        }
      </Routes>
      </>
  )
};

export default App;
