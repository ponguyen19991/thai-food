import React, { useState } from 'react';
import { Box, Button, Stack, Typography, Alert, Snackbar } from '@mui/material';
import { FaShoppingCart } from "react-icons/fa";

const BoxMenuFood = ({ dish, openModal, t, handleAddToCart }) => {
  const [openAlert, setOpenAlert] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();
    handleAddToCart(e, dish); 
    handleClickAlert()
  };

  const handleClickAlert = () => {
    setOpenAlert(true); 
};

const handleCloseAlert = () => {
    setOpenAlert(false); 
};

  return (
    <Box>
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
        ${t(dish.price)}
      </Typography>
      <Button onClick={handleClick}>
          <FaShoppingCart />
      </Button>
        
    </Box>
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
    </Box>
    
  );
};

export default BoxMenuFood;
