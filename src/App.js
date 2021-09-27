import React, { useState } from 'react';
import Modal from './Comps/Modal';
import Title from './Comps/Title';
import UploadForm from './Comps/UploadForm';
import ImageGrid from './Comps/ImageGrid';

import './App.css';
function App() {

 
  const [selectedImg, setSelectedImg] = useState(null);  
  return (
    <div className="background " style={{backgroundColor: 'aliceblue', Color: '#322d36'}} >
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
