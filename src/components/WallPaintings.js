import React from 'react';
import paintingInfo from './paintingInfo';

const WallPaintings = (props) => {

    const opacity = ['0','0','0','0','0','0','0'];
    const zIndex = ['2','2','2','2','2','2','2'];

    opacity[props.paintingNumber] = "1";
    zIndex[props.paintingNumber] = "3";

    const wallPaintings = paintingInfo.map((painting,index)=>{return(
        <div className = "painting" key = {index} style={{opacity:opacity[index],zIndex:zIndex[index]}} >
            <img src = {painting.src} alt = {props.alt} id={painting.paintingId} />
            <div className="paintingInfo" id={painting.paintingId}>
                <div id={painting.paintingId} >{painting.painter}</div>
                <div id={painting.paintingId} >{painting.name}</div>
            </div>
        </div>
    )})

    return (
        <div className="paintings" onClick={props.onclick}>
            {wallPaintings}
        </div>
    );
};

export default WallPaintings;