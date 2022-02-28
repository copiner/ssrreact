/*
  useLoadData 模拟数据接口请求功能
*/
import React,{useState,useEffect} from 'react';


export default function useLoadData(){

    const [num,setNum] = useState(0);

    useEffect(() => {
        
        setTimeout(() => {
            setNum(2)
        }, 1000);
     
    }, [])

    return [num,setNum]

}

