import React from "react";
import Icon from '@mui/material/Icon';

export default function CartWidget({ cant }) {
  return (
    <>
       <Icon>shopping_cart</Icon>{cant}
    </>
  );
}