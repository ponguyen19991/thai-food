import { useState } from 'react';
import { useTranslation } from "react-i18next";
import { Box, Container, Typography, Grid, Button } from '@mui/material';
import '../styles/scss/today.scss'

export default function Today() {
    const { t } = useTranslation();
    const [selectedItem, setSelectedItem] = useState(1)
    const [selectedSale, setSelectedSale] = useState(1)
    const [selectedItemIndex, setSelectedItemIndex] = useState(null);

    const handleListItemClick = (index) => {
        setSelectedItem(index)
        setSelectedSale(index)
        setSelectedItemIndex(index);
    }


    const special = [
        {
            id: 1,
            listSpecial: 'Pad Thai 1',
            src: "/images/Menu/padthai.png",
            sale: '10 %'
        },
        {
            id: 2,
            listSpecial: 'Chicken Thai 1',
            src: "/images/Menu/chicken.png",
            sale: '20 %'
        },
        {
            id: 3,
            listSpecial: 'Soup Thai 1',
            src: "/images/Menu/padthai.png",
            sale: '30 %'
        },
        {
            id: 4,
            listSpecial: 'Sausage Thai 1',
            src: "/images/Menu/chicken.png",
            sale: '40 %'
        },
        {
            id: 5,
            listSpecial: 'Random Thai 1',
            src: "/images/Menu/padthai.png",
            sale: '50 %'
        },
    ]

    return (
        <Container maxWidth="md">
            <Box className="content-today">
                <Typography variant="h4">
                    {t("title-super-today-offer")}
                </Typography>
                <Typography variant="body">
                    {t("title-menu-today-offer")}
                </Typography>
            </Box>
            <Box className="main-today">
                <Grid className='highContent' container>
                    <Grid item xs={4}>
                        <Box className="content-main">
                            <Typography variant="h5">
                                SPECIAL MENU
                            </Typography>
                            <small>(Select any item below to view the discounted offer.)</small>
                            <ul>
                                {special.map((sales, index) => (
                                    <li
                                        key={index}
                                        onClick={() => handleListItemClick(index)}
                                        className={index === selectedItemIndex ? "selected" : ""}
                                    >
                                        {sales.listSpecial}
                                    </li>
                                ))}
                            </ul>
                        </Box>
                    </Grid>
                    <Grid item xs={8}>
                        <Box className="img-main">
                            {special.map((sales, index) => (
                                <>
                                    <img
                                        key={index}
                                        src={sales.src}
                                        alt={sales.listSpecial}
                                        width={550}
                                        height={550}
                                        style={{ display: index === selectedItem ? 'block' : 'none' }}
                                    />
                                    <div className='borderSale'>
                                        <span style={{ display: index === selectedSale ? 'block' : 'none' }}><strong>{sales.sale}</strong> OFF</span>
                                    </div>
                                </>
                            ))}
                        </Box>
                    </Grid>
                </Grid>
                <Button>ORDER NOW</Button>
            </Box>
        </Container>
    )
}