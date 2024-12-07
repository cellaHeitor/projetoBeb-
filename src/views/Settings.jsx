import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppContext } from '../context/Context';
import {
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  TextField,
  Typography,
  Paper,
  Box
} from '@mui/material';
import { styled } from '@mui/system';

const Settings = () => {
  const { t, i18n } = useTranslation();
  const { bebê, setBebê, logout } = useAppContext();

  const [nome, setNome] = useState(localStorage.getItem('bebê-nome') || bebê.nome);
  const [peso, setPeso] = useState(localStorage.getItem('bebê-peso') || bebê.peso || '');
  const [comprimento, setComprimento] = useState(localStorage.getItem('bebê-comprimento') || bebê.comprimento || '');
  const [idioma, setIdioma] = useState(localStorage.getItem('idioma') || 'pt');

  // Referências para os campos de entrada
  const nomeRef = useRef(null);
  const pesoRef = useRef(null);
  const comprimentoRef = useRef(null);

  // Efeito para atualizar o localStorage quando os dados mudam
  useEffect(() => {
    localStorage.setItem('bebê-nome', nome);
    localStorage.setItem('bebê-peso', peso);
    localStorage.setItem('bebê-comprimento', comprimento);
  }, [nome, peso, comprimento]);

  // Efeito para atualizar o idioma no localStorage
  useEffect(() => {
    localStorage.setItem('idioma', idioma);
    i18n.changeLanguage(idioma).catch((err) => console.error("Erro ao mudar o idioma:", err));
  }, [idioma]);

  const handleSaveSettings = (e) => {
    e.preventDefault();
    setBebê({ nome, peso, comprimento });
  };

  // Função para focar no campo alterado
  useEffect(() => {
    if (nome && nomeRef.current) nomeRef.current.focus();
  }, [nome]);

  useEffect(() => {
    if (peso && pesoRef.current) pesoRef.current.focus();
  }, [peso]);

  useEffect(() => {
    if (comprimento && comprimentoRef.current) comprimentoRef.current.focus();
  }, [comprimento]);

  const PaperWrapper = styled(Paper)({
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
  });

  const handlePesoChange = (e) => {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value)) {
      setPeso(value);
    }
  };

  const handleComprimentoChange = (e) => {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value)) {
      setComprimento(value);
    }
  };

  const handleLanguageChange = (e) => {
    setIdioma(e.target.value);
  };

  const handleNomeChange = (e) => {
    setNome(e.target.value);
  };

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" align="center" gutterBottom>
        {t('settings')}
      </Typography>

      <form onSubmit={handleSaveSettings}>
        <PaperWrapper>
          <Typography variant="h6" gutterBottom>
            {t('babyInfo')}
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <TextField
                label={t('babyName')}
                variant="outlined"
                fullWidth
                value={nome}
                onChange={handleNomeChange}
                inputRef={nomeRef} // Atribui a referência ao campo de nome
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                label={t('weight')}
                variant="outlined"
                type="text"
                fullWidth
                value={peso}
                onChange={handlePesoChange}
                inputRef={pesoRef} // Atribui a referência ao campo de peso
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                label={t('length')}
                variant="outlined"
                type="text"
                fullWidth
                value={comprimento}
                onChange={handleComprimentoChange}
                inputRef={comprimentoRef} // Atribui a referência ao campo de comprimento
              />
            </Grid>
          </Grid>

          <Box sx={{ marginTop: '20px', textAlign: 'center' }}>
            <Button type="submit" variant="contained" color="primary">
              {t('save')}
            </Button>
          </Box>
        </PaperWrapper>
      </form>

      <PaperWrapper>
        <Typography variant="h6" gutterBottom>
          {t('selectLanguage')}
        </Typography>

        <FormControl fullWidth>
          <InputLabel>{t('language')}</InputLabel>
          <Select
            value={idioma}
            onChange={handleLanguageChange}
            label={t('language')}
          >
            <MenuItem value="pt">{t('portuguese')}</MenuItem>
            <MenuItem value="en">{t('english')}</MenuItem>
            <MenuItem value="es">{t('spanish')}</MenuItem>
          </Select>
        </FormControl>
      </PaperWrapper>

      <Box sx={{ textAlign: 'center', marginTop: '30px' }}>
        <Button variant="outlined" color="secondary" onClick={logout}>
          {t('logout')}
        </Button>
      </Box>
    </Box>
  );
};

export default Settings;
