import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Box } from '@mui/material';

import leader1 from '../assets/leader1.jpg';
import leader3 from '../assets/leader3.jpg';
import leader4 from '../assets/leader4.avif';

const leaders = [
  {
    name: 'Dr. Raj',
    title: 'Chairman & Managing Director',
    image: leader1,
  },
  {
    name: 'Dr. Sivanesh',
    title: 'Executive Director',
    image: leader3,
  },
  {
    name: 'Dr. Ramya',
    title: 'Chief Medical Officer',
    image: leader4,
  },
];

const LeadershipTeam = () => {
  return (
    <Box sx={{ py: 5, backgroundColor: '#fafafa' }}>
      <Typography
        variant="h4"
        align="center"
        fontWeight="bold"
        color="#6a1b96"
        gutterBottom
        sx={{
          fontSize: { xs: '1.6rem', sm: '2rem', md: '2.2rem', lg: '2.4rem', xl: '2.6rem' },
        }}
      >
        <span style={{ color: 'black' }}>Our</span> Leadership Team
      </Typography>

      <Grid container spacing={3} justifyContent="center" sx={{ mt: 2 }}>
        {leaders.map((leader, index) => (
          <Grid
            item
            key={index}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            xl={2.5}
            sx={{
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <Card
              sx={{
                width: '100%',
                maxWidth: 300,
                borderRadius: 4,
                textAlign: 'center',
                boxShadow: 3,
              }}
            >
              <CardMedia
                component="img"
                image={leader.image}
                alt={leader.name}
                sx={{
                  height: { xs: 180, sm: 200, md: 220, lg: 240 },
                  objectFit: 'cover'
                }}
              />
              <CardContent>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{
                    fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' }
                  }}
                >
                  {leader.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{
                    fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' }
                  }}
                >
                  {leader.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LeadershipTeam;
