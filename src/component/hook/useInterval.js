import React, { useRef, useEffect } from 'react'

export default function useInterval(callback, delay){
    const cb = useRef();

    useEffect(()=>{
	cb.current = callback;
    })

    useEffect(()=>{
	const tick = () => {
	    cb.current()
	}
	
	let id = setInterval(tick, delay);

	if (!delay) clearInterval(id);
	
	return () => clearInterval(id);
    },[delay])
}
