import React from 'react';

import painting00 from '../resource/images/painting00.jpg';
import painting01 from '../resource/images/painting01.jpg';
import painting02 from '../resource/images/painting02.jpg';
import painting03 from '../resource/images/painting03.jpg';
import painting04 from '../resource/images/painting04.jpg';
import painting05 from '../resource/images/painting05.jpg';
import painting06 from '../resource/images/painting06.jpg';

const WallPaintings = (props) => {
    const painting0={
        src:painting00,
        painter:'Aristotle (385BC-323BC)',
        name:''
    };
    const painting1={
        src:painting01,
        painter:'Pierre-Auguste Renoir (1841-1919)',
        name:'Dance in the Country(1883)'
    };
    const painting2={
        src:painting02,
        painter:'Pierre-Auguste Renoir (1841-1919)',
        name:'Venus with Mercury and Cupid(1525)'
    };
    const painting3={
        src:painting03,
        painter:'Jan van Eyck(1390-1441)',
        name:'Arnolfini Portrait(1434)'
    };
    const painting4={
        src:painting04,
        painter:'Peter Paul Rubens(1577-1640)',
        name:'Honeysuckle Bower(1609)'
    };
    const painting5={
        src:painting05,
        painter:'Gustav Klimt (1862-1918)',
        name:'The Kiss (1907–1908)'
    };
    const painting6={
        src:painting06,
        painter:'Pierre Auguste Cot (1837-1883)',
        name:'The Storm(1880)'
    };
    const paintings = [painting0,painting1,painting2,painting3,painting4,painting5,painting6];

    const opacity = ['0','0','0','0','0','0','0'];

    opacity[props.paintingNumber] = "1";

    const wallPaintings = paintings.map((painting,index)=>{return(
        <div className = "painting" key = {index} style={{opacity:opacity[index]}}>
            <img src = {painting.src} alt = {props.alt} />
            <div className="paintingInfo">
                <div>{painting.painter}</div>
                <div>{painting.name}</div>
            </div>
        </div>
    )})

    return (
        <div className="paintings">
            {wallPaintings}
        </div>
    );
};

export default WallPaintings;