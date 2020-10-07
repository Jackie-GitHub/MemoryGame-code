import React from 'react';
import Plate from './Plate';

import back from '../resource/images/back.png';
import front01A from '../resource/images/front01A.png';
import front01B from '../resource/images/front01B.png';
import front02A from '../resource/images/front02A.png';
import front02B from '../resource/images/front02B.png';
import front03A from '../resource/images/front03A.png';
import front03B from '../resource/images/front03B.png';
import front04A from '../resource/images/front04A.png';
import front04B from '../resource/images/front04B.png';
import front05A from '../resource/images/front05A.png';
import front05B from '../resource/images/front05B.png';
import front06A from '../resource/images/front06A.png';
import front06B from '../resource/images/front06B.png';

class Plates extends React.Component {
    lockBoard = false;
    firstClickGoup = '';
    firstClickId = '';
    count = 0;

    onclickHandle = {'01A':true,'02A':true,'03A':true,'04A':true,'05A':true,'06A':true,'01B':true,'02B':true,'03B':true,'04B':true,'05B':true,'06B':true};

    platesInOrder = [['01A',front01A],['01B',front01B],['02A',front02A],['02B',front02B],['03A',front03A],['03B',front03B],['04A',front04A],['04B',front04B],['05A',front05A],['05B',front05B],['06A',front06A],['06B',front06B]];

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
    };

    plates = this.shuffleArr(this.platesInOrder); 

    onclick = (e) => {
        if (!this.lockBoard){
            const id = e.currentTarget.id;
            if (this.onclickHandle[id]) {
                this.flipPlate(id);
                this.check(id);
            }
        }
    }

    flipPlate = (id) => {
        document.getElementById(id).classList.toggle('flip');
    }

    youWin = () => {
        document.getElementById('youwin').classList.remove('hide');
    }

    check = (id) => {
        const group = id.slice(0,2);
        // //first click
        if (!this.firstClickGoup) {
             this.onclickHandle[id] = false;
             this.firstClickGoup = group;
             this.firstClickId = id;
        } else { //second click
            if (this.firstClickGoup === group){ //second click match
                this.onclickHandle[id] = false;   //frozen the two matched plates
                setTimeout(()=>{this.props.updateWallPaintingNo(group)}, 400)  //update Wall paintings
                if (this.count === 5) { //check if the game is done
                    setTimeout(()=>{this.youWin()}, 500);
                } else{ 
                    this.firstClickGoup='';
                    this.firstClickId='';
                    this.count++;
                }
            }else { //second click not match 
             this.lockBoard = true;
             setTimeout(()=>{          //flip back the two plates
               this.flipPlate(id);
               this.flipPlate(this.firstClickId);
               this.onclickHandle[this.firstClickId] = true;
               this.firstClickGoup='';
               this.firstClickId='';
               this.lockBoard = false;
             },800);
           }
        }
    }

    render(){
        const platesRender = this.plates.map((plate)=><Plate key={plate[0]} plateId={plate[0]} onclick={this.onclick} front={plate[1]} back={back} />)
        return(
            <div className="plates">
                {platesRender}
            </div>
        );
    }
};

export default Plates;