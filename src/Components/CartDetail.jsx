import React, { useContext } from 'react';
import { styled } from '@mui/material/styles';
import { CartContext } from './CartContext'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function CartDetail() {

    const { cart, removeFromCart, buyAll } = useContext(CartContext)

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={6} md={8}>
                        <h2>Carrito de compras</h2>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell></TableCell>
                                        <TableCell>Nombre</TableCell>
                                        <TableCell align="right">Precio</TableCell>
                                        <TableCell align="right">Cantidad</TableCell>
                                        <TableCell align="right">Subtotal</TableCell>
                                        <TableCell align="right"></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {cart.length > 0 && cart.map(prod => (
                                        <TableRow
                                            key={prod.nombre}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell>
                                                <Avatar
                                                    alt="Remy Sharp"
                                                    src={prod.imagen}
                                                    sx={{ width: 56, height: 56 }}
                                                    variant="rounded"
                                                />
                                            </TableCell>
                                            <TableCell component="th" scope="row">
                                                <Link to={`/item/${prod.id}`} style={{ textDecoration: 'none' }}>
                                                    <strong>{prod.nombre}</strong>
                                                </Link>
                                            </TableCell>
                                            <TableCell align="right">$ {prod.precio}</TableCell>
                                            <TableCell align="right">{prod.numero} u.</TableCell>
                                            <TableCell align="right">$ {prod.subtotal}</TableCell>
                                            <TableCell align="right">
                                                <Tooltip title="Eliminar del carrito">
                                                    <IconButton onClick={() => removeFromCart(prod.id)}>
                                                        <DeleteIcon />
                                                    </IconButton>
                                                </Tooltip>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <h2>Resumen del pedido</h2>
                        <Item sx={{ marginTop: 2, marginBottom: 2 }}>
                            <h3>Total: $ {cart.map(item => item.subtotal).reduce((prev, curr) => prev + curr, 0)}</h3>
                            <Button variant="contained" color="primary" onClick={buyAll}>
                                Comprar todo
                            </Button>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}