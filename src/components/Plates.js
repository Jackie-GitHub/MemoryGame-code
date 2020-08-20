import React from 'react';
import Plate from './Plate';
import './Plates.scss';

const Plates = (props) => {
    const videos = props.videos.map((obj)=>{
        return <Plate src1={obj.src1} src2={obj.src2} key={obj.id} group={obj.group} refer1={obj.ref1} refer2={obj.ref2} onclick={obj.onclick} />
    });
    return(
        <div className="plates">
            {videos}
        </div>
    );
};

export default Plates;