import React, { useState } from 'react';
import { TextField, Button, Card, CardContent, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const FeedingForm = ({ onSubmit }) => {
  const [tipo, setTipo] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [lado, setLado] = useState('');
  const [observacao, setObservacao] = useState('');
  const [horaInicio, setHoraInicio] = useState('');
  const [horaFim, setHoraFim] = useState('');

  const handleSubmit = () => {
    if (tipo && horaInicio && horaFim) {
      onSubmit({ tipo, quantidade, lado, horaInicio, horaFim, observacao });
      setTipo('');
      setQuantidade('');
      setLado('');
      setHoraInicio('');
      setHoraFim('');
      setObservacao('');
    }
  };

  return (
    <Card>
      <CardContent>
        <h3>Registro de Amamentação</h3>
        <FormControl fullWidth margin="normal">
          <InputLabel>Tipo</InputLabel>
          <Select
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
            label="Tipo"
          >
            <MenuItem value="Mamadeira">Mamadeira</MenuItem>
            <MenuItem value="Seio">Seio</MenuItem>
          </Select>
        </FormControl>
        {tipo === 'Mamadeira' && (
          <TextField
            label="Quantidade (ml)"
            type="number"
            value={quantidade}
            onChange={(e) => setQuantidade(e.target.value)}
            fullWidth
            margin="normal"
          />
        )}
        {tipo === 'Seio' && (
          <FormControl fullWidth margin="normal">
            <InputLabel>Lado</InputLabel>
            <Select
              value={lado}
              onChange={(e) => setLado(e.target.value)}
              label="Lado"
            >
              <MenuItem value="Direito">Direito</MenuItem>
              <MenuItem value="Esquerdo">Esquerdo</MenuItem>
              <MenuItem value="Ambos">Ambos</MenuItem>
            </Select>
          </FormControl>
        )}
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

export default FeedingForm;
