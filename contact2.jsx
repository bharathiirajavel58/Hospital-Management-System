// src/components/ContactForm.jsx
import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  Snackbar,
  Alert,
} from "@mui/material";
import { styled } from "@mui/system";
import hospitalImage from "../assets/c2.jpeg"; // adjust path if needed

const OuterWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "30px",
  padding: "30px 0",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

const FormBox = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: "420px",
  backgroundColor: "#f8f8f8",
  padding: "20px",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.down("sm")]: {
    maxWidth: "100%",
    padding: "15px",
  },
}));

const ImageBox = styled("img")(({ theme }) => ({
  width: "100%",
  maxWidth: "420px",
  height: "100%",
  maxHeight: "920px",
  objectFit: "cover",
  borderRadius: "10px",
  [theme.breakpoints.down("sm")]: {
    maxWidth: "100%",
    marginTop: "20px",
  },
}));

const SmallTextField = styled(TextField)(({ theme }) => ({
  marginBottom: "12px",
  "& .MuiInputBase-input": {
    padding: "10px 12px",
    fontSize: "14px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "12px",
  },
}));

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    feedback: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const nameRegex = /^[a-zA-Z ]{2,30}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[6-9]\d{9}$/;

    const newErrors = {};

    if (!nameRegex.test(formData.name)) {
      newErrors.name = "Enter a valid name (2-30 letters)";
    }

    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    if (formData.feedback.trim() === "") {
      newErrors.feedback = "Feedback cannot be empty";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSuccess(true);
      setFormData({ name: "", email: "", phone: "", feedback: "" });
      setErrors({});
    }
  };

  return (
    <Box>
      {/* Contact Header - Plain Text */}
      <Box textAlign="center" py={2}>
        <Typography variant="body1" fontWeight="bold">
          📧 youfirstalways@srbhospital.com &nbsp;&nbsp; 📞 +91 471 3100 100
        </Typography>
      </Box>

      <Container>
        <OuterWrapper>
          {/* Form */}
          <FormBox component="form" onSubmit={handleSubmit}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Send Us <span style={{ color: "#6a1b96" }}>feedback</span>
            </Typography>

            <SmallTextField
              fullWidth
              label="Name"
              variant="outlined"
              value={formData.name}
              error={!!errors.name}
              helperText={errors.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <SmallTextField
              fullWidth
              label="Email"
              variant="outlined"
              value={formData.email}
              error={!!errors.email}
              helperText={errors.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <SmallTextField
              fullWidth
              label="Phone Number"
              variant="outlined"
              value={formData.phone}
              error={!!errors.phone}
              helperText={errors.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
            <SmallTextField
              fullWidth
              multiline
              rows={2}
              label="Write your feedback here"
              variant="outlined"
              value={formData.feedback}
              error={!!errors.feedback}
              helperText={errors.feedback}
              onChange={(e) =>
                setFormData({ ...formData, feedback: e.target.value })
              }
            />

            {/* Google reCAPTCHA placeholder */}
            <Box my={2}>
              <div className="g-recaptcha" data-sitekey="YOUR_SITE_KEY"></div>
            </Box>

            <Button
              type="submit"
              fullWidth
              sx={{
                backgroundColor: "#6a1b96",
                color: "#fff",
                "&:hover": { backgroundColor: "#5a1580" },
              }}
            >
              Submit
            </Button>
          </FormBox>

          {/* Image */}
          <ImageBox src={hospitalImage} alt="Hospital Care" />
        </OuterWrapper>
      </Container>

      {/* Feedback Snackbar */}
      <Snackbar
        open={success}
        autoHideDuration={3000}
        onClose={() => setSuccess(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={() => setSuccess(false)} severity="success">
          Feedback submitted!
        </Alert>
      </Snackbar>

      {/* reCAPTCHA script */}
      <script src="https://www.google.com/recaptcha/api.js" async defer></script>
    </Box>
  );
};

export default ContactForm;
