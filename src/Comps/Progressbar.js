import React from 'react';
import useStorage from '../Hooks/Usestorage';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
const ProgressBar = ({file, setFile}) => {
   const { url, progress } = useStorage(file);
useEffect(()=> {
     if(url)
     {
         setFile(null);
     }

}, [url, setFile]);

 
   return (
    
        <motion.div className='progress-bar' initial={{width: 0}} animate={{ width: progress + '%' }} style={{padding: '3px', margin: '3px' ,backgroundColor: 'cyan', height: '5px' ,background: 'var(--primary)'}}>progress bar</motion.div>
    )
}
export default ProgressBar;
