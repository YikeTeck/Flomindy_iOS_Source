import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Localization from 'expo-localization';

// Importa i file di traduzione
import translationEN from './translations/en.json';
import translationIT from './translations/it.json';
import translationZH from './translations/zh.json';

// Determina la lingua iniziale basata sul dispositivo
const deviceLanguage = Localization.locale.split('-')[0]; // Ottiene il codice lingua (ad es. "zh" da "zh-CN")
const supportedLanguages = ['it', 'en', 'zh']; // Elenco di lingue supportate
const defaultLng = supportedLanguages.includes(deviceLanguage) ? deviceLanguage : 'en';

// Configurazione i18n
i18n
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    resources: {
      en: {
        translation: translationEN
      },
      it: {
        translation: translationIT
      },
      zh: {
        translation: translationZH
      }
    },
    lng: defaultLng, // Usa la lingua del dispositivo se supportata, altrimenti inglese
    fallbackLng: 'en', // Usa inglese come fallback (più universale)
    interpolation: {
      escapeValue: false
    }
  });

// Funzione per cambiare lingua
export const changeLanguage = async (lang) => {
  try {
    await i18n.changeLanguage(lang);
    await AsyncStorage.setItem('language', lang);
  } catch (error) {
    console.error('Errore nel cambiare lingua:', error);
  }
};

// Carica la lingua salvata
const loadSavedLanguage = async () => {
  try {
    const savedLanguage = await AsyncStorage.getItem('language');
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  } catch (error) {
    console.error('Errore nel caricare la lingua:', error);
  }
};

loadSavedLanguage();

export default i18n;