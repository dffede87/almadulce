import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import ItemCount from './ItemCount';

export default function Item({id, nombre, precio, imagen}) {

    function onAdd(cant) {
        if (cant > 0) {
          alert(cant);
        }
    }  

  return (
    <>
    <Card key={id} sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={imagen}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {nombre}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ${precio}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <ItemCount stock={10} initial={1} onAdd={onAdd} />
      </CardActions>
    </Card>
    </>
  )
}
