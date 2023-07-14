import { Box, Button, Typography, Link } from '@mui/material'
import { AiFillGithub, AiFillFacebook, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import '../styles/scss/about.scss'

export default function About() {
    return (
        <Box
            className='bg-about-us'
            sx={{
            }}
        >
            <Box className='child-bg'>
                <Box className='child-content'>
                    <Typography variant="h2">
                        About Thai Food
                    </Typography>
                    <Typography variant="h5">
                        Contrary to popular belief, 
                    </Typography>
                    <Typography variant="body2">
                        Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                    </Typography>
                    <Button>Contact Us</Button>
                </Box>
                <Box className='child-social'>
                    <Link href="#"><AiFillGithub /></Link>
                    <Link href="#"><AiFillFacebook /></Link>
                    <Link href="#"><AiFillInstagram /></Link>
                    <Link href="#"><AiFillLinkedin /></Link>
                </Box>
            </Box>
        </Box>
    )
}