// services/localStorageService.js

const LOCAL_STORAGE_KEY_USER = 'user';
const LOCAL_STORAGE_KEY_BEBE = 'bebé'; 
const LOCAL_STORAGE_KEY_IDIOMA = 'idioma'; 

// Função para salvar dados no localStorage
export const saveToLocalStorage = (key, value) => {
  try {
    if (value !== undefined && value !== null) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  } catch (error) {
    console.error('Erro ao salvar no localStorage:', error);
  }
};

export const loadFromLocalStorage = (key) => {
  try {
    const storedData = localStorage.getItem(key);  

    if (storedData) {
      try {
        const parsedData = JSON.parse(storedData);  
        return parsedData;  
      } catch (error) {
        return storedData;  
      }
    }
    return null;  
  } catch (error) {
    console.error('Erro ao carregar do localStorage:', error);
    return null;
  }
};

export const removeFromLocalStorage = (key) => {
  try {
    localStorage.removeItem(key); 
  } catch (error) {
    console.error('Erro ao remover do localStorage:', error);
  }
};

export const saveUserData = (userData) => {
  saveToLocalStorage(LOCAL_STORAGE_KEY_USER, userData);  
};

export const loadUserData = () => {
  return loadFromLocalStorage(LOCAL_STORAGE_KEY_USER);  
};

export const saveBabyData = (babyData) => {
  saveToLocalStorage(LOCAL_STORAGE_KEY_BEBE, babyData); 
};

export const loadBabyData = () => {
  return loadFromLocalStorage(LOCAL_STORAGE_KEY_BEBE);  
}

export const saveLanguage = (language) => {
  saveToLocalStorage(LOCAL_STORAGE_KEY_IDIOMA, language);  
};

export const loadLanguage = () => {
  return loadFromLocalStorage(LOCAL_STORAGE_KEY_IDIOMA); 
};

export const clearAllData = () => {
  removeFromLocalStorage(LOCAL_STORAGE_KEY_BEBE);  
  removeFromLocalStorage(LOCAL_STORAGE_KEY_IDIOMA); 
  removeFromLocalStorage(LOCAL_STORAGE_KEY_USER);  
};
