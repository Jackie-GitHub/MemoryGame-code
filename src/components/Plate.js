import React from 'react';

const Plate = (props) => {
    return (
        <div className="plate" onClick={props.onclick} id={props.plateId} >
            <img src = {props.front} alt = 'plateFront'></img>
            <img src = {props.back} alt = 'plateBack'></img>
        </div>
    )
};

export default Plate;