/*
position
function isBrowser() {
  return !!(typeof window !== 'undefined' && window.document && window.document.createElement);
}

*/

import React, { useCallback, useRef } from 'react';
import usePositions from './hook/usePositions';

export default function Scroll() {
    const eRef = useRef(null);
    const { x, y } = usePositions(eRef);
    console.log('y', y)

    const scrollTop = useCallback(() => {
	eRef.current.scrollTop = 0
    }, []);

    const elTop = () =>{
	console.log(eRef.current.scrollTop)
    }
    const style = {
	width:'100px',
	height:'200px',
	border:'1px solid purple',
	overflow:'auto'
    };
    
    return (
	<>
	    <div style={ style } ref={eRef}>
	    <span>
		SCROLL 200
		SCROLL 200
		SCROLL 200
		SCROLL 200
		SCROLL 200
		SCROLL 200
		SCROLL 200
		SCROLL 200
		SCROLL 200
		SCROLL 200
		SCROLL 200
		SCROLL 200
		SCROLL 200
		SCROLL 200
		SCROLL 200		
	    </span>
	    {
		y && y > 20 ?
		    <button onClick={scrollTop}>
			Back to Top
		    </button>
		:null
	    }
	</div>
	<button onClick={elTop}>TOP</button>
	</>
    )
}
