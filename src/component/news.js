/*
  thunk
*/
import React, { useEffect, useState } from "react";

function News(props) {

    console.log(props.news)

    const onButtonClick = () => {
        props.listingNews('hazard')
    };

    return (
        <>
          <h2>NEWS</h2>
          <div></div>
          <button onClick={onButtonClick}>Focus News</button>
        </>
    );
}
export default News
