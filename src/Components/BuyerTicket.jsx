import React, { useContext, useState } from "react"
import { styled } from '@mui/material/styles'
import { CartContext } from './CartContext'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import FormHelperText from '@mui/material/FormHelperText'
import Paper from '@mui/material/Paper'
import { Button, FilledInput } from "@mui/material"
import { addDoc, collection, getFirestore } from "firebase/firestore"

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function BuyerTicket() {

    const { cart, total, pedido } = useContext(CartContext)

    const [nombre, setNombre] = useState('')
    const [apellidos, setApellidos] = useState('')
    const [tel, setTel] = useState('')
    const [email, setEmail] = useState('')
    const [orderId, setOrderId] = useState('')

    const sendOrder = () => {
        const showDate = new Date()
        const currentMonth = showDate.getMonth() + 1
        const todaysDate = showDate.getDate() + '/' + currentMonth + '/' + showDate.getFullYear()

        const order = {
            buyer: { name: nombre, lastName: apellidos, phone: tel, email: email },
            items: pedido,
            date: todaysDate,
            total: total
        }
        const db = getFirestore()

        const ordersCollection = collection(db, "ordenes")

        addDoc(ordersCollection, order).then(({ id }) => setOrderId(id))
    }

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={6} md={8}>
                        <h2>Tus datos</h2>
                        <Item sx={{ marginTop: 2, marginBottom: 2, paddingRight: 3 }}>
                            <div>
                                <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                                    <InputLabel htmlFor="name">Nombre</InputLabel>
                                    <FilledInput id="name" onChange={ev => setNombre(ev.target.value)} />
                                </FormControl>
                            </div>
                            <div>
                                <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                                    <InputLabel htmlFor="lastName">Apellidos</InputLabel>
                                    <FilledInput id="lastName" onChange={ev => setApellidos(ev.target.value)} />
                                </FormControl>
                            </div>
                            <div>
                                <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                                    <InputLabel htmlFor="phone">Teléfono / Móvil</InputLabel>
                                    <FilledInput id="phone" aria-describedby="phone-helper" onChange={ev => setTel(ev.target.value)} />
                                    <FormHelperText id="phone-helper">Nunca compartiremos tu teléfono.</FormHelperText>
                                </FormControl>
                            </div>
                            <div>
                                <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                                    <InputLabel htmlFor="email">Email</InputLabel>
                                    <FilledInput id="email" aria-describedby="email-helper" onChange={ev => setEmail(ev.target.value)} />
                                    <FormHelperText id="email-helper">Nunca compartiremos tu Email.</FormHelperText>
                                </FormControl>
                            </div>
                        </Item>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <h2>Tu pedido</h2>
                        {
                            cart.length !== 0 &&
                            <Item sx={{ marginTop: 2, marginBottom: 2 }}>
                                {cart.map(prod => (
                                    <p><strong>{prod.title}</strong> x {prod.numero} u. ${prod.subtotal}</p>
                                ))}
                                <h3>Total: $ {total}</h3>
                                <Button variant="contained" color="primary" onClick={sendOrder}>
                                    Finalizar compra
                                </Button>
                            </Item>
                        }
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}