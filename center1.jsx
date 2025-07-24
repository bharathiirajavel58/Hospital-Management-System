import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Box,
  Chip,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import {
  MonitorHeart as CardiologyIcon,
  Memory as NeurologyIcon,
  Healing as OrthopedicsIcon,
  MedicalInformation as OncologyIcon,
  ChildCare as PediatricsIcon,
  MedicalServices as SurgeryIcon,
  CheckCircle as CheckIcon
} from '@mui/icons-material';

// Import images
import cardiologyImg from '../assets/cardiology.webp';
import neurologyImg from '../assets/neurology.webp';
import orthopedicsImg from '../assets/orhopedics.webp';
import oncologyImg from '../assets/oncology.webp';
import pediatricsImg from '../assets/pediatrics.avif';
import surgeryImg from '../assets/surgery.jpg';

// Add Dancing Script font
import '@fontsource/dancing-script';

// Styled components
const SpecialtyCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s, box-shadow 0.3s',
  maxWidth: 500,
  margin: '0 auto',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[8]
  }
}));

const TechnologyItem = styled(ListItem)(({ theme }) => ({
  padding: theme.spacing(2),
  '&:not(:last-child)': {
    borderBottom: `1px solid ${theme.palette.divider}`
  }
}));

const departments = [
  {
    id: 1,
    title: 'Cardiology',
    description: 'Advanced heart care with cutting-edge diagnostic and treatment technologies.',
    Icon: CardiologyIcon,
    image: cardiologyImg,
    services: ['Robotic Angioplasty', '3D Heart Mapping', 'TAVI Procedures']
  },
  {
    id: 2,
    title: 'Neurology',
    description: 'Comprehensive care for brain and nervous system disorders.',
    Icon: NeurologyIcon,
    image: neurologyImg,
    services: ['Deep Brain Stimulation', 'Neurovascular Surgery', 'Epilepsy Monitoring']
  },
  {
    id: 3,
    title: 'Orthopedics',
    description: 'Specialized care for bones, joints and musculoskeletal system.',
    Icon: OrthopedicsIcon,
    image: orthopedicsImg,
    services: ['Robotic Joint Replacement', 'Sports Medicine', 'Spine Surgery']
  },
  {
    id: 4,
    title: 'Oncology',
    description: 'Comprehensive cancer care with advanced treatment modalities.',
    Icon: OncologyIcon,
    image: oncologyImg,
    services: ['Immunotherapy', 'Precision Medicine', 'Proton Therapy']
  },
  {
    id: 5,
    title: 'Pediatrics',
    description: 'Specialized healthcare for infants, children and adolescents.',
    Icon: PediatricsIcon,
    image: pediatricsImg,
    services: ['Neonatal ICU', 'Pediatric Cardiology', 'Adolescent Medicine']
  },
  {
    id: 6,
    title: 'General Surgery',
    description: 'Advanced surgical care using minimally invasive techniques.',
    Icon: SurgeryIcon,
    image: surgeryImg,
    services: ['Laparoscopic Surgery', 'Bariatric Surgery', 'Trauma Care']
  }
];

const technologies = [
  '3T MRI with AI-assisted diagnostics',
  'Robotic Surgery Systems (Da Vinci Xi)',
  'PET-CT Fusion Imaging',
  'Telemedicine Integration Platform',
  'Smart ICU Monitoring Systems',
  'Digital Pathology Solutions'
];

const DepartmentsPage = () => {
  const navigate = useNavigate();

  const handleBookAppointment = () => {
    navigate('/app');
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Departments Section */}
      <Box textAlign="center" mb={8}>
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: 700,
            color: '#6a1b96',
            fontFamily: '"Dancing Script", cursive',
            fontSize: { xs: 24, sm: 30, md: 36, lg: 42, xl: 48, '2xl': 54 },
            textAlign: 'center',
            mb: 2
          }}
        >
          Our Specialized Departments
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: 700, margin: '0 auto', fontSize: '1.1rem' }}>
          World-class medical care through focused expertise and advanced technology.
        </Typography>
      </Box>

      {/* Departments Grid - 2 per row */}
      <Grid container spacing={{ xs: 4, sm: 5, md: 6 }} justifyContent="center">
        {departments.map((dept) => (
          <Grid
            item
            key={dept.id}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            xl={2}
            sx={{ display: 'flex' }}
          >
            <SpecialtyCard>
              <CardMedia
                component="img"
                height="240"
                image={dept.image}
                alt={dept.title}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ textAlign: 'center', flexGrow: 1 }}>
                <Avatar
                  sx={{
                    width: 80,
                    height: 80,
                    margin: '-60px auto 20px',
                    backgroundColor: '#6a1b96'
                  }}
                >
                  <dept.Icon sx={{ fontSize: 40 }} />
                </Avatar>
                <Typography variant="h5" gutterBottom>
                  {dept.title}
                </Typography>
                <Typography variant="body1" color="#6a1b96" mb={3}>
                  {dept.description}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1, mb: 3 }}>
                  {dept.services.map((service, index) => (
                    <Chip
                      key={index}
                      label={service}
                      size="small"
                      color="primary"
                      variant="outlined"
                      sx={{ fontWeight: 500, borderColor: '#6a1b96', color: '#6a1b96' }}
                    />
                  ))}
                </Box>
              </CardContent>
            </SpecialtyCard>
          </Grid>
        ))}
      </Grid>

      {/* Advanced Technology Section */}
      <Box sx={{ mt: 12, textAlign: 'center' }}>
        <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 700, color: '#6a1b96' }}>
          Advanced Medical Technology
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: 700, margin: '0 auto 40px', fontSize: '1.1rem' }}>
          We invest in cutting-edge technology to ensure precise diagnoses and effective treatments.
        </Typography>

        <Card sx={{ maxWidth: 800, margin: '0 auto', boxShadow: 3 }}>
          <List disablePadding>
            {technologies.map((tech, index) => (
              <TechnologyItem key={index}>
                <ListItemIcon>
                  <CheckIcon sx={{ color: '#6a1b96' }} />
                </ListItemIcon>
                <ListItemText
                  primary={tech}
                  primaryTypographyProps={{ variant: 'body1', fontWeight: 500 }}
                />
              </TechnologyItem>
            ))}
          </List>
        </Card>
      </Box>

      {/* Appointment CTA Section */}
      <Box
        sx={{
          mt: 10,
          p: 4,
          backgroundColor: '#6a1b96',
          color: 'white',
          borderRadius: 2,
          textAlign: 'center',
          maxWidth: '800px',
          width: '100%',
          mx: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
          Experience World-Class Healthcare
        </Typography>
        <Button
          variant="contained"
          size="large"
          onClick={handleBookAppointment}
          sx={{
            backgroundColor: 'white',
            color: '#6a1b96',
            fontWeight: 600,
            px: 4,
            mt: 2,
            '&:hover': {
              backgroundColor: '#f5f5f5',
              transform: 'scale(1.02)',
              transition: 'transform 0.2s ease-in-out'
            }
          }}
        >
          Book an Appointment
        </Button>
      </Box>
    </Container>
  );
};

export default DepartmentsPage;
