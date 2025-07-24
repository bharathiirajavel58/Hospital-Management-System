import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
// Import images with proper usage
import h0 from '../assets/h0.webp';
import h1 from '../assets/h1.webp';
import h2 from '../assets/h2.webp';
import h3 from '../assets/h3.webp';
import h4 from '../assets/h4.webp';

const CoreValues = () => {
  // Define coreValues array with direct image references
  const coreValues = [
    {
      number: 1,
      title: "Integrity",
      subtitle: "Transparency and Professionalism",
      description: "Integrity signifies our commitment to ethical practices, transparency, and professionalism.",
      image: h0 // Direct reference
    },
    {
      number: 2,
      title: "Compassion",
      subtitle: "Empathy and Care",
      description: "We prioritize compassionate care, ensuring that every patient is treated with respect.",
      image: h1 // Direct reference
    },
    {
      number: 3,
      title: "Excellence",
      subtitle: "Commitment to Quality",
      description: "Striving for excellence in healthcare services to ensure the best outcomes for patients.",
      image: h2 // Direct reference
    },
    {
      number: 4,
      title: "Innovation",
      subtitle: "Advancing Medical Technologies",
      description: "Embracing innovation to improve healthcare services and provide cutting-edge treatments.",
      image: h3 // Direct reference
    },
    {
      number: 5,
      title: "Collaboration",
      subtitle: "Teamwork and Partnership",
      description: "Working together to achieve common goals and enhance patient care through teamwork.",
      image: h4 // Direct reference
    }
  ];

  return (
    <Box sx={{ 
      backgroundColor: '#f8f8f8', 
      py: 8,
      px: { xs: 2, md: 0 }
    }}>
      <Typography variant="h4" sx={{ 
        textAlign: 'center', 
        mb: 5,
        fontWeight: 'bold'
      }}>
        Our <span style={{ color: '#6a1b9a' }}>Core Values</span>
      </Typography>
      
      {coreValues.map((value, index) => (
        <Box key={index} sx={{
          display: 'flex',
          flexDirection: {
            xs: 'column',
            md: index % 2 === 0 ? 'row' : 'row-reverse'
          },
          alignItems: 'center',
          maxWidth: '1000px',
          mx: 'auto',
          mb: 8,
          position: 'relative'
        }}>
          {/* Image Container */}
          <Box sx={{ 
            position: 'relative',
            width: { xs: '100%', md: '50%' },
            mb: { xs: 4, md: 0 },
            transition: 'transform 0.3s',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 6px 12px #6a1b96'
          }
            
          }}>
            <Box sx={{
              width: '60px',
              height: '60px',
              backgroundColor: '#6a1b9a',
              color: 'white',
              fontSize: '24px',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
              position: 'absolute',
              top: '-15px',
              left: '-15px',
              zIndex: 1
            }}>
              {value.number}
            </Box>
            <Box
              component="img"
              src={value.image}
              alt={value.title}
              sx={{
                width: '100%',
                height: '250px',
                objectFit: 'cover',
                borderRadius: '10px',
                display: 'block'
              }}
            />
          </Box>
          
          {/* Text Content */}
          <Paper sx={{
            width: { xs: '90%', md: '40%' },
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            p: 3,
            borderRadius: 2,
            boxShadow: 3,
            position: { xs: 'relative', md: 'absolute' },
            top: { md: '50%' },
            transform: { md: 'translateY(-50%)' },
            left: { 
              md: index % 2 === 0 ? '40%' : 'auto' 
            },
            right: { 
              md: index % 2 !== 0 ? '40%' : 'auto' 
            },
            mt: { xs: -4, md: 0 }
          }}>
            <Typography variant="h4" sx={{ color: '#6a1b9a', mb: 1 }}>
              <span style={{ fontWeight: 'bold' }}>{value.title}</span> {value.subtitle}
            </Typography>
            <Typography variant="body1">
              {value.description}
            </Typography>
          </Paper>
        </Box>
      ))}
    </Box>
  );
};

export default CoreValues;