import React, { useState } from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { Box, Button, FormControl, Grid, Input, InputAdornment, InputLabel, Stack, TextField, Typography } from '@mui/material';

import { FaTrashAlt } from "react-icons/fa";

import './Cart.scss'
// import img from 'images/Menu/padthai.png'

const Cart = (props) => {
    const { onClose, selectedValue, open } = props;
    const [thaiFood, setThaiFood] = useState([
        { "foodName": "Food 1", "price": "$10", "src": "images/Menu/padthai.png", "quantity": 1, "initialPrice": 10 },
    { "foodName": "Food 2", "price": "$15", "src": "images/Menu/padthai.png", "quantity": 2, "initialPrice": 15 },
    { "foodName": "Food 2", "price": "$15", "src": "images/Menu/padthai.png", "quantity": 2, "initialPrice": 15 },
    { "foodName": "Food 2", "price": "$15", "src": "images/Menu/padthai.png", "quantity": 2, "initialPrice": 15 },
    ]);
    
    const decreaseQuantity = (index) => {
        if (thaiFood[index].quantity > 1) {
            const newThaiFood = [...thaiFood];
            newThaiFood[index].quantity -= 1;
            newThaiFood[index].totalPrice = calculateTotalPrice(newThaiFood[index]);
            setThaiFood(newThaiFood);
        }
    };
    
    const increaseQuantity = (index) => {
        const newThaiFood = [...thaiFood];
        newThaiFood[index].quantity += 1;
        newThaiFood[index].totalPrice = calculateTotalPrice(newThaiFood[index]);
        setThaiFood(newThaiFood);
    };
    
    const calculateTotalPrice = (item) => {
        const price = parseFloat(item.initialPrice);
        return '$' + (price * item.quantity).toFixed(2);
    };
    
    

    const handleDeleteItem = (index) => {
        const newThaiFood = [...thaiFood];
        newThaiFood.splice(index, 1);
        setThaiFood(newThaiFood);
    };
    

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = (value) => {
        onClose(value);
    };
  return (
    <Dialog onClose={handleClose} open={open} maxWidth="lg">
        <List sx={{ maxWidth: 'none', padding: '15px' }}>
            <Stack direction="row" spacing={2}>

                {/**Right Side */}
                <ListItem sx={{ width: '550px'}}>
                    <Stack direction="column">
                        <Box sx={{ background: '#F5F6F8', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}>
                            <Typography sx={{ padding: '15px' }} variant="h5" component="h4">Your shopping cart</Typography>
                            <Stack direction="column" spacing={2} sx={{ maxHeight: '400px', overflowY: 'auto' }}>
                                {thaiFood.map((item, index) => (
                                    <Box key={index} sx={{ borderBottom: '1px solid #ccc' }}>
                                        <Stack direction="row" alignItems="center" spacing={1}>
                                            <img src={item.src} alt="img food" width={100} />
                                            <Box>
                                                <Typography variant="body1">{item.foodName}</Typography>
                                                <Typography variant='body2' sx={{ fontWeight: '550', color: '#989898', width: '90px' }}>
                                                    {item.totalPrice || calculateTotalPrice(item)}
                                                </Typography>
                                                <Stack direction="row" justifyContent="space-between" spacing={21}>
                                                    <Box>
                                                        <Stack direction="row" alignItems="center" spacing={2}>
                                                            <Typography variant='body2' sx={{ fontWeight: '550', color: '#989898', width: '85px' }}>Quantity: {item.quantity}</Typography>
                                                            <Box sx={{ marginBottom: '5px !important' }}>
                                                                <Button onClick={() => decreaseQuantity(index)} sx={{ minWidth: '25px', height: '25px', border: '1px solid #989898', color: '#989898', marginRight: '10px' }}>-</Button>
                                                                <Button onClick={() => increaseQuantity(index)} sx={{ minWidth: '25px', height: '25px', border: '1px solid #989898', color: '#989898' }}>+</Button>
                                                            </Box>
                                                        </Stack>
                                                    </Box>
                                                    <Button onClick={() => handleDeleteItem(index)} sx={{ minWidth: '25px', color: '#989898', marginRight: '10px !important' }}><FaTrashAlt /></Button>
                                                </Stack>
                                            </Box>
                                        </Stack>
                                    </Box>
                                ))}
                            </Stack>
                        </Box>
                        <Box sx={{ backgroundColor: '#747B8D', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px' }}>
                            <Typography sx={{ padding: '15px', color: '#fff' }} variant="h5" component="h4">Payment Method</Typography>
                            <Box sx={{ padding: "10px 40px" }}>
                                <Button  sx={{
                                                backgroundColor: '#fff',
                                                marginRight: '10px',
                                                width: '100px',
                                                height: "60px",
                                                '&:hover': { 
                                                    backgroundColor: '#fff',
                                                },
                                            }}>
                                    <img src="images/payment/online-logo.png" alt="momo" width={50} />
                                </Button>
                                <Button sx={{
                                                backgroundColor: '#fff',
                                                marginRight: '10px',
                                                width: '100px',
                                                height: "60px",
                                                '&:hover': { 
                                                    backgroundColor: '#fff',
                                                },
                                            }}>
                                    <img src="images/payment/visa-master.png" alt="momo" width={50} />
                                </Button>
                                <Button sx={{
                                                backgroundColor: '#fff',
                                                marginRight: '10px',
                                                width: '100px',
                                                height: "60px",
                                                '&:hover': { 
                                                    backgroundColor: '#fff',
                                                },
                                            }}>
                                    <img src="images/payment/paypal-logo.png" alt="momo" width={70} />
                                </Button>
                                <Button sx={{
                                                backgroundColor: '#fff',
                                                width: '100px',
                                                height: "60px",
                                                '&:hover': { 
                                                    backgroundColor: '#fff',
                                                },
                                            }}>
                                    <img src="images/payment/momo-logo.png" alt="momo" width={50} />
                                </Button>
                            </Box>
                        </Box>
                    </Stack>
                </ListItem>

                {/**Left Side */}
                <ListItem sx={{ width: '550px', alignItems: "normal", display: 'block' }}>
                    <Stack direction="column" spacing={2}>
                        <Typography variant="h5" component="h4">Payment details</Typography>
                        <FormControl className='detailsPayment' variant="standard" sx={{ width: '100%' }}>
                            <Stack spacing={1} mb={2}>
                                <label>Card Holder Name</label>
                                <TextField id="outlined-basic" variant="outlined" placeholder='Fullname....'/>
                            </Stack>
                            <Stack spacing={1} mb={1}>
                                <label>Credit Card Number</label>
                                <TextField id="outlined-basic" variant="outlined" placeholder='X X X X  X X X X  X X X X  X X X X'/>
                            </Stack>
                            <Stack spacing={1} mb={2}>
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <label>Expiry date</label>
                                        <TextField fullWidth id="outlined-basic" type="date" variant="outlined" placeholder='DD/MM/YY'/>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <label>CVV</label>
                                        <TextField fullWidth id="outlined-basic" variant="outlined" placeholder='X X X'/>
                                    </Grid>
                                </Grid>
                            </Stack>
                            <Stack spacing={1} mb={2}>
                                <label>Promo</label>
                                <TextField
                                    id="outlined-basic"
                                    variant="outlined"
                                    placeholder="Promocode"
                                    InputProps={{
                                        style: { paddingRight: 0 },
                                        endAdornment: (
                                        <InputAdornment position="end">
                                            <Button variant="contained" sx={{ 
                                                    width: '65px',
                                                    height: '35px',
                                                    backgroundColor: 'transparent',
                                                    color: '#333',
                                                    fontWeight: '550',
                                                    boxShadow: 'none',
                                                    borderLeft: '1px solid #D8D9DB',
                                                    '&:hover': {
                                                        backgroundColor: 'rgba(0, 0, 0, 0.3)',
                                                    }, }} 
                                                    onClick={() => {  }}>
                                                Apply
                                            </Button>
                                        </InputAdornment>
                                        )
                                    }}
                                />
                            </Stack>
                        </FormControl>
                    </Stack>

                    <Box mt={3}>
                        <Box sx={{ borderBottom: '1px solid #E7E6EB' }}>
                            <Stack direction='row' justifyContent="space-between">
                                <Typography sx={{ color: '#7D7E83' }} variant="body1">Subtotal</Typography>
                                <Typography sx={{ color: '#7D7E83' }} variant="body1">$ 500</Typography>
                            </Stack>
                            <Stack direction='row' justifyContent="space-between">
                                <Typography sx={{ color: '#7D7E83' }} variant="body1">Shipping Cost</Typography>
                                <Typography sx={{ color: '#7D7E83' }} variant="body1">$ 10</Typography>
                            </Stack>
                            <Stack direction='row' justifyContent="space-between">
                                <Typography sx={{ color: '#7D7E83' }} variant="body1">Discount</Typography>
                                <Typography sx={{ color: '#7D7E83' }} variant="body1">$ 0</Typography>
                            </Stack>
                        </Box>
                        <Stack direction='row' justifyContent="space-between">
                            <Typography sx={{ color: '#7D7E83' }} variant="p">Total amount</Typography>
                            <Typography sx={{ color: '#7D7E83' }} variant="p">$ 500</Typography>
                        </Stack>
                    </Box>

                    <Stack spacing={1} mt={1}>
                        <Button
                            sx={{
                                height: '50px',
                                backgroundColor: '#DABB2D',
                                boxShadow: 'none',
                                fontWeight: '550',
                                '&:hover': {
                                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                                },
                            }}
                            variant="contained"
                            >
                            Make Payment
                        </Button>

                        <Button
                            onClick={handleListItemClick}
                            sx={{
                                height: '50px',
                                backgroundColor: '#EDECE8',
                                color: '#333',
                                boxShadow: 'none',
                                fontWeight: '550',
                                '&:hover': {
                                    backgroundColor: 'rgba(0, 0, 0, 0.3)', 
                                },
                            }}
                            variant="contained"
                            >
                            Continue Order
                        </Button>
                    </Stack>
                </ListItem>

            </Stack>
        </List>
  </Dialog>
  )
}

export default Cart
