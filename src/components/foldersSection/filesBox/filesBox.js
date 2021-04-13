import React, { useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { ManuallyEnteredDataIcon, PropertiesIcon } from 'evergreen-ui';
import { GiArmoredBoomerang } from "react-icons/gi";
import {Link} from 'react-router-dom'
import   { FiMoreHorizontal } from "react-icons/fi";
import   { FaRegFilePdf } from "react-icons/fa";
import { Icon, PlusIcon, UploadIcon } from 'evergreen-ui'
import Button from '@material-ui/core/Button';
import style from './filesBox.module.scss'
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function FilesBox(props) {
  const classes = useStyles();
    useEffect(()=>console.log(props.files))
var myIcon = (ext)=>{
    var icon=null;
    switch(ext) {
        case 'pdf':
          return <FaRegFilePdf style={{fontSize:'40px'}}/>;
        default:
          return 'NO EXTENSION';
      }
}
  return (
      <div className={style.filesBox}>
           {props.files && props.files.length>0 && <h2>Files</h2>}
     {props.files && props.files.length>0 && <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
  
        <TableBody>
          {props.files && props.files.map((file) => (
            <StyledTableRow key={file.nom}>
              <StyledTableCell component="th" scope="row">
                {myIcon('pdf')}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {file.nom.split('.')[0]}
              </StyledTableCell>
              <StyledTableCell align="right">20</StyledTableCell>
              <StyledTableCell align="right">April 12,2021</StyledTableCell>
         <StyledTableCell align="right">     <Button variant="outlined">Download</Button></StyledTableCell>
         <StyledTableCell align="right">    <Link  to={`/folders/${props.RouteId}/${file._id}`}><FiMoreHorizontal style={{fontSize:'2rem'}} color='black'/></Link></StyledTableCell>

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>}
    </div>  );
}