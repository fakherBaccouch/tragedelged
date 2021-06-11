import React, { Fragment, useState } from 'react';
import Message from './Message';
import Progress from './Progress';
import axios from 'axios';
import { useParams} from "react-router-dom";
import style from './uploadFile.module.scss'
import { Button as Btn } from 'semantic-ui-react'

const UploadFile = (props) => {
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Choose File');
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState('');
  const [uploadPercentage, setUploadPercentage] = useState(0);

  let { id } = useParams();
  const onChange = e => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('description', 'description paragraph');
    formData.append('folder', id);
    formData.append('tabUser',props.userTab);
    try {
      const res = await axios.post('http://localhost:1212/api/file/upload', formData,{withCredentials:true}, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: progressEvent => {
          setUploadPercentage(
            parseInt(
              Math.round((progressEvent.loaded * 100) / progressEvent.total)
            )
          );

          // Clear percentage
          setTimeout(() => setUploadPercentage(0), 10000);
        }
      }).then(()=> window.location.reload());

      const { fileName, filePath } = res.data;

      setUploadedFile({ fileName, filePath });

      setMessage('File Uploaded');
    } catch (err) {
      if (err.response.status === 500) {
        setMessage('There was a problem with the server');
      } else {
        setMessage(err.response.data.msg);
      }
    }
  };
       
  return (
    <div style={{width:'100%',overflow:'hidden',textAlign:'center'}}>
      {message ? <Message msg={message} /> : null}
      <form onSubmit={onSubmit}>
        <div >
          <input style={{width:"100%"}}
            type='file'
            onChange={onChange}
            id={style.upload}
          />

         
        </div>
        <br/>
        <Progress percentage={uploadPercentage} />
                   <Btn style={{display:'flex'}} disabled={props.userTab.length < 2}  positive><i style={{margin:'auto',fontSize:"18px",color:"#ffffff"}} class="upload icon"></i><div style={{marginRight:"auto",fontSize:"16px"}}>Upload file</div></Btn>
      </form>
    </div>
  );
};

export default UploadFile;