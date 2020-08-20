import React from 'react';
import './App.scss';
import './components/Plates.scss';
import './components/Plate.scss';

import painting00 from './resource/images/painting00.png';
import painting01 from './resource/images/painting01.png';
import painting02 from './resource/images/painting02.png';
import painting03 from './resource/images/painting03.png';
import painting04 from './resource/images/painting04.png';
import painting05 from './resource/images/painting05.png';
import painting06 from './resource/images/painting06.png';

import back from './resource/images/back.png';
import front01A from './resource/images/front01A.png';
import front01B from './resource/images/front01B.png';
import front02A from './resource/images/front02A.png';
import front02B from './resource/images/front02B.png';
import front03A from './resource/images/front03A.png';
import front03B from './resource/images/front03B.png';
import front04A from './resource/images/front04A.png';
import front04B from './resource/images/front04B.png';
import front05A from './resource/images/front05A.png';
import front05B from './resource/images/front05B.png';
import front06A from './resource/images/front06A.png';
import front06B from './resource/images/front06B.png';

import backgroundVideo from './resource/videos/background3.mp4';

class App extends React.Component{
  state={ platesOpacity:0,
          WallPaintingNo:['00','00'],
          nextUpdate:0,
          firstClickGroup:'',
          firstClickId:'',
          count:0,
          plates : [['01A',front01A],['01B',front01B],['02A',front02A],['02B',front02B],['03A',front03A],['03B',front03B],['04A',front04A],['04B',front04B],['05A',front05A],['05B',front05B],['06A',front06A],['06B',front06B],]
  };

  paintings = {'00':painting00,'01':painting01,'02':painting02,'03':painting03,'04':painting04,'05':painting05,'06':painting06};

  lockBoard = false;
  onclickHandle = {'01A':true,'02A':true,'03A':true,'04A':true,'05A':true,'06A':true,'01B':true,'02B':true,'03B':true,'04B':true,'05B':true,'06B':true};

  updateWallPaintingNo = (str) => {
    let currentArr=[...this.state.WallPaintingNo];
    const updatedIndex= this.state.nextUpdate;
    currentArr[updatedIndex]=str;
    this.setState({WallPaintingNo:currentArr,nextUpdate:1^this.state.nextUpdate})
  };

  shuffleArr = (arr) => {
    let n = arr.length;
    while (n > 1){
      const index = Math.floor(Math.random() * n);
      const tempt = arr[index];
      arr[index] = arr[n-1];
      arr[n-1] = tempt;
      n--;
    }
    return arr;
  }

  refreshBoard = () => {
    window.location.reload();
  }

  check = (id) => {
    const group = id.slice(0,2);
    //const newHandle = {...this.state.onclickHandle};
    //first click
    if (!this.state.firstClickGroup) {
      this.onclickHandle[id] = false;
      this.setState({firstClickGroup:group,firstClickId:id})
    } else { //second click
      if (this.state.firstClickGroup === group){ //second click match
        this.onclickHandle[id] = false;   //frozen the two mateched plates
        setTimeout(()=>{this.updateWallPaintingNo(group)}, 400)  //update Wall paintings
        if (this.state.count === 5) { //check if the game is done
          setTimeout(()=>{alert('you win')}, 500);
        } else{ 
          const count = this.state.count;
          this.setState({firstClickGroup:'',firstClickId:'',count:count+1});
        }
      }else { //second click not match 
        this.lockBoard = true;
        setTimeout(()=>{                  //flip back the two plates
          this.flipPlate(id);
          this.flipPlate(this.state.firstClickId);
          this.onclickHandle[this.state.firstClickId] = true;
          this.setState({firstClickGroup:'',firstClickId:''});
          this.lockBoard = false;
        },800);
      }
    }
  }

  flipPlate = (id) => {
    document.getElementById(id).classList.toggle('flip');
  }

  onclick = (e) => {
    if (!this.lockBoard){
      const id = e.currentTarget.dataset.id;
      if (this.onclickHandle[id]) {
        this.flipPlate(id);
        this.check(id);
      }
    } 
  }

  timer = null;  

  componentDidMount() {
    this.setState({plates:[...this.shuffleArr(this.state.plates)]}) //shuffle board    
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

          <div className="platesWrap">
            <div className="plates" style={{opacity:this.state.platesOpacity}} >
                  <div className="plate" onClick = {this.onclick} data-id={this.state.plates[0][0]} id={this.state.plates[0][0]} >
                    <img src = {this.state.plates[0][1]} alt = 'plateFront'></img>
                    <img src = {back} alt = 'plateBack'></img>
                  </div>
                  <div className="plate" onClick = {this.onclick} data-id={this.state.plates[1][0]} id={this.state.plates[1][0]} >
                    <img src = {this.state.plates[1][1]} alt = 'plateFront'></img>
                    <img src = {back} alt = 'plateBack'></img>
                  </div>
                  <div className="plate" onClick = {this.onclick} data-id={this.state.plates[2][0]} id={this.state.plates[2][0]} >
                    <img src = {this.state.plates[2][1]} alt = 'plateFront'></img>
                    <img src = {back} alt = 'plateBack'></img>
                  </div>
                  <div className="plate" onClick = {this.onclick} data-id={this.state.plates[3][0]} id={this.state.plates[3][0]} >
                    <img src = {this.state.plates[3][1]} alt = 'plateFront'></img>
                    <img src = {back} alt = 'plateBack'></img>
                  </div>
                  <div className="plate" onClick = {this.onclick} data-id={this.state.plates[4][0]} id={this.state.plates[4][0]} >
                    <img src = {this.state.plates[4][1]} alt = 'plateFront'></img>
                    <img src = {back} alt = 'plateBack'></img>
                  </div>
                  <div className="plate" onClick = {this.onclick} data-id={this.state.plates[5][0]} id={this.state.plates[5][0]} >
                    <img src = {this.state.plates[5][1]} alt = 'plateFront'></img>
                    <img src = {back} alt = 'plateBack'></img>
                  </div>
                  <div className="plate" onClick = {this.onclick} data-id={this.state.plates[6][0]} id={this.state.plates[6][0]} >
                    <img src = {this.state.plates[6][1]} alt = 'plateFront'></img>
                    <img src = {back} alt = 'plateBack'></img>
                  </div>
                  <div className="plate" onClick = {this.onclick} data-id={this.state.plates[7][0]} id={this.state.plates[7][0]} >
                    <img src = {this.state.plates[7][1]} alt = 'plateFront'></img>
                    <img src = {back} alt = 'plateBack'></img>
                  </div>
                  <div className="plate" onClick = {this.onclick} data-id={this.state.plates[8][0]} id={this.state.plates[8][0]} >
                    <img src = {this.state.plates[8][1]} alt = 'plateFront'></img>
                    <img src = {back} alt = 'plateBack'></img>
                  </div>
                  <div className="plate" onClick = {this.onclick} data-id={this.state.plates[9][0]} id={this.state.plates[9][0]} >
                    <img src = {this.state.plates[9][1]} alt = 'plateFront'></img>
                    <img src = {back} alt = 'plateBack'></img>
                  </div>
                  <div className="plate" onClick = {this.onclick} data-id={this.state.plates[10][0]} id={this.state.plates[10][0]}  >
                    <img src = {this.state.plates[10][1]} alt = 'plateFront'></img>
                    <img src = {back} alt = 'plateBack'></img>
                  </div>
                  <div className="plate" onClick = {this.onclick} data-id={this.state.plates[11][0]} id={this.state.plates[11][0]}  >
                    <img src = {this.state.plates[11][1]} alt = 'plateFront'></img>
                    <img src = {back} alt = 'plateBack'></img>
                  </div>
                </div>;
          </div>

          {/* the start 2 paintings need to change*/}
          <div className="wallPainting wallPaintingleft">
            <img src={this.paintings[this.state.WallPaintingNo[0]]} alt="currentPaintingLeft" /> 
          </div>
          <div className="wallPainting wallPaintingright">
            <img src={this.paintings[this.state.WallPaintingNo[1]]} alt="currentPaintingRight" />
          </div>
        </div>
      </div>
    );
  };
}

export default App;

// TODO: SHUFFLE VIDEOS