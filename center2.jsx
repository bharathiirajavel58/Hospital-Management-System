// src/components/ContactHeader.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import c1 from '../assets/cen.jpg';

const ContactHeader = () => {
  return (
    <Box sx={{ 
      position: 'relative', 
      width: '100%', 
      height: { xs: '60vh', sm: '70vh', md: '80vh', lg: '80vh', xl: '80vh' }, // Adjust height based on screen size
      overflow: 'hidden'
    }}>
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.5)', // Adding overlay for text visibility
      }} />
      
      <Box
        component="img"
        src={c1}
        alt="About Us Team"
        sx={{ 
          width: '100%', 
          height: '100%', 
          objectFit: 'cover', // Use cover for image to fully fill the area
          objectPosition: 'center'
        }} 
      />
      
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        color: 'white',
        animation: 'fadeIn 2s ease-in-out',
        '@keyframes fadeIn': {
          from: {
            opacity: 0,
            transform: 'translate(-50%, -60%)'
          },
          to: {
            opacity: 1,
            transform: 'translate(-50%, -50%)'
          }
        }
      }}>
        <Typography variant="h3" sx={{ 
          fontFamily: '"Dancing Script", cursive',
          textShadow: '2px 2px 5px black',
          fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem', lg: '4.5rem', xl: '5rem' }, // Responsive font size
        }}>
          SRB MED - World's Best Hospital
        </Typography>
        <Typography variant="h5" sx={{ 
          fontFamily: '"Dancing Script", cursive',
          textShadow: '2px 2px 5px black',
          my: 2,
          fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2.2rem', lg: '2.5rem', xl: '3rem' }, // Adjust the subtitle size
        }}>
          <strong>Center Of Excellence</strong>
        </Typography>
      </Box>
    </Box>
  );
};

export default ContactHeader;
