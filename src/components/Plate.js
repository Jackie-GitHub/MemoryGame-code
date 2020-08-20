import React from 'react';
import './Plate.scss';

class Plate extends React.Component {
    state = {outIndex:'10'
            };

    playVideo=(ref) => {
        this.refs[ref].play();
    };

    render(){
        return(
        <div className="plate">
            <div className="plateBack">
                <video className="plateVideo" muted ref={this.props.refer2} >
                    <source src={this.props.src2} type="video/mp4" />
                </video>
            </div>            
            <div className="plateOut" onClick={()=>{
                                                        this.playVideo(this.props.refer1);
                                                        this.setState({outIndex:'4'});
                                                        this.props.onclick(this.props.group);
                                                    }} 
                                      style={{zIndex:this.state.outIndex}} >
                <video className="plateVideo" muted ref={this.props.refer1} >
                    <source src={this.props.src1} type="video/mp4" />
                </video>
            </div>
        </div>
    )}
};

export default Plate;