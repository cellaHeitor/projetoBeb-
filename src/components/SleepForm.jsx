import React, { useState } from 'react';
import { TextField, Button, Card, CardContent } from '@mui/material';

const SleepForm = ({ onSubmit }) => {
  const [horaInicio, setHoraInicio] = useState('');
  const [horaFim, setHoraFim] = useState('');
  const [observacao, setObservacao] = useState('');

  const handleSubmit = () => {
    if (horaInicio && horaFim) {
      onSubmit({ horaInicio, horaFim, observacao });
      setHoraInicio('');
      setHoraFim('');
      setObservacao('');
    }
  };

  return (
    <Card>
      <CardContent>
        <h3>Registro de Sono</h3>
        <TextField
          label="Hora de Início"
          type="time"
          value={horaInicio}
          onChange={(e) => setHoraInicio(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Hora de Fim"
          type="time"
          value={horaFim}
          onChange={(e) => setHoraFim(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Observação"
          value={observacao}
          onChange={(e) => setObservacao(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button onClick={handleSubmit} variant="contained" color="primary">
          Adicionar
        </Button>
      </CardContent>
    </Card>
  );
};

export default SleepForm;
