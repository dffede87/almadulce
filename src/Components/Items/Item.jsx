import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function Item({id, nombre, precio, categoria, imagen}) { 

  return (
    <>
    <Card key={id} sx={{ maxWidth: 345, margin: 3 }}>
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
          <Typography gutterBottom variant="body2" color="text.primary">
            <strong>${precio}</strong>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            #{categoria}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/item/${id}`} style={{textDecoration: 'none'}}>
          <Button variant="contained" color="primary">
            Ver detalles
          </Button>
        </Link>
      </CardActions>
    </Card>
    </>
  )
}
