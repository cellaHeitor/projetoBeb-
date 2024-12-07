import React, { useState, useEffect, useRef } from 'react';
import { useAppContext } from '../context/Context';
import { formatWeight, formatLength } from '../utils/formatters';
import { Card, CardContent, Typography, Button, TextField, Divider, Box, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import Grid from '@mui/material/Grid';
import { saveToLocalStorage, loadFromLocalStorage } from '../services/localStorageService';
import { useTranslation } from 'react-i18next';
import { styled } from '@mui/system';

const Home = () => {
  const { t } = useTranslation();
  const { bebê, setBebê } = useAppContext();
  const [fraldas, setFraldas] = useState(loadFromLocalStorage('fraldas') || []);
  const [sonos, setSonos] = useState(loadFromLocalStorage('sonos') || []);
  const [amamentacoes, setAmamentacoes] = useState(loadFromLocalStorage('amamentacoes') || []);
  
  const [newFralda, setNewFralda] = useState({ tipo: '', horario: '', observacao: '' });
  const [newSono, setNewSono] = useState({ horarioInicio: '', horarioFim: '', observacao: '' });
  const [newAmamentacao, setNewAmamentacao] = useState({ tipo: '', horarioInicio: '', horarioFim: '', observacao: '', quantidade: '', lado: '' });

  const observacaoFraldaRef = useRef();
  const observacaoSonoRef = useRef();
  const observacaoAmamentacaoRef = useRef();

  const handleAddFralda = () => {
    const updatedFraldas = [
      ...fraldas,
      { 
        ...newFralda, 
        observacao: observacaoFraldaRef.current.value, 
        horario: newFralda.horario 
      }
    ];
    setFraldas(updatedFraldas);
    saveToLocalStorage('fraldas', updatedFraldas);
    setNewFralda({ tipo: '', horario: '', observacao: '' });
  };

  const handleAddSono = () => {
    const updatedSonos = [
      ...sonos,
      { 
        ...newSono, 
        observacao: observacaoSonoRef.current.value, 
        horarioInicio: newSono.horarioInicio, 
        horarioFim: newSono.horarioFim 
      }
    ];
    setSonos(updatedSonos);
    saveToLocalStorage('sonos', updatedSonos);
    setNewSono({ horarioInicio: '', horarioFim: '', observacao: '' });
  };

  const handleAddAmamentacao = () => {
    const updatedAmamentacoes = [
      ...amamentacoes,
      { 
        ...newAmamentacao, 
        observacao: observacaoAmamentacaoRef.current.value, 
        horarioInicio: newAmamentacao.horarioInicio, 
        horarioFim: newAmamentacao.horarioFim 
      }
    ];
    setAmamentacoes(updatedAmamentacoes);
    saveToLocalStorage('amamentacoes', updatedAmamentacoes);
    setNewAmamentacao({ tipo: '', horarioInicio: '', horarioFim: '', observacao: '', quantidade: '', lado: '' });
  };

  useEffect(() => {
    setBebê(bebê);
  }, [bebê, setBebê]);

  const CardWrapper = styled(Card)({
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
  });

  const ButtonWrapper = styled(Button)({
    borderRadius: '20px',
    marginTop: '10px',
  });

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" align="center" color="primary" gutterBottom>
        {t('babyInfo')}
      </Typography>
      <CardWrapper>
        <CardContent>
          <Typography variant="h6">{t('babyName')}: {bebê.nome}</Typography>
          <Typography variant="h6">{t('weight')}: {formatWeight(bebê.peso)}</Typography>
          <Typography variant="h6">{t('length')}: {formatLength(bebê.comprimento)}</Typography>
        </CardContent>
      </CardWrapper>

      <Grid container spacing={3} justifyContent="center">
        {/* Card de Fralda */}
        <Grid item xs={12} sm={4}>
          <CardWrapper>
            <CardContent>
              <Typography variant="h6" color="primary" gutterBottom>{t('registerDiaper')}</Typography>
              <FormControl fullWidth style={{ marginBottom: '10px' }}>
                <InputLabel>{t('diaperType')}</InputLabel>
                <Select
                  value={newFralda.tipo}
                  onChange={(e) => setNewFralda({ ...newFralda, tipo: e.target.value })}
                  label={t('diaperType')}
                >
                  <MenuItem value="sujaDeUrina">{t('diaperStates.urine')}</MenuItem>
                  <MenuItem value="sujaDeFezes">{t('diaperStates.feces')}</MenuItem>
                  <MenuItem value="ambas">{t('diaperStates.both')}</MenuItem>
                  <MenuItem value="limpa">{t('diaperStates.clean')}</MenuItem>
                </Select>
              </FormControl>
              <TextField
                label={t('changeTime')}
                variant="outlined"
                type="time"
                fullWidth
                value={newFralda.horario}
                onChange={(e) => setNewFralda({ ...newFralda, horario: e.target.value })}
                style={{ marginBottom: '10px' }}
              />
              <TextField
                label={t('observation')}
                variant="outlined"
                fullWidth
                inputRef={observacaoFraldaRef}
                style={{ marginBottom: '10px' }}
              />
              <ButtonWrapper variant="contained" color="primary" onClick={handleAddFralda}>
                {t('addDiaper')}
              </ButtonWrapper>
            </CardContent>
          </CardWrapper>
        </Grid>

        {/* Card de Sono */}
        <Grid item xs={12} sm={4}>
          <CardWrapper>
            <CardContent>
              <Typography variant="h6" color="primary" gutterBottom>{t('registerSleep')}</Typography>
              <TextField
                label={t('startTime')}
                variant="outlined"
                type="time"
                fullWidth
                value={newSono.horarioInicio}
                onChange={(e) => setNewSono({ ...newSono, horarioInicio: e.target.value })}
                style={{ marginBottom: '10px' }}
              />
              <TextField
                label={t('endTime')}
                variant="outlined"
                type="time"
                fullWidth
                value={newSono.horarioFim}
                onChange={(e) => setNewSono({ ...newSono, horarioFim: e.target.value })}
                style={{ marginBottom: '10px' }}
              />
              <TextField
                label={t('observation')}
                variant="outlined"
                fullWidth
                inputRef={observacaoSonoRef}
                style={{ marginBottom: '10px' }}
              />
              <ButtonWrapper variant="contained" color="primary" onClick={handleAddSono}>
                {t('addSleep')}
              </ButtonWrapper>
            </CardContent>
          </CardWrapper>
        </Grid>

        {/* Card de Amamentação */}
        <Grid item xs={12} sm={4}>
          <CardWrapper>
            <CardContent>
              <Typography variant="h6" color="primary" gutterBottom>{t('registerBreastfeeding')}</Typography>
              <FormControl fullWidth style={{ marginBottom: '10px' }}>
                <InputLabel>{t('milkType')}</InputLabel>
                <Select
                  value={newAmamentacao.tipo}
                  onChange={(e) => setNewAmamentacao({ ...newAmamentacao, tipo: e.target.value })}
                  label={t('milkType')}
                >
                  <MenuItem value="mamadeira">{t('bottle')}</MenuItem>
                  <MenuItem value="seio">{t('breast')}</MenuItem>
                </Select>
              </FormControl>
              
              {newAmamentacao.tipo === 'mamadeira' && (
                <TextField
                  label={t('milkAmount')}
                  variant="outlined"
                  type="number"
                  fullWidth
                  value={newAmamentacao.quantidade}
                  onChange={(e) => setNewAmamentacao({ ...newAmamentacao, quantidade: e.target.value })}
                  style={{ marginBottom: '10px' }}
                />
              )}
              
              {newAmamentacao.tipo === 'seio' && (
                <FormControl fullWidth style={{ marginBottom: '10px' }}>
                  <InputLabel>{t('side')}</InputLabel>
                  <Select
                    value={newAmamentacao.lado}
                    onChange={(e) => setNewAmamentacao({ ...newAmamentacao, lado: e.target.value })}
                    label={t('side')}
                  >
                    <MenuItem value="direito">{t('right')}</MenuItem>
                    <MenuItem value="esquerdo">{t('left')}</MenuItem>
                    <MenuItem value="ambos">{t('both')}</MenuItem>
                  </Select>
                </FormControl>
              )}

              <TextField
                label={t('startTime')}
                variant="outlined"
                type="time"
                fullWidth
                value={newAmamentacao.horarioInicio}
                onChange={(e) => setNewAmamentacao({ ...newAmamentacao, horarioInicio: e.target.value })}
                style={{ marginBottom: '10px' }}
              />
              <TextField
                label={t('endTime')}
                variant="outlined"
                type="time"
                fullWidth
                value={newAmamentacao.horarioFim}
                onChange={(e) => setNewAmamentacao({ ...newAmamentacao, horarioFim: e.target.value })}
                style={{ marginBottom: '10px' }}
              />
              <TextField
                label={t('observation')}
                variant="outlined"
                fullWidth
                inputRef={observacaoAmamentacaoRef}
                style={{ marginBottom: '10px' }}
              />
              <ButtonWrapper variant="contained" color="primary" onClick={handleAddAmamentacao}>
                {t('addBreastfeeding')}
              </ButtonWrapper>
            </CardContent>
          </CardWrapper>
        </Grid>
      </Grid>

      <Divider style={{ margin: '30px 0' }} />

      <Typography variant="h5" color="secondary" gutterBottom>
        {t('diaperHistory')}
      </Typography>
      {fraldas.map((fralda, index) => (
        <CardWrapper key={index}>
          <CardContent>
            <Typography variant="body1">{`${t('type')}: ${fralda.tipo}`}</Typography>
            <Typography variant="body2">{`${t('observation')}: ${fralda.observacao}`}</Typography>
            <Typography variant="body2">{`${t('time')}: ${fralda.horario}`}</Typography>
          </CardContent>
        </CardWrapper>
      ))}

      <Divider style={{ margin: '30px 0' }} />

      <Typography variant="h5" color="secondary" gutterBottom>
        {t('sleepHistory')}
      </Typography>
      {sonos.map((sono, index) => (
        <CardWrapper key={index}>
          <CardContent>
            <Typography variant="body1">{`${t('start')}: ${sono.horarioInicio} | ${t('end')}: ${sono.horarioFim}`}</Typography>
            <Typography variant="body2">{`${t('observation')}: ${sono.observacao}`}</Typography>
          </CardContent>
        </CardWrapper>
      ))}

      <Divider style={{ margin: '30px 0' }} />

      <Typography variant="h5" color="secondary" gutterBottom>
        {t('breastfeedingHistory')}
      </Typography>
      {amamentacoes.map((amamentacao, index) => (
        <CardWrapper key={index}>
          <CardContent>
            <Typography variant="body1">{`${t('type')}: ${amamentacao.tipo}`}</Typography>
            {amamentacao.tipo === 'mamadeira' && (
              <Typography variant="body2">{`${t('quantity')}: ${amamentacao.quantidade} ml`}</Typography>
            )}
            {amamentacao.tipo === 'seio' && (
              <Typography variant="body2">{`${t('side')}: ${amamentacao.lado}`}</Typography>
            )}
            <Typography variant="body2">{`${t('observation')}: ${amamentacao.observacao}`}</Typography>
            <Typography variant="body2">{`${t('start')}: ${amamentacao.horarioInicio} | ${t('end')}: ${amamentacao.horarioFim}`}</Typography>
          </CardContent>
        </CardWrapper>
      ))}
    </div>
  );
};

export default Home;
