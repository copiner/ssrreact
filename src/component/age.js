/*
  自定义hook的使用
*/
import React from 'react';
import useLoadData from './hook/useLoadData';
import useLocalReducer from './hook/useLocalReducer';

function Age(){

    const [num,setNum] = useLoadData()
    
    const [state,dispatch] = useLocalReducer()

    return(

	<div>
            <p>Age---{num}---{state.age}</p>
	    <button onClick={()=>dispatch({
			type:'changeAge',
			age:18
		    })}>CHANGEAGE</button>
        </div>
	
    )
}

export default Age
