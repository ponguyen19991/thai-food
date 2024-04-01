import React, { useState } from 'react'
import { Box, Container, Typography, Card, CardActions, CardContent, Button, Rating, Grid, Stack } from '@mui/material'
import Masonry from '@mui/lab/Masonry';
import '../styles/scss/contact.scss'

export default function Reviews() {
    const [value, setValue] = useState(5);

    const reviewerReview = [
        {
            mainViewer: 'High Quality Food and Service',
            rating: 5,
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            viewer: 'Big Cat',
        },
        {
            mainViewer: "The Most Delicious Brunch I've ever had",
            rating: 5,
            content: 'When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
            viewer: 'Big Cat',
        },
        {
            mainViewer: 'What a Hospitality!!!!',
            rating: 5,
            content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
            viewer: 'Big Cat',
        },
        {
            mainViewer: 'High Quality Food and Service',
            rating: 4,
            content: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text",
            viewer: 'Big Cat',
        },
        {
            mainViewer: 'High Quality Food and Service',
            rating: 5,
            content: "A search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            viewer: 'Big Cat',
        },
        {
            mainViewer: 'Certainly the best breakfast in town',
            rating: 4,
            content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
            viewer: 'Big Cat',
        },
        {
            mainViewer: 'High Quality Food and Service',
            rating: 5,
            content: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
            viewer: 'Big Cat',
        },
        {
            mainViewer: 'It would be hard to forget',
            rating: 5,
            content: "Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32.",
            viewer: 'Big Cat',
        },
        {
            mainViewer: 'High Quality Food and Service',
            rating: 4,
            content: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,",
            viewer: 'Big Cat',
        },
    ]

    return (
        <Container maxWidth="lg">
            <Box>
                <Box className='contentReviews'>
                    <Typography variant='h3' color="#FCDDA5" mb={2}>Reviews</Typography>
                    <Typography variant='body1' color="#fff" textAlign="justify" width={500}>We invite you to explore the diverse and vibrant world of Thai cuisine with us, where every meal is an adventure of discovery into the flavors and culture of Thailand. We look forward to welcoming you!</Typography>
                </Box>

                <Box className='reviewer' mt={6}>
                    <Masonry columns={3} spacing={2}>
                        {reviewerReview.map((reviews, index) => (
                            <Card key={index} sx={{ maxWidth: 365, backgroundColor: '#333333', borderRadius: '12px', boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px' }}>
                                <CardContent sx={{ color: '#D3D0D3' }}>
                                    <Typography gutterBottom variant="h7" component="div" fontWeight={650}>
                                        {reviews.mainViewer}
                                    </Typography>
                                    <Box mt={1} mb={1}>
                                        <Rating
                                            name="simple-controlled"
                                            value={reviews.rating}
                                            size="small"
                                            readOnly
                                        />
                                    </Box>
                                    <Typography variant="body2" color="text.secondary" sx={{ color: '#D3D0D3' }} fontSize={13} mb={2}>
                                        {reviews.content}
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary" sx={{ color: '#D3D0D3' }} fontSize={14}>
                                        ● {reviews.viewer}
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))}
                    </Masonry>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }} padding={5}>
                        <Button sx={{ backgroundColor: '#EA4D22', color: '#fff', '&:hover': { backgroundColor: 'rgba(234, 77, 34, 0.5)' }, fontWeight: '550' }}>Write Your Own Review</Button>
                    </Box>
                </Box>
            </Box>
        </Container >
    )
}