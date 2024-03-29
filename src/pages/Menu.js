import { useState, useEffect } from 'react';
import { Card, CardMedia, Box, Container, Typography, Grid, CardContent, Modal, Button, Stack, Alert, Snackbar } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useSpring, animated } from '@react-spring/web'
import { FaTimes, FaBars, FaCartPlus } from "react-icons/fa";

import AOS from 'aos';
import 'aos/dist/aos.css';
import LanguageSelect from '../components/LanguageSelect/LanguageSelect.jsx'
import BoxMenuFood from '../components/BoxItem/BoxMenuFood.jsx';
import ModalMenuFood from '../components/Modal/ModalMenuFood.jsx';
import ContactInfoCard from '../components/CardOrder/Card.jsx';
import '../styles/scss/menu.scss'
import Cart from "../components/Cart/Cart";


export default function Menu() {
    const { t, i18n } = useTranslation();
    const [selectedBox, setSelectedBox] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const [openAlert, setOpenAlert] = useState(false);
    const [openAlertMaximum, setOpenAlertMaximum] = useState(false);


    const [cartCount, setCartCount] = useState(0);
    const [addedItems, setAddedItems] = useState([]);

    const handleClickAlert = () => {
        setOpenAlert(true);
    };

    const handleCloseAlert = () => {
        setOpenAlert(false);
    };

    const handleClickAlertMaximum = () => {
        setOpenAlertMaximum(true);
    };

    const handleCloseAlertMaximum = () => {
        setOpenAlertMaximum(false);
    };

    const handleAddToCart = (e, dish) => {
        e.stopPropagation();
        const existingItemIndex = cartItems.findIndex(item => item.name === dish.name);
        if (existingItemIndex !== -1 && addedItems.includes(dish.name)) {
            handleClickAlertMaximum()
        } else {
            if (existingItemIndex !== -1) {
                const updatedCartItems = [...cartItems];
                updatedCartItems[existingItemIndex].quantity += 1;
                updatedCartItems.forEach(item => {
                    item.totalPrice = item.price * item.quantity;
                });
                setCartItems(updatedCartItems);
                setAddedItems([...addedItems, dish.name]);
            } else {
                const newItem = { ...dish, quantity: 1, totalPrice: dish.price };
                setCartItems([...cartItems, newItem]);
                setAddedItems([...addedItems, dish.name]);
            }
            setCartCount(cartCount + 1);
        }
    };


    const updateCartCount = (newCount) => {
        setCartCount(newCount);
    };

    // useEffect(() => {
    //     AOS.init();
    // }, []);

    const dishes = [
        {
            id: 0,
            name: t('papaya-salad'),
            description: 'description-menu-ps',
            // price: t('price-ps'),
            price: 8.60,
            src: "/images/Menu/papaya-salad.jpg",
            rate: {
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
                description2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
                someOneRate: "Big Cat",
                someOneRate2: "Small Cat"
            }
        },
        {
            id: 1,
            name: t('pad-thai'),
            description: 'description-menu-pd',
            // price: t('price-ps'),
            price: 10.20,
            src: "/images/Menu/pad-thai.jpg",
            rate: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            rate: {
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
                description2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
                someOneRate: "Big Cat",
                someOneRate2: "Normal Cat"
            }
        },
        {
            id: 2,
            name: t('tom-yum'),
            description: 'description-menu-ty',
            // price: t('price-ps'),
            price: 5.30,
            src: "/images/Menu/tom-yum.jpg",
            rate: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            rate: {
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
                description2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
                someOneRate: "Big Cat",
                someOneRate2: "Normal Cat"
            }
        },
        {
            id: 3,
            name: t('green-curry'),
            description: 'description-menu-gc',
            // price: t('price-ps'),
            price: 6.60,
            src: "/images/Menu/green-curry.jpg",
            rate: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            rate: {
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
                description2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
                someOneRate: "Big Cat",
                someOneRate2: "Normal Cat"
            }
        },
        {
            id: 4,
            name: t('massaman-curry'),
            description: 'description-menu-mc',
            // price: t('price-ps'),
            price: 15.60,
            src: "/images/Menu/massaman-curry.jpg",
            rate: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            rate: {
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
                description2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
                someOneRate: "Big Cat",
                someOneRate2: "Normal Cat"
            }
        },
        {
            id: 5,
            name: t('mango-sticky-rice'),
            description: 'description-menu-msr',
            // price: t('price-ps'),
            price: 16.60,
            src: "/images/Menu/mango-sticky-rice.jpg",
            rate: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            rate: {
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
                description2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
                someOneRate: "Big Cat",
                someOneRate2: "Normal Cat"
            }
        },
        {
            id: 6,
            name: t('satay'),
            description: 'description-menu-satay',
            // price: t('price-ps'),
            price: 10.60,
            src: "/images/Menu/satay.jpg",
            rate: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            rate: {
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
                description2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
                someOneRate: "Big Cat",
                someOneRate2: "Normal Cat"
            }
        },
        {
            id: 7,
            name: t('khao-pad'),
            description: 'description-menu-kp',
            // price: t('price-ps'),
            price: 9.60,
            src: "/images/Menu/khao-pad.jpg",
            rate: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            rate: {
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
                description2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
                someOneRate: "Big Cat",
                someOneRate2: "Normal Cat"
            }
        },
        {
            id: 8,
            name: t('pad-kra-pao'),
            description: 'description-menu-pkp',
            // price: t('price-ps'),
            price: 2.60,
            src: "/images/Menu/pad-kra-pao.jpg",
            rate: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            rate: {
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
                description2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
                someOneRate: "Big Cat",
                someOneRate2: "Normal Cat"
            }
        },
    ];


    const openModal = (box) => {
        setSelectedBox(box);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const menuContent = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        reset: false,
        delay: 400,
    })

    const menuFood = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        reset: false,
        delay: 600,
    })

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
    };

    return (
        <Box sx={{ position: 'relative' }}>
            <Card sx={{ display: 'flex', background: 'transparent', opacity: '0.5' }}>
                <CardMedia
                    sx={{ marginLeft: '0', marginRight: '0' }}
                    component="img"
                    height="500"
                    image="/images/banner.jpg"
                    alt="Banner Image"
                />
            </Card>
            <Container maxWidth="lg" sx={{
                position: 'absolute',
                top: '190px',
                left: '0',
                right: '0'
            }}>
                <Stack direction="column" alignItems="center" justifyContent="center">
                    <Typography data-aos="fade-down" data-aos-duration="1000" variant="h2" sx={{
                        color: '#ffffff', fontWeight: '500', textAlign: 'center'
                    }}>Thai Food Menu</Typography>
                    <Button data-aos="fade-down" data-aos-duration="1000" onClick={handleClickOpen}
                        sx={{
                            color: 'white',
                            background: '#CF3835',
                            '&:hover': {
                                backgroundColor: 'rgba(207, 56, 53, 0.8)'
                            }
                        }}>
                        <FaCartPlus fontSize={25} />
                        <Typography variant='body1' ml={1} mr={1} fontWeight={550}>Cart</Typography>
                        <Typography variant='body1' fontWeight={550} sx={{ backgroundColor: 'white', width: '25px', borderRadius: '50%', color: '#CF3835' }}>{cartCount}</Typography>
                    </Button>
                </Stack>
                <Cart
                    open={open}
                    onClose={handleClose}
                    cartItems={cartItems}
                    setCartItems={setCartItems}
                    updateCartCount={updateCartCount}
                />
                <Box sx={{ flexGrow: 1, marginTop: '100px' }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 2, md: 12 }}>
                        {dishes.map((dish) => (
                            <Grid data-aos="fade-up" data-aos-once="true" data-aos-duration="1000" item xs={6} sm={4} md={4} key={dish.id}>
                                <BoxMenuFood dish={dish} openModal={openModal} t={t} handleAddToCart={handleAddToCart} handleClickAlert={handleClickAlert} />
                                <ModalMenuFood selectedBox={selectedBox} isModalOpen={isModalOpen} closeModal={closeModal} t={t} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>

            <ContactInfoCard />
            <Snackbar open={openAlert} autoHideDuration={3000} onClose={handleCloseAlert}>
                <Alert
                    onClose={handleCloseAlert}
                    severity="success"
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    Food added successfully
                </Alert>
            </Snackbar>
            <Snackbar open={openAlertMaximum} autoHideDuration={3000} onClose={handleCloseAlertMaximum}>
                <Alert
                    onClose={handleCloseAlertMaximum}
                    severity="error"
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    This food has been added!
                </Alert>
            </Snackbar>
        </Box >
    )
}