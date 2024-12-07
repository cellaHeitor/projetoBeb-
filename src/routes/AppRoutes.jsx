import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useAppContext } from '../contexts/Context';
import Home from '../views/Home'; 
import Login from '../views/Login'; 
import Settings from '../views/Settings'; 
import { NotFound } from '../views/NotFound'; 

const AppRoutes = () => {
  const { isAuthenticated } = useAppContext(); // Verifica se o usuário está autenticado

  useEffect(() => {
    if (!isAuthenticated) {
      // Se não estiver autenticado, redireciona para o login
      navigate('/');
    }
  }, [isAuthenticated]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        
        {/* Protege as rotas de /home e /settings com a verificação de isAuthenticated */}
        <Route path="/home" element={isAuthenticated ? <Home /> : <Login />} />
        <Route path="/settings" element={isAuthenticated ? <Settings /> : <Login />} />
        
        {/* Rota de página não encontrada */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
