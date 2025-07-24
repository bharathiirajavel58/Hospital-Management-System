import React from 'react';
import { Box, Typography, Card, useTheme } from '@mui/material';

const VisionMission = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: '#f8f8f8',
        py: 8,
        px: { xs: 2, sm: 3, md: 4, lg: 8 },
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: 'center',
          mb: 5,
          fontWeight: 'bold',
          fontSize: {
            xs: '1.8rem',
            sm: '2rem',
            md: '2.2rem',
            lg: '2.4rem',
            xl: '2.6rem',
          },
        }}
      >
        Our <span style={{ color: '#6a1b9a' }}>Vision & Mission</span>
      </Typography>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: { xs: 3, md: 5 },
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: 'center',
        }}
      >
        {[{
          title: 'Our Vision',
          content: 'To provide world-class healthcare services with compassion and excellence.'
        }, {
          title: 'Our Mission',
          content: 'To innovate and lead in medical advancements, ensuring quality healthcare for all.'
        }].map((item, index) => (
          <Card
            key={index}
            sx={{
              width: {
                xs: '100%',
                sm: '80%',
                md: '45%',
                lg: '40%',
                xl: '30%',
              },
              p: 3,
              borderRadius: 2,
              boxShadow: 3,
              textAlign: 'center',
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: `0 6px 12px ${theme.palette.primary.main}`,
              },
            }}
          >
            <Typography
              variant="h5"
              sx={{
                mb: 2,
                fontWeight: 'bold',
                fontSize: {
                  xs: '1.4rem',
                  sm: '1.6rem',
                  md: '1.8rem',
                },
              }}
            >
              {item.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: {
                  xs: '0.95rem',
                  sm: '1rem',
                  md: '1.1rem',
                },
              }}
            >
              {item.content}
            </Typography>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default VisionMission;
