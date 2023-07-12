import React from  'react'
import CloseIcon from '@mui/icons-material/Close';
import { ImQuotesLeft } from 'react-icons/im'
import { Modal, Box, Typography, Grid } from '@mui/material'

const ModalMenuFood = ({isModalOpen, closeModal, t, selectedBox }) => {
    return (
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
                backgroundColor: 'background.paper',
                border: '2px solid #000',
                boxShadow: 24,
                p: 4,
                '@media (max-width: 768px)': {
                    width: '80%',
                },
            }}
        >
            <CloseIcon 
                sx={{
                    cursor: 'pointer',
                    float: 'right'
                }} 
                onClick={closeModal}
            />
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <Typography 
                        variant="h4" 
                        component="h2" 
                        sx={{ 
                        mt: 1, fontWeight: '550', mb: 2,
                        '@media (max-width: 768px)': {
                            mb: 1,
                            fontSize: '20px'
                        },
                    }}
                    >
                        {t(selectedBox?.name)}
                    </Typography>
                    {selectedBox && (
                        <img src={selectedBox.src} alt={selectedBox.name} style={{ width: '100%', height: 'auto', borderRadius: '20px', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', margin: '0'}} />
                    )}
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box sx={{
                        padding: '90px 0px',
                        '@media (max-width: 1380px)': {
                            padding: '30px 0px'
                        },
                        '@media (max-width: 768px)': {
                            padding: '0',
                            lineHeight: '1.6'
                        },
                    }}
                    >
                        <ImQuotesLeft style={{fontSize: '24px', color: '#cf3835'}}/>
                        <Typography 
                            variant="body1" 
                            sx={{ 
                                mt: 1, 
                                fontStyle: 'italic', 
                                height: '80px', 
                                display: 'flex', 
                                alignItems: 'center' ,
                                '@media (max-width: 1380px)': {
                                    height: '100px'
                                },
                                '@media (max-width: 768px)': {
                                    fontSize: '15px'
                                },
                            }}
                            >
                            {t(selectedBox?.rate.description)}
                        </Typography>
                        <Typography 
                            variant="body2" 
                            sx={{ 
                                mt: 1, 
                                fontWeight: '550' ,
                                '@media (max-width: 768px)': {
                                    marginTop: '15px'
                                },
                            }}>
                            {t(selectedBox?.rate.someOneRate)}
                        </Typography>
                    </Box>
                    <Box sx={{
                        '@media (max-width: 768px)': {
                            lineHeight: '1.5'
                        },
                    }}
                    >
                        <ImQuotesLeft style={{fontSize: '24px', color: '#cf3835'}}/>
                        <Typography 
                            variant="body1" 
                            sx={{ 
                                mt: 1, 
                                fontStyle: 'italic', 
                                height: '80px', 
                                display: 'flex', 
                                alignItems: 'center' ,
                                '@media (max-width: 1380px)': {
                                    height: '100px'
                                },
                                '@media (max-width: 768px)': {
                                    fontSize: '15px'
                                },
                            }}
                            >
                            {t(selectedBox?.rate.description)}
                        </Typography>
                        <Typography 
                            variant="body2" 
                            sx={{ 
                                mt: 1, 
                                fontWeight: '550' ,
                                '@media (max-width: 768px)': {
                                    marginTop: '15px'
                                },
                            }}>
                            {t(selectedBox?.rate.someOneRate2)}
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    </Modal>
    )
}

export default ModalMenuFood