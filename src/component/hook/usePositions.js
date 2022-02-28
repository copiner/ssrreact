/*
  usePositions
*/
import { useState, useEffect } from 'react';

export default function usePositions(eRef){

    const [position, setPosition] = useState({x:0,y:0});
    useEffect(() => {
   	const handler = () => {
	    setPosition({x:eRef.current.scrollLeft, y:eRef.current.scrollTop});
	};
	//监听 scroll 事件，更新滚动条位置
	eRef.current.addEventListener("scroll", handler);
	return () => {
	    //组件销毁时，取消事件监听
	    eRef.current.removeEventListener("scroll", handler);
	};
    }, []);
    return position;
};


