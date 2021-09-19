import React from 'react';
const Modal = ({selecctedImg}) => {
    const handleClick = (e) => {
        if(e.target.classList.conatin('backdrop')){
        selecctedImg(null);
        }
        

    }
    return (
    <div className="backdrop"  onClick={handleClick}>
        <img src={selecctedImg} alt="enlarged pic"/>
    </div>
    )
}

export default Modal;