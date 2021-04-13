import React from "react"
import { SiMicrosoftexcel } from "react-icons/si";
import style from "./foldersRight.module.scss";
import download from "downloadjs";
import {  Card, Image,Icon,Label } from 'semantic-ui-react'
import Button from '@material-ui/core/Button';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,withRouter
  } from "react-router-dom";
  import Axios from 'axios'
const FoldersRight=(props)=>{

    let { fileId } = useParams();

const downloadFile =  () => {
    Axios({
        method: "get",
        url: `http://localhost:1212/api/file/download/${fileId}`,
        responseType: "blob",
    }).then( (res) =>{
        console.log(res);
        download(res.data,fileId);
    });
};

    return(
        <div className={style.foldersRight}>
    <Button variant="outlined">Download</Button>
        </div>
    )
}
export default withRouter(FoldersRight) 