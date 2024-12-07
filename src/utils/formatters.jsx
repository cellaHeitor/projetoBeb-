export const formatDate = (date) => {
    if (!date) return '';
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('pt-BR', options); // Formato de data brasileiro
  };
  
  export const formatTime = (time) => {
    if (!time) return '';
    const date = new Date(time);
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  };
  
  export const formatNumber = (number) => {
    if (number === null || number === undefined) return '0';
    return number.toLocaleString('pt-BR'); 
  };
  
  export const formatCurrency = (amount) => {
    if (amount === null || amount === undefined) return 'R$ 0,00';
    return amount.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };
  
  export const formatWeight = (weight) => {
    if (weight === null || weight === undefined) return '0 kg';
    return `${weight} kg`;
  };
  
  export const formatLength = (length) => {
    if (length === null || length === undefined) return '0 cm';
    if (length >= 100) {
      return `${(length / 100).toFixed(2)} m`; 
    }
    return `${length} cm`;
  };
  