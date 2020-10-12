import React from 'react';
import './App.scss';

import WallPaintings from './components/WallPaintings';
import Plates from './components/Plates';
import Modal from './components/Modal';
import PaintingDetails from './components/PaintingDetails';

import backgroundVideo from './resource/videos/background03.mp4';

import {connect} from 'react-redux';
import * as actionTypes from './store/actions';

class App extends React.Component{
  state={ platesOpacity:0 };

  nextUpdateWallPaintingNo = 0;
  modalPaintingNo = 0;

  updateWallPaintingNo = (str) => {
    this.props.updatePaintings(this.nextUpdateWallPaintingNo,parseInt(str));
    this.nextUpdateWallPaintingNo = 1^this.nextUpdateWallPaintingNo;
  };

  wallPaintingOnClick = (e) => {
    this.props.showModal();
    this.modalPaintingNo = parseInt(e.target.id);
  };

  refreshBoard = () => {
    window.location.reload();
  }

  timer = null;  

  componentDidMount() {  
    this.timer = setTimeout(()=>{this.setState({platesOpacity:1})}, 1500) //shorter than the videos length
  };

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render(){
    return (
      <div className="App">
        <div className="content">
          <div className="backgroundVideo">
            <video className="theVideo" autoPlay muted >
              <source src={backgroundVideo} type="video/mp4" />
            </video>
          </div>

          <div className ="buttonR" onClick = {this.refreshBoard}>Restart Game</div>
          <Modal show={this.props.modalStatus} onclick={this.props.hideModal} >
            <PaintingDetails onclick={this.props.hideModal} paintingNo={this.modalPaintingNo} />
          </Modal>
          <div className="scroll" style={{opacity:this.state.platesOpacity}}>
            <div className = "title">Find the Love</div>
            <div className = "description">Flip over the plates below to match the person with their other half to form a masterpeice.</div>
            <Plates updateWallPaintingNo={this.updateWallPaintingNo}/>
            <div className = "copyRight">Developed and designed by<a href="https://jackie-github.github.io/xujiaqi/" target="_blank" rel="noopener noreferrer" > Jiaqi Xu </a>.</div>
          </div>

          <div className="wallPaintings wallPaintingleft">
            <WallPaintings paintingNumber = {this.props.paintingNumbers[0]} alt = 'LeftPainting' 
            onclick={this.wallPaintingOnClick}/>
          </div>
          <div className="wallPaintings wallPaintingright">
            <WallPaintings paintingNumber = {this.props.paintingNumbers[1]} alt = 'RightPainting' onclick={this.wallPaintingOnClick}/>
          </div>
          <div className = "youwin hide" id="youwin" >WELL DONE!</div>
        </div>
      </div>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    paintingNumbers:state.wallPaintingNo.wallPaintingNo,
    modalStatus:state.modal.showModal
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updatePaintings: (index,num) => dispatch({type:actionTypes.UPDATEPAINTINGNO,index:index,number:num}),
    showModal: () => dispatch({type:actionTypes.SHOWMODAL}),
    hideModal: () => dispatch({type:actionTypes.HIDEMODAL})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);