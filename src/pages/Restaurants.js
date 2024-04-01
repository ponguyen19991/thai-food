import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Paper, Stack, TextareaAutosize, TextField, Typography } from '@mui/material'
import '../styles/scss/restaurant.scss'

export default function Restaurants() {
    return (
        <Box>
            <Card sx={{ display: 'flex', background: 'transparent', position: 'relative' }}>
                <CardMedia
                    sx={{ marginLeft: '0', marginRight: '0', opacity: '0.5' }}
                    component="img"
                    height="800"
                    image="/images/restaurant/restaurant2.jpg"
                    alt="Banner Image"
                />
                <Box sx={{ position: 'absolute', top: '50%', left: '40%', transform: 'translate(-74%, -50%)', backgroundColor: 'rgba(0,0,0,0.5)', boxSizing: 'border-box', height: '100%', paddingTop: '150px' }}>
                    <CardContent>
                        <Typography className='contentBanner' variant='h2' width={500} color="#fff">
                            Feel the Authentic & Original Taste
                        </Typography>
                    </CardContent>
                    <CardActions >
                        <Button sx={{ border: '1px solid #fff', color: '#fff', fontWeight: '550', borderRadius: '50px', fontSize: '15px' }} >See Menu</Button>
                        <Button sx={{ backgroundColor: '#CF3835', color: '#fff', fontWeight: '550', borderRadius: '50px', fontSize: '15px', width: '150px', '&:hover': { backgroundColor: 'rgba(207, 56, 53, 0.7)' } }}>Book Table</Button>
                    </CardActions>
                </Box>
            </Card>
            <Container maxWidth="lg">
                <Box className="firstContent" mt={2} mb={2}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Typography variant="body2" color="#fff" width={500}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        </Typography>
                        <img src='images/pepper.png' width={200} />
                    </Stack>
                </Box>

            </Container>
        </Box>
    )
}