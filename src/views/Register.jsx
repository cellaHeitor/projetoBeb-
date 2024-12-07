import React, { useState } from 'react';
import { Button, TextField, Typography, Card, CardContent, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { saveUserData } from '../services/localStorageService'; 

const Register = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    if (!nome || !email || !senha || !confirmaSenha) {
      setErrorMessage('Todos os campos são obrigatórios');
      return;
    }

    if (senha !== confirmaSenha) {
      setErrorMessage('As senhas não coincidem');
      return;
    }

    const user = { nome, email, senha };
    saveUserData(user); 

    navigate('/');
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
            Cadastro
          </Typography>

          {errorMessage && (
            <Typography variant="body2" color="error" align="center" gutterBottom>
              {errorMessage}
            </Typography>
          )}

          <TextField
            label="Nome"
            variant="outlined"
            fullWidth
            margin="normal"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

          <TextField
            label="E-mail"
            variant="outlined"
            fullWidth
            margin="normal"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            label="Senha"
            variant="outlined"
            fullWidth
            margin="normal"
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <TextField
            label="Confirmar Senha"
            variant="outlined"
            fullWidth
            margin="normal"
            type="password"
            value={confirmaSenha}
            onChange={(e) => setConfirmaSenha(e.target.value)}
          />

          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleRegister}
            sx={{ marginTop: 2 }}
          >
            Cadastrar
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Register;
