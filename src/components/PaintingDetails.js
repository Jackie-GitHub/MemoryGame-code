import React from 'react';
import paintingInfo from './paintingInfo';

const PaintingDetails = (props) => {
    return(
        <div className="paintingDetails">
            <a href={paintingInfo[props.paintingNo].srcEnlarge} target="_blank" rel="noopener noreferrer"> <img src = {paintingInfo[props.paintingNo].src} alt = {paintingInfo[props.paintingNo].name} /></a>
            <div className="paintingDetailsInfo" onClick={props.onclick} >
                <div>{paintingInfo[props.paintingNo].painter}</div>
                <div>{paintingInfo[props.paintingNo].name}</div>
                <p>{paintingInfo[props.paintingNo].description}</p>
            </div>
        </div>
    )
};

export default PaintingDetails;