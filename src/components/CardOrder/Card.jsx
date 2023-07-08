import React from 'react';
import { Card, CardMedia, CardContent, Box, Typography, Grid } from '@mui/material';

const ContactInfoCard = () => {
  return (
    <Card sx={{ 
      display: 'flex', 
      background: 'transparent', 
      position: 'relative', 
      marginTop: '100rem',
      '@media (max-width: 896px) and (max-height: 414px)': {
        marginTop: '570rem'
      },
      '@media (max-width: 820px)' : {
        marginTop: '530rem'
      },
      '@media (max-width: 768px)': {
        marginTop: '500rem'
      },
      '@media (max-width: 667px) and (max-height: 375px)': {
        marginTop: '440rem'
      },
      '@media (max-width: 414px)': {
        marginTop: '310rem'
      },
      '@media (max-width: 375px)': {
        marginTop: '290rem'
      }
      }}>
      <CardMedia
        sx={{ marginLeft: '0', marginRight: '0', opacity: '0.3' }}
        component="img"
        height="500"
        image="/images/banner2.jpg"
        alt="Banner Image"
      />
      <CardContent sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
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
              <Box sx={{ height: '115px' }}>
                <Typography variant="body1" sx={{ mt: 1, mt: 1, fontStyle: 'italic', textAlign: 'center', fontWeight: 'bold' }}>
                  Monday - Saturday
                </Typography>
                <Typography variant="body1" sx={{ mt: 1, fontStyle: 'italic', textAlign: 'center' }}>
                  9AM - 7PM
                </Typography>
                <Typography variant="body1" sx={{ mt: 1, mt: 1, fontStyle: 'italic', textAlign: 'center', fontWeight: 'bold' }}>
                  Sunday
                </Typography>
                <Typography variant="body1" sx={{ mt: 1, fontStyle: 'italic', textAlign: 'center' }}>
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
              <Box sx={{ height: '115px' }}>
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
  );
};

export default ContactInfoCard;
