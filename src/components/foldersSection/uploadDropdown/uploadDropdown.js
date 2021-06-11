import { React, useEffect, useState, useContext } from "react";
import style from "./uploadDropdown.module.scss"
import Button from '@material-ui/core/Button';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import UploadFile from '../uploadFile/uploadFile'
import UplF from './uploadFile.png'
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import Axios from 'axios';
import { Input } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { Checkbox } from 'semantic-ui-react'
import Avatar from '@material-ui/core/Avatar';
import pdp from "./pdp.jpg"
import { UidContext } from "../../AppContext"


const UploadDropdown = () => {
    const uid = useContext(UidContext);
    console.log('uid upload', uid)




    const [drop, setDrop] = useState(false)
    const handleDropdown = () => {
        setDrop(!drop)
    }
    const [users, setUsers] = useState([]);
    const [checkedUsers, setCheckedUsers] = useState([uid]);
    const [checked, setChecked] = useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    useEffect(() => {
        Axios.get('http://localhost:1212/api/user/')
            .then(res => { setUsers(res.data.filter((user) => user._id !== uid)); console.log(users) });
    }, []);

    const checkUser = (id) => {
        if (checkedUsers.includes(id)) {

            const newUsers = checkedUsers.filter(u => { return u !== id })
            setCheckedUsers(newUsers)

        } else {
            setCheckedUsers(oldArray => [...oldArray, id]);

        }

    }
    return (
        <div>
            <div className={style.afDrop}>
                <Button onClick={handleDropdown} style={{
                    height: "50px", color: "#1BA260", width: '100%',
                    display: "flex", alignItems: "center", justifyContent: "space-between"
                }} variant="outlined">
                    <img src={UplF} style={{ height: "40px" }} />Upload a file
                    {drop ? <ExpandLessIcon /> : <KeyboardArrowDownIcon fontsize='large' />}
                </Button>

                <div style={{ height: drop ? "auto" : "0", overflow: 'hidden' }} id={style.dropdown}>
                    <div className={style.listWrapper}>

                        <ul style={{ padding: "0 !important" }} className={style.list}>

                            {
                                users.map(user =>
                                    <>
                                        <li className={style.listItem}>
                                            <div>
                                                <img src={`http://localhost:1212${user.picture}`} className={style.listItemImage} />
                                            </div>
                                            <div className={style.listItemContent}>
                                                <div className={style.un}>{user.username}<p>It departement</p></div>
                                                

                                            </div>
                                            <input style={{ color: "red" }} type="checkbox" onClick={() => checkUser(user._id)} />
                                        </li>

                                    </>

                                )
                            }
                        </ul>
                    </div>
                    <UploadFile userTab={checkedUsers} />

                </div>
            </div>
        </div>
    )
}
export default UploadDropdown
