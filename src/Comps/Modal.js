import React from 'react';
import {motion} from 'framer-motion';
const Modal = ({setSelectedImg, selecctedImg}) => {
    const handleClick = (e) => {
        if(e.target.classList.conatin('backdrop')){
        setSelectedImg(null);
        }
        

    }
    return (
    <motion.div className="backdrop"  onClick={handleClick}
    initial={{OPACITY: 0}}
        animate={{opacity: 1}}>

        <motion.img src={selecctedImg} alt="enlarged pic"/>
    </motion.div>
    )
}

export default Modal;