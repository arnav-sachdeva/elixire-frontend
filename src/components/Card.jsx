import React, { useState } from "react";


function Card(props){

    function handleClick() {
        props.onClick(props.id);
      }

    return (
     
        <div className="individual-card">
            <img src={props.img} alt="img" />
            <p className="candidateName">{props.name}</p>
            <p>{props.constituency}</p>
            <button onClick={handleClick}>Vote</button>
            
    </div>
 
    );

}

export default Card;