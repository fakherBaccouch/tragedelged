import React from "react"
import { SiMicrosoftexcel } from "react-icons/si";
import style from "./foldersRight.module.scss";
import download from "downloadjs";
import { Button, Card, Image,Icon,Label } from 'semantic-ui-react'
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
   <Card>
    <Card.Content>
      <Card.Header>            {fileId}
</Card.Header>
      <Card.Meta>
        <span className='date'>{fileId}</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
    <Button as='div' labelPosition='right'>
    <Button color='green' onClick={downloadFile}>
        <Icon name='download' />
        download
      </Button>
      <Label as='a' basic color='blue' pointing='left'>
        2,048
      </Label>
      </Button>
    </Card.Content>
  </Card>
        </div>
    )
}
export default withRouter(FoldersRight) 