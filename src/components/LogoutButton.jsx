import React from 'react';
import { Button } from '@mui/material';

const LogoutButton = ({ onLogout }) => {
  return (
    <Button variant="outlined" color="secondary" onClick={onLogout}>
      Sair
    </Button>
  );
};

export default LogoutButton;
