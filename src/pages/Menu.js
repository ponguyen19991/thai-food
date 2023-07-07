import { useState } from 'react';
import { Card, CardMedia, Box, Container, Typography, Grid, CardContent, Modal, Button  } from '@mui/material';
import { useTranslation } from 'react-i18next';
import LanguageSelect from '../components/LanguageSelect/LanguageSelect.jsx'
import '../styles/scss/menu.scss'


export default function Menu() {
    const { t, i18n } = useTranslation();
    const [selectedBox, setSelectedBox] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
        
    const dishes = [
        { 
            id: 0,
            name: 'papaya-salad',
            description: 'description-menu-ps',
            price: 'price-ps',
            src: "/images/Menu/papaya-salad.jpg",
        },
        { 
            id: 1,
            name: 'pad-thai',
            description: 'description-menu-pd',
            price: 'price-pd',
            src: "/images/Menu/papaya-salad.jpg",

        },
        { 
            id: 2,
            name: 'tom-yum',
            description: 'description-menu-ty',
            price: 'price-ty',
            src: "/images/Menu/papaya-salad.jpg",

        },
        { 
            id: 3,
            name: 'green-curry',
            description: 'description-menu-gc',
            price: 'price-gc',
            src: "/images/Menu/papaya-salad.jpg",

        },
        { 
            id: 4,
            name: 'massaman-curry',
            description: 'description-menu-mc',
            price: 'price-mc',
            src: "/images/Menu/papaya-salad.jpg",

        },
        { 
            id: 5,
            name: 'mango-sticky-rice',
            description: 'description-menu-msr',
            price: 'price-msr',
            src: "/images/Menu/papaya-salad.jpg",

        },
        { 
            id: 6,
            name: 'satay',
            description: 'description-menu-satay',
            price: 'price-satay',
            src: "/images/Menu/papaya-salad.jpg",

        },
        { 
            id: 7,
            name: 'khao-pad',
            description: 'description-menu-kp',
            price: 'price-kp',
            src: "/images/Menu/papaya-salad.jpg",

        },
        { 
            id: 8,
            name: 'pad-kra-pao',
            description: 'description-menu-pkp',
            price: 'price-pkp',
            src: "/images/Menu/papaya-salad.jpg",

        },
    ];


    const openModal = (box) => {
        setSelectedBox(box);
        setIsModalOpen(true);
    };
    
    const closeModal = () => {
        setIsModalOpen(false);
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
                <Typography variant="h2" sx={{ 
                    color: '#ffffff', fontWeight: '500', textAlign: 'center' 
                    }}>Thai Food Menu</Typography>
                
                <Box sx={{ flexGrow: 1 , marginTop: '100px'}}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 2, md: 12 }}>
                        {dishes.map((dish) => (
                            <Grid item xs={6} sm={4} md={4} key={dish.id}>
                                <Box
                                    sx={{
                                    bgcolor: '#fff',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    padding: '1rem',
                                    boxShadow: 'rgba(255, 255, 255, 0.15) 1.95px 1.95px 2.6px',
                                    borderRadius: '2px',
                                    userSelect: 'none',
                                    cursor: 'pointer',
                                    transition: 'transform 0.3s ease',
                                        '&:hover': {
                                        transform: 'scale(1.02)',
                                        },
                                    }}
                                    onClick={() => openModal(dish)}
                                >
                                    <img src={dish.src} alt={dish.name} style={{ width: '100%', height: 'auto' }} />
                                    <Typography variant="h5" component="h2" sx={{ mt: 1, fontWeight: '550' }}>
                                        {t(dish.name)}
                                    </Typography>
                                    <Typography variant="body1" sx={{ mt: 1, fontStyle: 'italic', height: '80px', display: 'flex', alignItems: 'center' }}>
                                        {t(dish.description)}
                                    </Typography>
                                    <Typography variant="body2" sx={{ mt: 1, color: '#cf3835', fontWeight: '550' }}>
                                        {t(dish.price)}
                                    </Typography>

                                </Box>
                                <Modal
                                    open={isModalOpen}
                                    onClose={closeModal}
                                    sx={{opacity: '0.5 !important'}}
                                    >
                                    <Box 
                                        sx={{ 
                                            position: 'absolute',
                                            top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)',
                                            width: 400,
                                            backgroundColor: 'background.paper',
                                            border: '2px solid #000',
                                            boxShadow: 24,
                                            p: 4,
                                        }}
                                    >
                                            <Typography variant="h5" component="h2" sx={{ mt: 1, fontWeight: '550' }}>
                                            {t(selectedBox?.name)}
                                            </Typography>
                                            <Typography variant="body1" sx={{ mt: 1, fontStyle: 'italic', height: '80px', display: 'flex', alignItems: 'center' }}>
                                            {t(selectedBox?.description)}
                                            </Typography>
                                            <Typography variant="body2" sx={{ mt: 1, color: '#cf3835', fontWeight: '550' }}>
                                            {t(selectedBox?.price)}
                                            </Typography>
                                            <Button onClick={closeModal}>Close</Button>
                                    </Box>
                                </Modal>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
            <Card sx={{ display: 'flex', background: 'transparent', position: 'relative', marginTop: '80rem' }}>
                <CardMedia
                    sx={{ marginLeft: '0', marginRight: '0', opacity: '0.3' }}
                    component="img"
                    height="500"
                    image="/images/banner2.jpg"
                    alt="Banner Image"
                />
                <CardContent sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    {/* Nội dung của Card */}
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 2, md: 12 }}>
                        <Grid item xs={6} sm={4} md={4}>
                            <Box
                            sx={{
                                bgcolor: '#fff',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: '1rem',
                                boxShadow: 'rgba(255, 255, 255, 0.15) 1.95px 1.95px 2.6px',
                                borderRadius: '2px',
                                userSelect: 'none',
                                cursor: 'pointer',
                                transition: 'transform 0.3s ease',
                                '&:hover': {
                                transform: 'scale(1.02)',
                                },
                            }}
                            >
                            <Typography variant="h6" component="h2" sx={{ mt: 1, fontWeight: '550' }}>
                                FIND US
                            </Typography>
                            <Typography variant="body1" sx={{ mt: 1, fontStyle: 'italic', height: '100px', display: 'flex', alignItems: 'center' }}>
                                Long Binh Tan Ward, Bien Hoa City, Dong Nai            
                            </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6} sm={4} md={4}>
                            <Box
                            sx={{
                                bgcolor: '#fff',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: '1rem',
                                boxShadow: 'rgba(255, 255, 255, 0.15) 1.95px 1.95px 2.6px',
                                borderRadius: '2px',
                                userSelect: 'none',
                                cursor: 'pointer',
                                transition: 'transform 0.3s ease',
                                '&:hover': {
                                transform: 'scale(1.02)',
                                },
                            }}
                            >
                                <Typography variant="h5" component="h2" sx={{ mt: 1, fontWeight: '550' }}>
                                HOURS
                                </Typography>
                                <Box sx={{height: '115px'}}>
                                    <Typography variant="body1" sx={{ mt: 1, mt: 1, fontStyle: 'italic', textAlign: 'center', fontWeight: 'bold' }}>
                                        Monday - Saturday       
                                    </Typography>
                                    <Typography variant="body1" sx={{ mt: 1, fontStyle: 'italic', textAlign: 'center' }}>
                                        9AM - 7PM    
                                    </Typography>
                                    <Typography variant="body1" sx={{ mt: 1, mt: 1, fontStyle: 'italic', textAlign: 'center', fontWeight: 'bold' }}>
                                        Sunday       
                                    </Typography>
                                    <Typography variant="body1" sx={{ mt: 1, fontStyle: 'italic', textAlign: 'center'  }}>
                                        10AM - 6PM       
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={6} sm={4} md={4}>
                            <Box
                            sx={{
                                bgcolor: '#fff',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: '1rem',
                                boxShadow: 'rgba(255, 255, 255, 0.15) 1.95px 1.95px 2.6px',
                                borderRadius: '2px',
                                userSelect: 'none',
                                cursor: 'pointer',
                                transition: 'transform 0.3s ease',
                                '&:hover': {
                                transform: 'scale(1.02)',
                                },
                            }}
                            >
                            <Typography variant="h5" component="h2" sx={{ mt: 1, fontWeight: '550' }}>
                                Call Us
                            </Typography>
                            <Box sx={{height: '115px'}}>
                                <Typography variant="body1" sx={{ mt: 1, fontStyle: 'italic', display: 'flex', alignItems: 'center', textDecoration: 'underline', color: '#cf3835' }}>
                                    0123.456.789    
                                </Typography>
                                <Typography variant="body1" sx={{ mt: 1, fontStyle: 'italic', display: 'flex', alignItems: 'center', textDecoration: 'underline', color: '#cf3835' }}>
                                    0123.456.789    
                                </Typography>
                            </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Box>
    )
}