import React from "react";
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Contador from './Components/Contador.jsx';

export default function App() {
  return (
    <>
       <Button variant="contained" color="secondary" startIcon={<Icon>delete</Icon>}>
         Delete
       </Button>
       <Icon color="primary">delete</Icon>
       <IconButton aria-label="delete">
        <Icon color="primary">delete</Icon>
       </IconButton>
       <Typography variant="h2" color="primary" gutterBottom>
         Federico Martín Gigena
       </Typography>
       <Typography variant="body1" color="initial" align="center" gutterBottom>
         Lorem ipsum blablabalabla ablablaba ablablabalbala ablablablablaaaba ablababalba ablabalbalbala ablabalbalbalabalbala balbala ablabla abla
       </Typography>
       <Typography variant="body1" color="initial" align="center">
         Lorem ipsum blablabalabla ablablaba ablablabalbala ablablablablaaaba ablababalba ablabalbalbala ablabalbalbalabalbala balbala ablabla abla
       </Typography>
       <Contador /> 
    </>
  );
}