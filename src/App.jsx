import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { useAppContext } from './context/Context';
import { createTheme } from '@mui/material/styles';

import Login from './views/Login';
import Register from './views/Register';
import Home from './views/Home';
import Settings from './views/Settings';

import Header from './components/Header'; // Certifique-se de que o Header esteja sendo importado corretamente

const App = () => {
  const { themeMode } = useAppContext();
  const currentThemeMode = themeMode || 'light';

  const theme = createTheme({
    palette: {
      mode: currentThemeMode,
      primary: {
        main: '#3f51b5',
      },
      secondary: {
        main: '#f50057',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<div>404 - Página não encontrada</div>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
