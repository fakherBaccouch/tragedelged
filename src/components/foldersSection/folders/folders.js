import { React, useEffect, Component, useState } from "react";
import { Dimmer, Loader, Image } from 'semantic-ui-react'
import SidebarItem from '../sidebarItem/sidebarItem.js'
import style from './folders.module.scss'
import { Segment } from 'semantic-ui-react'
import Axios from 'axios'
import UploadDropdown from '../uploadDropdown/uploadDropdown'
import AddfolderDropdown from '../addfolderDropdown/addfolderDropdown'
import axios from "axios"
import folderPNG from './folder.png'
import ChooseFolder from '../emptyFolder/chooseFolder'
import {BrowserRouter as Router,Switch,Route,useParams} from "react-router-dom";
import FoldersBox from '../foldersBox/foldersBox'
import FilesBox from "../filesBox/filesBox"
import EmptyFolder from "../emptyFolder/emptyFolder"
import NewHardDisk from "../newHardDisk/newHardDisk"
const Folders = () => {
  const [items, setItems] = useState();
  useEffect(() => {
    Axios.get('http://localhost:1212/api/folder/')
      .then(res => { setItems(res.data.folderList); });
  }, []);
  const [hardDiskName, setHardDiskName] = useState('')
  const addHardDisk = () => {
    axios.post(`${process.env.REACT_APP_API_URL}api/folder`, { name: hardDiskName }).then(() => window.location.reload());
  }
  
  return (
    <>
      <div className={style.folders}>
        <Router>

          <div className={style.tree} >
            <NewHardDisk />
   
            {items && items.length ? <ul >
              {items && items.map((i) => (
                <SidebarItem item={i} key={i.id} />
              ))}
            </ul> :
              <Segment style={{ height: '100%' }}>
                <Dimmer active inverted>
                  <Loader size='big'>Loading</Loader>
                </Dimmer>

                <Image src='http://semantic-ui.com/images/wireframe/paragraph.png' />
              </Segment>}

          </div>
          <Switch>
            <div className={style.foldersContent} >
              <Route exact path="/folders">
                <ChooseFolder/>
              </Route>
              <Route exact path={`/folders/:id`}>
                <FoldersContent />
              </Route>
            </div>
          </Switch>
          <Switch>
            <Route exact path={`/folders/:id`}>
              <div className={style.foldersRight} >
                <AddfolderDropdown />
                <UploadDropdown />
              </div>
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  )
};
const FoldersContent = ({ match }) => {
  let { id } = useParams();
  const [subs, setSubs] = useState([])
  const [files, setFiles] = useState(null)

  useEffect(() => {

    Axios.get(`http://localhost:1212/api/folder/${id}`)
      .then(res => { setSubs(res.data.folderList); })

    Axios.get(`http://localhost:1212/api/file/${id}`)
      .then(res => { setFiles(res.data); })
     
    Axios.get(`http://localhost:1212/api/user/filenotifUpdate/${id}`)      

  }, [id]);
  
  return (
    <div className={style.foldersItems}>
      {subs?.length == 0 && files?.length == 0 && <EmptyFolder />}
      {subs?.length > 0 &&  <FoldersBox icon={folderPNG} subs={subs} />}
    {files?.length > 0 && <FilesBox RouteId={id} files={files} /> } 
    </div>
  )
}
export default Folders