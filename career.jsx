import React from 'react';
import {
  Box, Typography, Button, Card, CardContent,
  TextField, Grid, Container
} from '@mui/material';
import {
  MedicalServices,
  Work,
  School,
  AccessTime,
  AttachMoney,
  LocationOn,
  Email,
  Phone
} from '@mui/icons-material';

const careerImage = 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80';

const jobs = [
  {
    title: "Hospital Administrator",
    type: "Full-time",
    location: "New York, NY",
    department: "Administration",
    experience: "5+ years"
  },
  {
    title: "Medical Records Technician",
    type: "Full-time",
    location: "Chicago, IL",
    department: "Health Information",
    experience: "2+ years"
  },
  {
    title: "IT Support Specialist",
    type: "Contract",
    location: "Remote",
    department: "Information Technology",
    experience: "3+ years"
  },
  {
    title: "Billing Coordinator",
    type: "Part-time",
    location: "Houston, TX",
    department: "Finance",
    experience: "3+ years"
  }
];

const benefits = [
  { icon: <MedicalServices fontSize="large" />, title: "Comprehensive Healthcare", description: "Full medical, dental, and vision coverage" },
  { icon: <Work fontSize="large" />, title: "Flexible Scheduling", description: "Work-life balance with flexible hours" },
  { icon: <School fontSize="large" />, title: "Continuing Education", description: "Tuition reimbursement and training programs" },
  { icon: <AccessTime fontSize="large" />, title: "Generous PTO", description: "Paid time off and holiday pay" },
  { icon: <AttachMoney fontSize="large" />, title: "Retirement Plans", description: "401(k) with company matching" }
];

const CareerPage = () => {
  return (
    <Box sx={{ backgroundColor: 'white' }}>
      {/* Hero Section */}
      <Box sx={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${careerImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        py: { xs: 8, sm: 10, md: 12, lg: 14, xl: 16 },
        textAlign: 'center'
      }}>
        <Container maxWidth="md">
          
          <Typography
  variant="h3"
  sx={{
    fontWeight: 'bold',
    color: 'white',
    fontSize: { xs: 28, sm: 32, md: 36, lg: 40 },
    fontFamily: '"Dancing Script", cursive',
  }}
>
  Join Our Healthcare Team
</Typography>

      
          <Typography variant="h3" sx={{ mb: 4, fontFamily: '"Dancing Script", cursive',fontSize: { xs: 16, sm: 18, md: 20 } }}>
            Help us deliver exceptional patient care through innovative hospital management
          </Typography>
        </Container>
      </Box>

      {/* Benefits Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, sm: 8, md: 10 } }}>
        <Typography variant="h4" sx={{
          textAlign: 'center',
          fontWeight: 'bold',
          mb: 6,
          color: '#6a1b96',
          fontSize: { xs: 24, sm: 28, md: 32 }
        }}>
          Our Employee Benefits
        </Typography>
        <Grid container spacing={4}>
          {benefits.map((benefit, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ height: '100%', boxShadow: 3 }}>
                <CardContent sx={{ textAlign: 'center', p: 4 }}>
                  <Box sx={{ color: '#6a1b96', mb: 2 }}>
                    {benefit.icon}
                  </Box>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                    {benefit.title}
                  </Typography>
                  <Typography variant="body1">
                    {benefit.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Job Openings Section */}
      <Box sx={{ backgroundColor: 'white', py: { xs: 6, sm: 8, md: 10 } }}>
        <Container maxWidth="lg">
          <Typography variant="h4" sx={{
            textAlign: 'center',
            fontWeight: 'bold',
            mb: 6,
            color: '#6a1b96',
            fontSize: { xs: 24, sm: 28, md: 32 }
          }}>
            Current Openings
          </Typography>
          <Grid container spacing={4}>
            {jobs.map((job, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card sx={{ boxShadow: 3 }}>
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                      {job.title}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <Work sx={{ mr: 1, color: '#6a1b96' }} />
                      <Typography>{job.type}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <LocationOn sx={{ mr: 1, color: '#6a1b96' }} />
                      <Typography>{job.location}</Typography>
                    </Box>
                    <Typography><strong>Department:</strong> {job.department}</Typography>
                    <Typography><strong>Experience Required:</strong> {job.experience}</Typography>
                    <Button variant="contained" sx={{
                      mt: 2,
                      backgroundColor: '#6a1b96',
                      '&:hover': { backgroundColor: '#5c1784' }
                    }}>
                      Apply Now
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Application Form */}
      <Container maxWidth="md" sx={{ py: { xs: 6, sm: 8, md: 10 } }}>
        <Typography variant="h4" sx={{
          textAlign: 'center',
          fontWeight: 'bold',
          mb: 6,
          color: '#6a1b96'
        }}>
          Apply Today
        </Typography>
        <Card sx={{ boxShadow: 3, p: { xs: 2, sm: 4 } }}>
          <form>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="First Name" variant="outlined" required />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Last Name" variant="outlined" required />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Email" type="email" variant="outlined" required />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Phone" type="tel" variant="outlined" required />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Position Applying For" variant="outlined" required />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Upload Resume (PDF)" type="file" variant="outlined" InputLabelProps={{ shrink: true }} required />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Cover Letter" multiline rows={4} variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" size="large" sx={{
                  backgroundColor: '#6a1b96',
                  '&:hover': { backgroundColor: '#5c1784' }
                }}>
                  Submit Application
                </Button>
              </Grid>
            </Grid>
          </form>
        </Card>
      </Container>

      {/* Contact Section */}
      <Box sx={{ backgroundColor: '#f8f8f8', py: { xs: 6, sm: 8 } }}>
        <Container maxWidth="md">
          <Typography variant="h4" sx={{
            textAlign: 'center',
            color: '#6a1b96',
            fontWeight: 'bold',
            mb: 4
          }}>
            Contact Us
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4} sx={{ textAlign: 'center' }}>
              <Phone color="primary" />
              <Typography variant="body1">+1 (555) 123-4567</Typography>
            </Grid>
            <Grid item xs={12} sm={4} sx={{ textAlign: 'center' }}>
              <Email color="primary" />
              <Typography variant="body1">careers@srbhospital.com</Typography>
            </Grid>
            <Grid item xs={12} sm={4} sx={{ textAlign: 'center' }}>
              <LocationOn color="primary" />
              <Typography variant="body1">123 Main St, cuddalore</Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default CareerPage;
