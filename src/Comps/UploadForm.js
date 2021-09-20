import React, { useState } from 'react';
import ProgressBar from './Progressbar';

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const types = ['image/png', 'image/jpeg'];
    const handleclick = (e) => {
        let selected = e.target.files[0];
        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError('');
        } else {
            setFile(null);

            setError('please select an image file (png or jpeg)');
        }
    }
    return (
        <form >
            <label>
                <input className="uploaded" type="File" onChange={handleclick} />
                <span style={{backgroundColor: 'ButtonHighlight' , border: 'dashed', borderRadius:'circular' }}>+</span>
            
            </label>
            <div className="output">
                {error && <div className="error" >{error} </div>}
                {file && <div>{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile} />}
            </div>


        </form>
    )

}
export default UploadForm;