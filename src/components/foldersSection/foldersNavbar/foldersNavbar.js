import React from 'react'
import style from './foldersNavbar.module.scss'
import { Icon, PlusIcon, UploadIcon } from 'evergreen-ui'
import Button from '@material-ui/core/Button';
import RefreshIcon from '@material-ui/icons/Refresh';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';
import { Button as BTN } from 'semantic-ui-react'
import { Input } from 'semantic-ui-react'

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize:"20px"
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      background: '2px solid #000',
      boxShadow: theme.shadows[50],
      padding: theme.spacing(2, 4, 3),

    },
  }));
const FoldersNavbar = () => {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(!open);
    };
  
  
    return (
        <div className={style.projectsnavbar}>
            <div>   
            <Button onClick={handleOpen}  style={{color:"#1BA260"}}  variant="outlined"><Icon icon={PlusIcon} size={25} />
                    <span style={{ marginLeft: '5px' }}>ADD A FOLDER</span></Button> 
            </div>
            <div>
                <Button  style={{color:"#3867d6"}}  variant="outlined"><Icon icon={UploadIcon} size={25} />
                    <span style={{ marginLeft: '5px' }}>UPLOAD A FILE</span></Button>
            </div>
            <div style={{ display: "flex" }}><Button  style={{color:"#fed330"}} variant="outlined"><RefreshIcon />REFRESH</Button></div>
            <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleOpen}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h3 id="transition-modal-title">New folder</h3>
            <Input  focus placeholder='Folder name...' />         <div style={{marginTop:'10px'}}>  <BTN size='normal' floated='right' content='ADD' positive />
           <BTN  onClick={handleOpen} floated='right'  size='normal' content='Cancel'  />
           </div>
          </div>
        </Fade>
      </Modal>
        </div>
    )
}

  
export default FoldersNavbar
