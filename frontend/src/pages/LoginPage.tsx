import React from 'react';
import { Button, Container, Typography, Box } from '@mui/material';
import { useAuth } from '../contexts/AuthContext';

const LoginPage: React.FC = () => {
  const { login } = useAuth();
  return (
    <Container maxWidth="sm">
      <Box mt={10} textAlign="center">
        <Typography variant="h4" gutterBottom>Login to Car Platform</Typography>
        <Button variant="contained" color="primary" onClick={login}>
          Sign in with Google
        </Button>
      </Box>
    </Container>
  );
};

export default LoginPage; 