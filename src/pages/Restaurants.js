import { Box, Button, Card, CardMedia, Grid, Paper, Stack, TextareaAutosize, TextField, Typography } from '@mui/material'
import '../styles/scss/restaurant.scss'

export default function Restaurants() {
    return (
        <Box>
            <Card sx={{ display: 'flex', background: 'transparent', opacity: '0.8' }}>
                <CardMedia
                    sx={{ marginLeft: '0', marginRight: '0' }}
                    component="img"
                    height="800"
                    image="/images/restaurant.jpg"
                    alt="Banner Image"
                />
            </Card>
            <Stack className='blockRoot' flexDirection='row' justifyContent='space-between' mt={4}>
                <Box className='contentRestaurent' width={1000} padding={15}>
                    <Typography variant='h5' color='#fff' fontSize={30}>About Thai Food</Typography>
                    <Typography className='dancingStyle' variant='body1' color='#fff' mb={3}>Thai cuisine is a fusion of rich and diverse flavors from various spices and fresh ingredients.</Typography>
                    <Typography variant='body1' color='#fff' textAlign='justify'>Our Thai food restaurant offers an authentic culinary journey through the vibrant flavors of Thailand. Nestled in a cozy ambiance, our restaurant invites you to indulge in the tantalizing aromas and bold tastes of traditional Thai dishes meticulously prepared by our skilled chefs. From fragrant curries to zesty stir-fries, each dish showcases the finest ingredients sourced locally and imported from Thailand, ensuring an unforgettable dining experience. Whether you're a seasoned enthusiast or new to Thai cuisine, our friendly staff is dedicated to providing exceptional service, guiding you through our menu to discover your perfect flavor profile. Join us for a culinary adventure that will transport your taste buds to the bustling streets of Bangkok or the serene shores of Phuket, right here at our Thai food haven.</Typography>
                </Box>
                <Box className='bookTable' width={700}>
                    <Paper elevation={3} style={{ width: '650px', borderRadius: '5px', overflow: 'hidden', backgroundColor: '#113640' }}>
                        <Typography variant='h5' color='#fff' textAlign='center'>Book Table Now</Typography>
                    </Paper>
                    <Box width={650} sx={{ backgroundColor: '#fff' }} mt={1} padding={5}>
                        <Stack spacing={1} mb={2}>
                            <label>Full Name: </label>
                            <TextField id="outlined-basic" variant="outlined" placeholder='Full Name *' required />
                        </Stack>
                        <Stack spacing={1} mb={2}>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <label>Phone: </label>
                                    <TextField fullWidth id="outlined-basic" type="text" variant="outlined" placeholder='Phone Number *' />
                                </Grid>
                                <Grid item xs={6}>
                                    <label>People: </label>
                                    <TextField fullWidth id="outlined-basic" variant="outlined" placeholder='How many people?' />
                                </Grid>
                            </Grid>
                        </Stack>
                        <Stack spacing={1} mb={2}>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <label>Date: </label>
                                    <TextField fullWidth id="outlined-basic" type="date" variant="outlined" />
                                </Grid>
                                <Grid item xs={6}>
                                    <label>Time</label>
                                    <TextField fullWidth id="outlined-basic" variant="outlined" type="time" />
                                </Grid>
                            </Grid>
                        </Stack>
                        <Stack spacing={1} mb={2}>
                            <label>Message:  </label>
                            <TextareaAutosize
                                aria-label="empty textarea"
                                style={{ width: '100%', minHeight: 100, borderRadius: '5px', padding: '10px', border: '1px solid #C4C4C4', fontSize: '15px' }}
                            />
                        </Stack>
                        <Button variant="contained" color="success" sx={{ fontWeight: '550' }}>
                            Send
                        </Button>
                    </Box>
                </Box>
            </Stack>

        </Box>
    )
}