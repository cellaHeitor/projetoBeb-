import React from 'react';
import { useAppContext } from '../context/Context';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom'; 
import { useTranslation } from 'react-i18next';
import { styled } from '@mui/system';
import { Home as HomeIcon, Settings as SettingsIcon, ExitToApp as LogoutIcon } from '@mui/icons-material';

const Header = () => {
  const { bebê, logout } = useAppContext();
  const { t } = useTranslation();
  const navigate = useNavigate(); 

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const StyledAppBar = styled(AppBar)({
    backgroundColor: '#1976d2', 
  });

  const StyledButton = styled(Button)({
    '&:hover': {
      backgroundColor: '#1565c0',
    },
  });

  const handleHover = (event) => {
    event.target.style.backgroundColor = '#1565c0';
  };

  const handleLeave = (event) => {
    event.target.style.backgroundColor = '';
  };

  return (
    <StyledAppBar position="static">
      <Toolbar>
        <Container>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography variant="h6" sx={{ flexGrow: 1, color: '#fff' }}>
              {t('My Little Baby') || 'Meu Bebê'}
            </Typography>

            {bebê && bebê.nome && (
              <Typography variant="body1" sx={{ marginRight: 2, color: '#fff' }}>
                {t('babyName')}: {bebê.nome}
              </Typography>
            )}

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <StyledButton
                color="inherit"
                component={Link}
                to="/home"
                startIcon={<HomeIcon />}
                onMouseEnter={handleHover}
                onMouseLeave={handleLeave}
              >
                {t('home')}
              </StyledButton>

              <StyledButton
                color="inherit"
                component={Link}
                to="/settings"
                startIcon={<SettingsIcon />}
                onMouseEnter={handleHover}
                onMouseLeave={handleLeave}
              >
                {t('settings')}
              </StyledButton>

              <StyledButton
                color="inherit"
                onClick={handleLogout}
                startIcon={<LogoutIcon />}
                onMouseEnter={handleHover}
                onMouseLeave={handleLeave}
              >
                {t('logout')}
              </StyledButton>
            </Box>
          </Box>
        </Container>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;
