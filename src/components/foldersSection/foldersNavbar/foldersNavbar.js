import React from 'react'
import style from './foldersNavbar.module.scss'
import { Icon, PlusIcon, UploadIcon } from 'evergreen-ui'
import Button from '@material-ui/core/Button';
import RefreshIcon from '@material-ui/icons/Refresh';

<Icon icon={UploadIcon} size={12} />
const FoldersNavbar = () => {
    return (
        <div className={style.projectsnavbar}>
            <div>       <Button variant="outlined">
                <Icon icon={PlusIcon} size={25} />
                <span style={{ marginLeft: '5px' }}>ADD A FOLDER</span></Button>
            </div>
            <div>
                <Button variant="outlined"><Icon icon={UploadIcon} size={25} />
                    <span style={{ marginLeft: '5px' }}>UPLOAD A FILE</span></Button>
            </div>
            <div style={{ display: "flex" }}><Button variant="outlined"><RefreshIcon />REFRESH</Button></div>
        </div>
    )
}
export default FoldersNavbar
