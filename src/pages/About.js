import { Box, Button, Typography, Link } from '@mui/material'
import { AiFillGithub, AiFillFacebook, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import { useSpring, animated } from '@react-spring/web'
import '../styles/scss/about.scss'

export default function About() {
    const props = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        reset: false,
        delay: 300,
    })

    const props2 = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        reset: false,
        delay: 500,
    })

    const props3 = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        reset: false,
        delay: 700,
    })

    const button = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        reset: false,
        delay: 1000,
    })

    return (
        <Box
            className='bg-about-us'
        >
            <Box className='child-bg'>
                <Box className='child-content'>
                    <animated.div style={props}>
                        <Typography variant="h2">
                            About Thai Food
                        </Typography>
                    </animated.div>
                    <animated.div style={props2}>
                        <Typography variant="h5">
                            Contrary to popular belief,
                        </Typography>
                    </animated.div>
                    <animated.div style={props3}>
                        <Typography variant="body2">
                            Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                        </Typography>
                    </animated.div>
                    <animated.div style={button}>
                        <Button>Contact Us</Button>
                    </animated.div>
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