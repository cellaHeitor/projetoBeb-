// i18n.jsx

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  pt: {
    translation: {
      settings: 'Configurações',
      babyInfo: 'Informações do Bebê',
      babyName: 'Nome do Bebê',
      weight: 'Peso',
      length: 'Comprimento',
      save: 'Salvar',
      selectLanguage: 'Selecionar Idioma',
      logout: 'Sair',
      pt: 'Português',
      en: 'Inglês',
      es: 'Espanhol',
      diaper: 'Tipo de Fralda',
      observation: 'Observação',
      addDiaper: 'Adicionar Fralda',
      startTime: 'Horário de Início',
      endTime: 'Horário de Fim',
      addSleep: 'Adicionar Sono',
      milkType: 'Tipo de Leite',
      milkAmount: 'Quantidade (ml)',
      addBreastfeeding: 'Adicionar Amamentação',
      diaperType: 'Estado da Fralda',
      registerDiaper: 'Registrar Fralda',
      registerSleep: 'Registrar Sono',
      registerBreastfeeding: 'Registrar Amamentação',
      diaperHistory: 'Histórico de Fraldas',
      sleepHistory: 'Histórico de Sono',
      breastfeedingHistory: 'Histórico de Amamentação',
      changeTime: 'Troca de Fralda',
      type: 'Estado',
      start: 'Começou',
      end: 'Temrinou',
      bottle: 'Mamadeira',
      breast: 'Seios',
      side: 'Lado',
      right: 'Direito',
      left: 'Esquerdo',
      both: 'Ambos',
      quantity: 'Quantidade',
      time: 'Horário',
      
      diaperStates: {
        urine: 'Suja de Urina',
        feces: 'Suja de Fezes',
        both: 'Ambas',
        clean: 'Limpa',
      },
    },
  },
  en: {
    translation: {
      settings: 'Settings',
      babyInfo: 'Baby Information',
      babyName: 'Baby Name',
      weight: 'Weight',
      length: 'Length',
      save: 'Save',
      selectLanguage: 'Select Language',
      logout: 'Logout',
      pt: 'Portuguese',
      en: 'English',
      es: 'Spanish',
      diaper: 'Diaper Type',
      observation: 'Observation',
      addDiaper: 'Add Diaper',
      startTime: 'Start Time',
      endTime: 'End Time',
      addSleep: 'Add Sleep',
      milkType: 'Milk Type',
      milkAmount: 'Amount (ml)',
      addBreastfeeding: 'Add Feeding',
      diaperType: 'Diaper condition',
      registerDiaper: 'Register Diaper',
      registerSleep: 'Register Sleep',
      registerBreastfeeding: 'Register Breastfeeding',
      diaperHistory: 'Diaper History',
      sleepHistory: 'Sleep History',
      breastfeedingHistory: 'Breastfeeding History',
      changeTime: 'Diaper Change',
      type: 'Condition',
      start: 'Started',
      end: 'Ended',
      bottle: 'Feeding Bottle',
      breast: 'Breast',
      side: 'Side',
      right: 'Right',
      left: 'Left',
      both: 'Both',
      quantity: 'Quantity',
      time: 'Time',
      
      diaperStates: {
        urine: 'Urine Soiled',
        feces: 'Feces Soiled',
        both: 'Both',
        clean: 'Clean',
      },
    },
  },
  es: {
    translation: {
      settings: 'Configuraciones',
      babyInfo: 'Información del Bebé',
      babyName: 'Nombre del Bebé',
      weight: 'Peso',
      length: 'Longitud',
      save: 'Guardar',
      selectLanguage: 'Seleccionar Idioma',
      logout: 'Cerrar sesión',
      pt: 'Portugués',
      en: 'Inglés',
      es: 'Español',
      diaper: 'Tipo de Pañal',
      observation: 'Observación',
      addDiaper: 'Agregar Pañal',
      startTime: 'Hora de Inicio',
      endTime: 'Hora de Fin',
      addSleep: 'Agregar Sueño',
      milkType: 'Tipo de Leche',
      milkAmount: 'Cantidad (ml)',
      addBreastfeeding: 'Agregar Alimentación',
      diaperType: 'Condición del pañal',
      registerDiaper: 'Registrar pañal',
      registerBreastfeeding: 'Registrar Alimentación',
      registerSleep: 'Registrar El Sueño',
      diaperHistory: 'Historial de Pañales',
      sleepHistory: 'Historial de Sueño',
      breastfeedingHistory: 'Antecedentes de Lactancia Materna',
      changeTime: 'Cambio de pañal',
      type: 'Condición',
      start: 'Comenzó ',
      end: 'Terminado',
      bottle: 'Biberón',
      breast: 'Pecho',
      side: 'Lado',
      right: 'Derecho',
      left: 'Izquierdo',
      both: 'Ambos',
      quantity: 'Quantidad',
      time: 'Horario',
      
      diaperStates: {
        urine: 'Sucia de Orina',
        feces: 'Sucia de Heces',
        both: 'Ambas',
        clean: 'Limpia',
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('language') || 'pt', // Carregar o idioma do localStorage
  fallbackLng: 'pt', // Idioma padrão
  interpolation: {
    escapeValue: false, // Não escapa o valor
  },
});

export default i18n;