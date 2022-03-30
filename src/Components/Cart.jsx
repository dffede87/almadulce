import React from "react";
import Icon from '@mui/material/Icon';

export default function Cart({ cant }) {
  return (
    <>
       <Icon>shopping_cart</Icon>({cant})
    </>
  );
}