import React from "react";
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { makeStyles } from "@mui/material";

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});

export default function App() {
  const classes = useStyles();
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
       <Button className={classes.root}>Hook</Button>
    </>
  );
}