import { useState } from 'react';
import { Card, CardMedia, Box, Container, Typography, Grid, CardContent, Modal, Button  } from '@mui/material';
import { useTranslation } from 'react-i18next';
import LanguageSelect from '../components/LanguageSelect/LanguageSelect.jsx'
import BoxMenuFood from '../components/BoxItem/BoxMenuFood.jsx';
import ModalMenuFood from '../components/Modal/ModalMenuFood.jsx';
import ContactInfoCard from '../components/CardOrder/Card.jsx';
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
            rate: {
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
                description2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
                someOneRate: "Big Cat",
                someOneRate2: "Small Cat"
            }
        },
        { 
            id: 1,
            name: 'pad-thai',
            description: 'description-menu-pd',
            price: 'price-pd',
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
            name: 'tom-yum',
            description: 'description-menu-ty',
            price: 'price-ty',
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
            name: 'green-curry',
            description: 'description-menu-gc',
            price: 'price-gc',
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
            name: 'massaman-curry',
            description: 'description-menu-mc',
            price: 'price-mc',
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
            name: 'mango-sticky-rice',
            description: 'description-menu-msr',
            price: 'price-msr',
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
            name: 'satay',
            description: 'description-menu-satay',
            price: 'price-satay',
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
            name: 'khao-pad',
            description: 'description-menu-kp',
            price: 'price-kp',
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
            name: 'pad-kra-pao',
            description: 'description-menu-pkp',
            price: 'price-pkp',
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
                                <BoxMenuFood dish={dish} openModal={openModal} t={t} />
                                <ModalMenuFood selectedBox={selectedBox} isModalOpen={isModalOpen} closeModal={closeModal} t={t}/>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
            
            <ContactInfoCard/>
        </Box>
    )
}