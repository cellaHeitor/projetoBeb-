import React, { useState } from 'react';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Card, CardContent } from '@mui/material';

const DiaperForm = ({ onSubmit }) => {
  const [status, setStatus] = useState('');
  const [observacao, setObservacao] = useState('');
  const [horaTroca, setHoraTroca] = useState('');

  const handleSubmit = () => {
    if (status && horaTroca) {
      onSubmit({ status, horaTroca, observacao });
      setStatus('');
      setHoraTroca('');
      setObservacao('');
    }
  };

  return (
    <Card>
      <CardContent>
        <h3>Troca de Fralda</h3>
        <FormControl fullWidth margin="normal">
          <InputLabel>Status</InputLabel>
          <Select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            label="Status"
          >
            <MenuItem value="Limpa">Limpa</MenuItem>
            <MenuItem value="Suja de Urina">Suja de Urina</MenuItem>
            <MenuItem value="Suja de Fezes">Suja de Fezes</MenuItem>
            <MenuItem value="Ambas">Ambas</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Hora da Troca"
          type="time"
          value={horaTroca}
          onChange={(e) => setHoraTroca(e.target.value)}
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

export default DiaperForm;
