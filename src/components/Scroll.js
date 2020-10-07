import React from 'react';
import Plates from './Plates';

const Scroll = (props) => {
    return(
        <div>
            <div className = "title">Find the Love</div>
            <div className = "description">Click to flip over plates below and help the person behind to find the other half in the masterpeice.  </div>
            <Plates updateWallPaintingNo={props.updateWallPaintingNo}/>
        </div>
    )
}

export default Scroll;