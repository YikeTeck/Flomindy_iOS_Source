import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { NativeModules, Platform } from 'react-native';

// Funzione per ottenere la lingua del dispositivo
const getDeviceLanguage = () => {
  const deviceLanguage = 
    Platform.OS === 'ios'
      ? NativeModules.SettingsManager.settings.AppleLocale || 
        NativeModules.SettingsManager.settings.AppleLanguages[0]
      : NativeModules.I18nManager.localeIdentifier;

  return deviceLanguage.substring(0, 2); // Ottiene i primi 2 caratteri (es. 'en', 'it', ecc.)
};

// Risorse linguistiche - iniziamo con italiano e inglese
const resources = {
  en: {
    translation: {
      // Menu items
      home: "Home",
      howItWorks: "How It Works",
      scientificBasis: "Scientific Basis",
      settings: "Settings",
      about: "About",
      
      // App content
      frequencyEEG: "Frequency EEG",
      deepEffect: "Deep Effect",
      timer: "Timer",
      start: "START",
      background: "Background",
      readyToFocus: "Ready to Focus",
      
      // Language selector
      language: "Language",
      systemDefault: "System Default"
    }
  },
  it: {
    translation: {
      // Menu items
      home: "Home",
      howItWorks: "Come Funziona",
      scientificBasis: "Basi Scientifiche",
      settings: "Impostazioni",
      about: "Informazioni",
      
      // App content
      frequencyEEG: "Frequenza EEG",
      deepEffect: "Effetto Profondo",
      timer: "Timer",
      start: "INIZIA",
      background: "Background",
      readyToFocus: "Pronto a Concentrarti",
      
      // Language selector
      language: "Lingua",
      systemDefault: "Predefinito di Sistema"
    }
  }
};

// Configura i18next
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: getDeviceLanguage(), // Usa la lingua del dispositivo come default
    fallbackLng: 'en',        // Fallback a inglese se la lingua non è disponibile
    interpolation: {
      escapeValue: false      // React già si occupa dell'escaping
    }
  });

export default i18n;