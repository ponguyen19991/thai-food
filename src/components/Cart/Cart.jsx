import React, { useState, useEffect } from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import creditCardType from 'credit-card-type';
import { Box, Button, FormControl, Grid, Input, InputAdornment, InputLabel, Stack, TextField, Typography, Snackbar, Alert   } from '@mui/material';

import { FaTrashAlt, FaSearch  } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

import './Cart.scss'
// import img from 'images/Menu/padthai.png'

const Cart = (props) => {
    const [openAlert, setOpenAlert] = useState(false);
    const [openAlertError, setOpenAlertError] = useState(false);
    const { onClose, selectedValue, open } = props;
    const [cardType, setCardType] = useState(null);
    // const [activeButton, setActiveButton] = useState('visa-master');
    const [activeButton, setActiveButton] = useState(null);

    const shippingCost = 10;

    const internetBanking = [
        {
            name: "Vietinbank",
            src: "images/payment/onlineBanking/vietinbank.png"
        },
        {
            name: "Vietcombank",
            src: "images/payment/onlineBanking/vietcombank.png"
        },
        {
            name: "TP Bank",
            src: "images/payment/onlineBanking/tpbank.png"
        },
        {
            name: "Techcombank",
            src: "images/payment/onlineBanking/techcombank.png"
        },
        {
            name: "SeA Bank",
            src: "images/payment/onlineBanking/seabank.png"
        },
        {
            name: "SCB",
            src: "images/payment/onlineBanking/scbbank.png"
        },
        {
            name: "MB Bank",
            src: "images/payment/onlineBanking/mbbank.png"
        },
        {
            name: "HD Bank",
            src: "images/payment/onlineBanking/hdbank.png"
        },
        {
            name: "BIDV",
            src: "images/payment/onlineBanking/BIDV.png"
        },
      
    ];
    
    
    const increaseQuantity = (index) => {
        const updatedCartItems = [...props.cartItems];
        if (updatedCartItems[index].quantity < 5) {
            updatedCartItems[index].quantity += 1;
            updatedCartItems[index].totalPrice = updatedCartItems[index].price * updatedCartItems[index].quantity;
            props.setCartItems(updatedCartItems);
        } else {
            handleClickAlertError()
        }
    };
    
    
    const decreaseQuantity = (index) => {
        const updatedCartItems = [...props.cartItems];
        if (updatedCartItems[index].quantity > 1) {
            updatedCartItems[index].quantity -= 1;
            updatedCartItems[index].totalPrice = updatedCartItems[index].price * updatedCartItems[index].quantity;
            props.setCartItems(updatedCartItems);
        }
    };
    
    const calculateTotalPrice = () => {
        return props.cartItems.reduce((total, item) => {
            return total + (item.price * item.quantity);
        }, 0);
    };

    const calculateSubTotal = () => {
        return props.cartItems.reduce((total, item) => {
            return total + item.totalPrice; 
        }, 0);
    };

    const calculateShippingCost = () => {
        return props.cartItems.length === 0 ? 0 : shippingCost;
    };
    
    const calculateTotalAmount = () => {
        return calculateSubTotal() + calculateShippingCost();
    };


    const handleDeleteItem = (index) => {
        const newCartItems = [...props.cartItems];
        newCartItems.splice(index, 1);
        props.setCartItems(newCartItems);
        const newCount = newCartItems.reduce((total, item) => total + item.quantity, 0); 
        props.updateCartCount(newCount); 
    };
    
    
    

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = (value) => {
        onClose(value);
    };

    useEffect(() => {
        setActiveButton('visa-master');
      }, []);

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
      };
    

    const handleCardNumberChange = (event) => {
        const cardNumber = event.target.value;
        const types = creditCardType(cardNumber);
        if (types.length) {
            setCardType(determineCardType(cardNumber));
        } else {
            setCardType(null);
        }
    };
    
    const determineCardType = (cardNumber) => {
        if (cardNumber.startsWith('4')) {
            return 'visa';
        } else if (cardNumber.startsWith('5')) {
            return 'master';
        }
        return null;
    };
    
    const handleClickAlert = () => {
        setOpenAlert(true); 
    };

    const handleCloseAlert = () => {
        setOpenAlert(false); 
    };

    const handleClickAlertError = () => {
        setOpenAlertError(true); 
    };

    const handleCloseAlertError = () => {
        setOpenAlertError(false); 
    };


  return (
    <Dialog onClose={handleClose} open={open} maxWidth="lg">
        <List sx={{ maxWidth: 'none', padding: '15px' }}>
            <Stack direction="row" spacing={2}>

                {/**Right Side */}
                <ListItem sx={{ width: '550px'}}>
                    <Stack direction="column">
                        <Box sx={{ background: '#F5F6F8', borderTopLeftRadius: '10px', borderTopRightRadius: '10px', height: '465px' }}>
                            <Typography sx={{ padding: '15px' }} variant="h5" component="h4">Your shopping cart</Typography>
                            {props.cartItems.length === 0 ? (
                                <img src="images/empty-cart.png" alt="empty" style={{ opacity: '0.7' }}/>
                            ) : (
                                <Stack direction="column" spacing={2} sx={{ maxHeight: '400px', overflowY: 'auto' }}>
                                    {props.cartItems.map((item, index) => (
                                        <Box key={index} sx={{ borderBottom: '1px solid #ccc' }}>
                                            <Stack direction="row" alignItems="center" spacing={1}>
                                                <img src={item.src} alt="img food" width={100} />
                                                <Box>
                                                    <Typography variant="body1">{item.name}</Typography>
                                                    <Typography variant='body2' sx={{ fontWeight: '550', color: '#989898', width: '90px' }}>
                                                        ${item.totalPrice.toFixed(2)}
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
                            )}
                        </Box>
                        <Box sx={{ backgroundColor: '#747B8D', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px' }}>
                            <Typography sx={{ padding: '15px', color: '#fff' }} variant="h5" component="h4">Payment Method</Typography>
                            <Box sx={{ padding: "10px 40px" }}>
                                <Button
                                    onClick={() => handleButtonClick('online')}
                                    sx={{
                                        backgroundColor: activeButton === 'online' ? 'rgba(255, 255, 255, 0.4)' : '#fff',
                                        marginRight: '10px',
                                        width: '100px',
                                        height: '60px',
                                    }}
                                >
                                    <img src="images/payment/online-logo.png" alt="internet-banking" width={50} />
                                </Button>
                                <Button
                                    onClick={() => handleButtonClick('visa-master')}
                                    sx={{
                                        backgroundColor: activeButton === 'visa-master' ? 'rgba(255, 255, 255, 0.4)' : '#fff',
                                        marginRight: '10px',
                                        width: '100px',
                                        height: '60px',
                                    }}
                                >
                                    <img src="images/payment/visa-master.png" alt="visa-master" width={50} />
                                </Button>
                                <Button
                                    onClick={() => handleButtonClick('paypal')}
                                    sx={{
                                        backgroundColor: activeButton === 'paypal' ? 'rgba(255, 255, 255, 0.4)' : '#fff',
                                        marginRight: '10px',
                                        width: '100px',
                                        height: '60px',
                                    }}
                                >
                                    <img src="images/payment/paypal-logo.png" alt="paypal" width={70} />
                                </Button>
                                <Button
                                    onClick={() => handleButtonClick('momo')}
                                    sx={{
                                        backgroundColor: activeButton === 'momo' ? 'rgba(255, 255, 255, 0.4)' : '#fff',
                                        width: '100px',
                                        height: '60px',
                                    }}
                                >
                                    <img src="images/payment/momo-logo.png" alt="momo" width={50} />
                                </Button>
                            </Box>
                        </Box>
                    </Stack>
                </ListItem>

                {/**Left Side */}
                <ListItem sx={{ width: '550px', alignItems: "normal", display: 'block' }}>
                    <Stack direction="row" justifyContent="space-between">
                        <Typography variant="h5" component="h4" mb={2}>Payment details</Typography>
                        <IoClose onClick={handleListItemClick} style={{ fontSize: '30px', opacity: '0.7', cursor: "pointer" }}/>
                    </Stack>
                    {activeButton === 'visa-master' && (
                        <Box className="visa-masterCard">
                            <Stack direction="column" spacing={2}>
                                <FormControl className='detailsPayment' variant="standard" sx={{ width: '100%' }}>
                                    <Stack spacing={1} mb={2}>
                                        <label>Card Holder Name</label>
                                        <TextField id="outlined-basic" variant="outlined" placeholder='Fullname....' required/>
                                    </Stack>
                                    <Stack spacing={1} mb={1}>
                                        <label>Credit Card Number</label>
                                        <TextField
                                            id="outlined-basic"
                                            variant="outlined"
                                            placeholder="X X X X  X X X X  X X X X  X X X X"
                                            InputProps={{
                                                style: { paddingRight: 0 },
                                                endAdornment: (
                                                <InputAdornment position="end">
                                                    <Typography
                                                    variant='body1'
                                                    sx={{
                                                        width: '60px',
                                                        height: '35px',
                                                        backgroundColor: 'transparent',
                                                        color: '#333',
                                                        fontWeight: '550',
                                                        borderLeft: '1px solid #D8D9DB',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                    }}>
                                                        {cardType === 'visa' && <img src="images/payment/visa-logo.png" alt="visa" width={55} />}
                                                        {cardType === 'master' && <img src="images/payment/Mastercard-logo.png" alt="master" width={45} />}
                                                    </Typography>
                                                </InputAdornment>
                                                )
                                            }}
                                            onChange={handleCardNumberChange}
                                        />
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
                                        <Typography sx={{ color: '#7D7E83' }} variant="body1">${calculateSubTotal().toFixed(2)}</Typography>
                                    </Stack>
                                    <Stack direction='row' justifyContent="space-between">
                                        <Typography sx={{ color: '#7D7E83' }} variant="body1">Shipping Cost</Typography>
                                        <Typography sx={{ color: '#7D7E83' }} variant="body1">${calculateShippingCost().toFixed(2)}</Typography>
                                    </Stack>
                                    <Stack direction='row' justifyContent="space-between">
                                        <Typography sx={{ color: '#7D7E83' }} variant="body1">Discount</Typography>
                                        <Typography sx={{ color: '#7D7E83' }} variant="body1">$ 0</Typography>
                                    </Stack>
                                </Box>
                                <Stack direction='row' justifyContent="space-between">
                                    <Typography sx={{ color: '#7D7E83' }} variant="body1">Total amount</Typography>
                                    <Typography sx={{ color: '#7D7E83' }} variant="body1">$ {calculateTotalAmount().toFixed(2)}</Typography>
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
                        </Box>
                    )}
                    {activeButton === 'online' && (
                        <Box className="online-banking">
                            <TextField
                                className='search-Banking'
                                fullWidth
                                id="outlined-basic"
                                variant="outlined"
                                InputProps={{
                                    startAdornment: (
                                    <InputAdornment position="start">
                                        <FaSearch />
                                    </InputAdornment>
                                    ),
                                }}
                                />
                            <Box className="listBanking" display="flex" flexWrap="wrap" justifyContent="space-between" mt={4}>
                            {internetBanking.map((bank, index) => (
                                <Box className="bank" onClick={handleClickAlert} key={index} sx={{ width: '150px', height: '50px', marginBottom: '20px' }}>
                                    <Stack justifyContent="center" alignItems="center" sx={{ height: '100%' }}>
                                        <img src={bank.src} alt={bank.name} width={100} />
                                    </Stack>
                                </Box>
                            ))}
                                <Snackbar open={openAlert} autoHideDuration={3000} onClose={handleCloseAlert}>
                                    <Alert
                                        onClose={handleCloseAlert}
                                        severity="success"
                                        variant="filled"
                                        sx={{ width: '100%' }}
                                    >
                                        This feature not ready yet! Try it later ^.^
                                    </Alert>
                                </Snackbar>
                                
                            </Box>
                        </Box>
                    )}
                    {activeButton === 'momo' && (
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '500px', opacity: '0.5' }}>
                            <Typography variant="h5" component="h4" mb={2}>This feature is under development ...</Typography>
                            {/* <Box className="QRMomo">

                            </Box> */}
                        </Box>
                    )}
                    {activeButton === 'paypal' && (
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '500px', opacity: '0.5' }}>
                            <Typography variant="h5" component="h4" mb={2}>This feature is under development ...</Typography>
                            {/* <Box className="QRMomo">

                            </Box> */}
                        </Box>
                    )}
                </ListItem>

            </Stack>
        </List>
        <Snackbar open={openAlertError} autoHideDuration={3000} onClose={handleCloseAlertError}>
            <Alert
                onClose={handleCloseAlertError}
                severity="error"
                variant="filled"
                sx={{ width: '100%' }}
            >
                Maximum quantity reached
            </Alert>
        </Snackbar>
  </Dialog>
  )
}

export default Cart
