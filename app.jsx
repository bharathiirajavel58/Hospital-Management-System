import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Button,
  Paper,
  FormControl,
  InputLabel,
  Select
} from '@mui/material';
import { styled } from '@mui/system';
import backgroundImage from '../assets/z1.webp';

const doctors = [
  "Dr. Aathithya S", "Dr. Priya K", "Dr. Sam R", "Dr. Ramya K",
  "Dr. Vikram M", "Dr. Dinitha P", "Dr. Abishek S", "Dr. Lakshmi K",
  "Dr. Siva R", "Dr. Meena K", "Dr. Vishnu M", "Dr. Vino P"
];

const StyledForm = styled('form')(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(1),
  maxHeight: 'calc(100vh - 180px)',
  overflowY: 'auto',
  paddingRight: '6px',
  '&::-webkit-scrollbar': {
    width: '4px'
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '#6a1b96',
    borderRadius: '2px'
  }
}));

const AppointmentForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem('appointmentFormData');
    return savedData ? JSON.parse(savedData) : {
      name: '', email: '', phone: '', age: '',
      date: '', doctor: doctors[0], reason: ''
    };
  });

  const [errors, setErrors] = useState({
    name: '', email: '', phone: '', age: ''
  });

  useEffect(() => {
    localStorage.setItem('appointmentFormData', JSON.stringify(formData));
  }, [formData]);

  const validateField = (name, value) => {
    switch (name) {
      case 'name': return /^[A-Za-z\s]+$/.test(value) ? '' : 'Invalid name';
      case 'email': return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Invalid email';
      case 'phone': return /^[0-9]{10}$/.test(value) ? '' : '10 digits required';
      case 'age': return value >= 1 && value <= 120 ? '' : 'Age 1-120';
      default: return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      phone: validateField('phone', formData.phone),
      age: validateField('age', formData.age)
    };
    setErrors(newErrors);

    if (Object.values(newErrors).every(err => !err)) {
      localStorage.removeItem('appointmentFormData');
      navigate('/app2', {
        state: {
          ...formData,
          date: formData.date || new Date().toISOString().split('T')[0]
        }
      });
    }
  };

  return (
    <Box sx={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      height: '100vh',
      width: '100vw',
      position: 'fixed',
      top: 0,
      left: 0,
      p: { xs: 1, sm: 2 },
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }}>
      <Paper elevation={3} sx={{
        p: { xs: 2, sm: 3 },
        width: '100%',
        maxWidth: {
          xs: '95%',    // phones
          sm: 400,      // tablets
          md: 450,      // medium desktops
          lg: 480,      // large desktops
          xl: 520,      // extra large
          '2xl': 600    // custom very large
        },
        maxHeight: '85vh',
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <Typography variant="h5" sx={{
          mb: 2,
          color: '#6a1b96',
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: {
            xs: '1.3rem',
            sm: '1.5rem',
            md: '1.6rem',
            lg: '1.7rem'
          }
        }}>
          Book Appointment
        </Typography>

        <StyledForm onSubmit={handleSubmit}>
          <TextField label="Full Name" name="name" value={formData.name} onChange={handleChange}
            fullWidth size="small" margin="dense" required error={!!errors.name} helperText={errors.name} sx={{ mb: 1 }} />
          <TextField label="Email" name="email" type="email" value={formData.email} onChange={handleChange}
            fullWidth size="small" margin="dense" required error={!!errors.email} helperText={errors.email} sx={{ mb: 1 }} />
          <TextField label="Phone Number" name="phone" value={formData.phone} onChange={handleChange}
            fullWidth size="small" margin="dense" required error={!!errors.phone} helperText={errors.phone}
            inputProps={{ maxLength: 10 }} sx={{ mb: 1 }} />
          <TextField label="Age" name="age" type="number" value={formData.age} onChange={handleChange}
            fullWidth size="small" margin="dense" required error={!!errors.age} helperText={errors.age}
            inputProps={{ min: 1, max: 120 }} sx={{ mb: 1 }} />
          <TextField label="Preferred Date" name="date" type="date" value={formData.date} onChange={handleChange}
            fullWidth size="small" margin="dense" required InputLabelProps={{ shrink: true }} sx={{ mb: 1 }} />

          <FormControl fullWidth size="small" margin="dense" required sx={{ mb: 1 }}>
            <InputLabel>Doctor</InputLabel>
            <Select name="doctor" value={formData.doctor} onChange={handleChange} label="Doctor">
              {doctors.map((doctor) => (
                <MenuItem key={doctor} value={doctor}>{doctor}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            label="Reason for Visit" name="reason" value={formData.reason}
            onChange={handleChange} fullWidth size="small" margin="dense" required
            multiline rows={2} sx={{ mb: 2 }}
          />

          <Button type="submit" variant="contained" fullWidth sx={{
            backgroundColor: '#6a1b96',
            '&:hover': { backgroundColor: '#4a126b' },
            py: 1.2,
            fontSize: {
              xs: '0.85rem',
              sm: '0.9rem'
            }
          }}>
            Confirm Appointment
          </Button>
        </StyledForm>
      </Paper>
    </Box>
  );
};

export default AppointmentForm;
