import React from "react"
import style from "./uploadDropdown.module.scss"
import Button from '@material-ui/core/Button';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import UploadFile from '../uploadFile/uploadFile'
import UplF from './uploadFile.png'
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const UploadDropdown=()=>{
    const [drop,setDrop]=React.useState(false)
    const handleDropdown=()=>{
        setDrop(!drop)
    }
    return (
        <div>
            <div className={style.afDrop}>
                <Button onClick={handleDropdown} style={{ height: "50px", color: "#1BA260", width: '100%',
                 display: "flex", alignItems: "center", justifyContent: "space-between" }} variant="outlined">
                    <img src={UplF} style={{ height: "40px" }} />Upload a file
                    {drop ? <ExpandLessIcon /> : <KeyboardArrowDownIcon fontsize='large' />}
                </Button>
                <div style={{ height: drop ? "auto" : "0", overflow: 'hidden' }} id={style.dropdown}>
                    <UploadFile />
                </div>
            </div>
        </div>
    )
}
export default UploadDropdown
