import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Paper,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
  Alert
} from '@mui/material';

const AppointmentConfirmation = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [isCancelled, setIsCancelled] = React.useState(false);

  if (!state) {
    return (
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Alert severity="error">No appointment data found</Alert>
        <Button variant="contained" sx={{ mt: 2 }} onClick={() => navigate('/')}>
          Back to Home
        </Button>
      </Container>
    );
  }

  const handleCancel = () => {
    // Here you would typically make an API call to cancel the appointment
    setIsCancelled(true);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        {isCancelled ? (
          <>
            <Alert severity="success" sx={{ mb: 3 }}>
              Your appointment has been cancelled successfully
            </Alert>
            <Button 
              variant="contained" 
              onClick={() => navigate('/')}
            >
              Back to Home
            </Button>
          </>
        ) : (
          <>
            <Typography variant="h4" component="h1" gutterBottom sx={{ color: '#6a1b96' }}>
              Appointment Confirmed!
            </Typography>
            
            <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
              Appointment Details
            </Typography>
            <Divider sx={{ mb: 2 }} />
            
            <List>
              <ListItem>
                <ListItemText primary="Patient Name" secondary={state.name} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Doctor" secondary={state.doctor} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Appointment Date" secondary={state.date} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Reason for Visit" secondary={state.reason} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Contact Info" secondary={`${state.email} | ${state.phone}`} />
              </ListItem>
            </List>
            
            <Box sx={{ mt: 4, display: 'flex', gap: 2 }}>
              <Button 
                variant="contained" 
                color="error"
                onClick={handleCancel}
              >
                Cancel Appointment
              </Button>
              <Button 
                variant="outlined"
                onClick={() => navigate('/')}
              >
                Back to Home
              </Button>
            </Box>
          </>
        )}
      </Paper>
    </Container>
  );
};

export default AppointmentConfirmation;