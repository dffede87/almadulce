import React from "react";
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';

export default function App() {
  return (
    <>
       <Button variant="contained" color="secondary" startIcon={<Icon>delete</Icon>}>
         Delete
       </Button>
       <Icon color="primary">room</Icon>
    </>
  );
}