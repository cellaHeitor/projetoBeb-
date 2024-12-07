import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Typography, Card, CardContent, Box, Link } from '@mui/material';
import { loadUserData } from '../services/localStorageService'; 

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const storedUser = loadUserData(); 

    if (storedUser && storedUser.email === username && storedUser.senha === password) {
      navigate('/home');
    } else {
      setErrorMessage('Email ou senha inválidos');
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgcolor="#f4f4f4"
    >
      <Card sx={{ width: 400 }}>
        <CardContent>
          <Typography variant="h5" align="center" gutterBottom>
            Login
          </Typography>

          {errorMessage && (
            <Typography variant="body2" color="error" align="center" gutterBottom>
              {errorMessage}
            </Typography>
          )}

          <TextField
            label="E-mail"
            variant="outlined"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <TextField
            label="Senha"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleLogin}
            sx={{ marginTop: 2 }}
          >
            Entrar
          </Button>

          <Box display="flex" justifyContent="center" marginTop={2}>
            <Typography variant="body2">
              Não tem uma conta?{' '}
              <Link
                href="#"
                onClick={() => navigate('/register')}
                underline="hover"
              >
                Cadastre-se
              </Link>
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Login;
