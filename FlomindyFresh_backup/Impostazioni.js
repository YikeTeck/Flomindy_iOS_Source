import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Switch, Platform, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTranslation } from 'react-i18next';
import { changeLanguage } from './i18n';

export default function Impostazioni({ onClose }) {
  const { t, i18n } = useTranslation();
  const [notifications, setNotifications] = useState(true);
  const [showLanguages, setShowLanguages] = useState(false);
  
  // Lista delle lingue disponibili
  const languages = [
    { code: 'it', name: 'Italiano' },
    { code: 'en', name: 'English' },
    { code: 'zh', name: '中文' }
  ];

  // Funzione per ottenere il nome visualizzato della lingua
  const getLanguageName = (code) => {
    const lang = languages.find(l => l.code === code);
    return lang ? lang.name : 'Italiano';
  };

  // Gestisce il cambio lingua
  const handleLanguageChange = async (langCode) => {
    try {
      console.log("Cambio lingua a:", langCode);
      
      // Usa la funzione di cambio lingua importata dal file i18n.js
      await changeLanguage(langCode);
      
      // Forza un cambio lingua immediato usando direttamente i18n
      await i18n.changeLanguage(langCode);
      
      setShowLanguages(false);
      
      // Determina il testo dell'avviso in base alla lingua selezionata
      const alertTitle = langCode === 'it' ? "Lingua cambiata" : "Language Changed";
      const alertMessage = langCode === 'it' 
        ? "La lingua è stata cambiata con successo." 
        : "The language has been changed successfully.";
      
      // Mostra un messaggio e chiude le impostazioni
      Alert.alert(
        alertTitle,
        alertMessage,
        [
          { text: "OK", onPress: () => {
            if (onClose) onClose();
          }}
        ]
      );
    } catch (error) {
      console.error('Errore nel cambiare lingua:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <Text style={styles.closeButtonText}>✕</Text>
        </TouchableOpacity>
        <Text style={styles.title}>{t('menu.settings')}</Text>
      </View>
      
      <ScrollView style={styles.content}>
        <Text style={styles.sectionTitle}>{t('settings.language')}</Text>
        
        <TouchableOpacity 
          style={styles.languageSelector}
          onPress={() => setShowLanguages(!showLanguages)}
        >
          <Text style={styles.languageLabel}>{t('settings.currentLanguage')}</Text>
          <View style={styles.languageValue}>
            <Text style={styles.languageValueText}>{getLanguageName(i18n.language)}</Text>
            <Text style={styles.arrowIcon}>{showLanguages ? '▲' : '▼'}</Text>
          </View>
        </TouchableOpacity>
        
        {showLanguages && (
          <View style={styles.languageListContainer}>
            <ScrollView style={styles.languageList} nestedScrollEnabled={true}>
              {languages.map((lang) => (
                <TouchableOpacity 
                  key={lang.code} 
                  style={[
                    styles.languageItem,
                    i18n.language === lang.code && styles.languageItemActive
                  ]}
                  onPress={() => handleLanguageChange(lang.code)}
                >
                  <Text style={[
                    styles.languageItemText,
                    i18n.language === lang.code && styles.languageItemTextActive
                  ]}>
                    {lang.name}
                  </Text>
                  {i18n.language === lang.code && (
                    <Text style={styles.checkIcon}>✓</Text>
                  )}
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        )}
        
        <Text style={styles.sectionTitle}>{t('settings.notifications')}</Text>
        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>{t('settings.enableNotifications')}</Text>
          <Switch
            value={notifications}
            onValueChange={setNotifications}
            trackColor={{ false: '#767577', true: '#8ED054' }}
            thumbColor={notifications ? '#f4f3f4' : '#f4f3f4'}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// Stili invariati
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121824',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  closeButton: {
    padding: 10,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 20,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  sectionTitle: {
    color: '#8ED054',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 15,
  },
  languageSelector: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
  },
  languageLabel: {
    color: '#AAAAAA',
    fontSize: 14,
    marginBottom: 8,
  },
  languageValue: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  languageValueText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  arrowIcon: {
    color: '#8ED054',
    fontSize: 16,
  },
  languageListContainer: {
    maxHeight: 300,
    marginBottom: 20,
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#333',
  },
  languageList: {
    backgroundColor: 'rgba(20, 30, 48, 1)',
  },
  languageItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  languageItemActive: {
    backgroundColor: 'rgba(142, 208, 84, 0.2)',
  },
  languageItemText: {
    color: 'white',
    fontSize: 16,
    ...Platform.select({
      ios: {
        fontWeight: '400',
      },
      android: {
        fontFamily: 'sans-serif',
      },
    }),
  },
  languageItemTextActive: {
    color: '#8ED054',
    fontWeight: 'bold',
  },
  checkIcon: {
    color: '#8ED054',
    fontSize: 20,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 8,
  },
  settingLabel: {
    color: 'white',
    fontSize: 16,
  }
});