import React from 'react';
import { Box, Typography } from '@mui/material';
import buildingImage from "../assets/cos.jpeg";

const AboutSection = () => {
  return (
    <Box sx={{ 
      position: 'relative', 
      width: '100%', 
      height: { xs: '90vh', sm: '85vh', md: '80vh', lg: '75vh', xl: '70vh', xxl: '65vh' },
      overflow: 'hidden' 
    }}>
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)'
      }} />
      
      <img 
        src={buildingImage}
        alt="About Us Team" 
        style={{ 
          width: '100%', 
          height: '100%', 
          objectFit: 'cover' 
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
        px: 2,
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
        <Typography
          variant="h3"
          sx={{
            fontFamily: '"Dancing Script", cursive',
            textShadow: '2px 2px 5px black',
            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3rem', xl: '3.5rem' }
          }}
        >
          SRB MED - World's Best Hospital
        </Typography>

        <Typography
          variant="h3"
          sx={{
            fontFamily: '"Dancing Script", cursive',
            textShadow: '2px 2px 5px black',
            my: { xs: 1, sm: 2 },
            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3rem', xl: '3.5rem' }
          }}
        >
          ABOUT US
        </Typography>

        <Typography
          variant="h6"
          sx={{
            fontFamily: '"Dancing Script", cursive',
            textShadow: '2px 2px 5px black',
            fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem', lg: '1.5rem' }
          }}
        >
          Welcome to SRB MED
        </Typography>

        <Typography
          variant="h6"
          sx={{
            fontFamily: '"Dancing Script", cursive',
            textShadow: '2px 2px 5px black',
            my: 2,
            fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem', lg: '1.5rem' }
          }}
        >
          We are committed to providing world-class medical services, cutting-edge technology, and patient-centered care to improve lives every day.
        </Typography>

        <Typography
          variant="h6"
          sx={{
            fontFamily: '"Dancing Script", cursive',
            textShadow: '2px 2px 5px black',
            my: 2,
            fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem', lg: '1.5rem' }
          }}
        >
          From routine check-ups to specialized treatments, our mission is to make healthcare accessible, efficient, and effective for all.
        </Typography>

        <Typography
          variant="h4"
          sx={{
            fontFamily: '"Dancing Script", cursive',
            textShadow: '2px 2px 5px black',
            fontWeight: 'bold',
            mt: 3,
            fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.8rem', lg: '2rem' }
          }}
        >
          Your Health. Our Priority.
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutSection;
