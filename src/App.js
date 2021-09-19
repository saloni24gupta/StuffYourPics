import React from 'react';
import Modal from './Comps/Modal';
import Title from './Comps/Title';
import UploadForm from './Comps/UploadForm';
import ImageGrid from './Comps/ImageGrid';
import index from '../src/index';
import {useState} from 'react';
import './App.css';
function App() {
 
  const [selectedImg, setSelectedImg] = useState(null);  
  return (
    <div className="background " style={{backgroundColor: 'violet'}} >
   <div className="App"> 
    <Title />
     <UploadForm />
     <ImageGrid setSelectedImg={setSelectedImg}/>
     {selectedImg && <Modal selectedImg={selectedImg} setSelectImg={setSelectedImg}/>}
    
   </div>
   </div>
  );
}

export default App;