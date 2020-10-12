import React from 'react';
import Backdrop from './Backdrop';

const Modal = (props) => {
    return(
        <div className="modal">
            <div onClick={props.onclick}>
                <Backdrop show={props.show}/>
            </div>
            <div className="modal-content" style={{opacity:props.show ? '1':'0',transform:props.show?'translateY(0)':'translateY(-100vw)'}} >
                {props.children}
            </div>
        </div>
    )
};

export default Modal;