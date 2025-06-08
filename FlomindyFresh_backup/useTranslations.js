import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Importa i file di traduzione
import it from './translations/it.json';
import en from './translations/en.json';

// Raccogli tutte le traduzioni
const translations = {
  it,
  en
};

// Lingua predefinita
let currentLang = 'it';
let listeners = [];

export const getCurrentLanguage = () => currentLang;

export const setAppLanguage = async (lang) => {
  if (lang === currentLang) return;
  
  currentLang = lang;
  try {
    await AsyncStorage.setItem('language', lang);
  } catch (e) {
    console.error('Error saving language', e);
  }
  
  // Notifica tutti i listener
  listeners.forEach(listener => listener(lang));
};

export const useTranslations = () => {
  const [language, setLanguage] = useState(currentLang);
  
  useEffect(() => {
    // Carica la lingua salvata all'avvio del componente
    const loadLanguage = async () => {
      try {
        const savedLang = await AsyncStorage.getItem('language');
        if (savedLang && translations[savedLang]) {
          currentLang = savedLang;
          setLanguage(savedLang);
        }
      } catch (e) {
        console.error('Error loading language', e);
      }
    };
    
    loadLanguage();
    
    // Aggiungi questo componente come listener
    const listenerCallback = (newLang) => {
      setLanguage(newLang);
    };
    
    listeners.push(listenerCallback);
    
    // Pulizia
    return () => {
      listeners = listeners.filter(listener => listener !== listenerCallback);
    };
  }, []);
  
  // Funzione per tradurre
  const t = (key) => {
    try {
      const keys = key.split('.');
      let result = translations[language];
      
      for (const k of keys) {
        if (!result || !result[k]) return key; // Ritorna la chiave se la traduzione non viene trovata
        result = result[k];
      }
      
      return result;
    } catch (e) {
      console.error('Translation error for key:', key, e);
      return key;
    }
  };
  
  return { t, language, setLanguage: setAppLanguage };
};