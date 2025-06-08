import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { useTranslation } from 'react-i18next';

export default function Informazioni({ onClose }) {
  const { t, i18n } = useTranslation();
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <Text style={styles.closeButtonText}>✕</Text>
        </TouchableOpacity>
        <Text style={styles.title}>{t('menu.information', 'Information')}</Text>
      </View>
      
      <ScrollView style={styles.content}>
        <Text style={styles.appName}>Flomindy</Text>
        <Text style={styles.version}>{t('information.version', 'Version')} 1.0.0</Text>
        
        <Text style={styles.sectionTitle}>
          {t('information.aboutTitle', 'About the App')}
        </Text>
        <Text style={styles.paragraph}>
          {t('information.aboutText', 'Flomindy is a patented application designed to enhance mental performance through a process called "neural entrainment". Using specific frequencies of light flickering, the app synchronizes brainwaves, optimizing the mental state most suitable for the activity you are performing.')}
        </Text>
        
        <Text style={styles.sectionTitle}>
          {t('information.developersTitle', 'Development Team')}
        </Text>
        <Text style={styles.paragraph}>
          {t('information.developersText', 'Concept and development were entirely carried out by the Yike Teck Co.LTD Development Team. The application is the result of deep knowledge in both technological and cognitive fields.')}
        </Text>
        
        <Text style={styles.sectionTitle}>
          {t('information.contactTitle', 'Contacts')}
        </Text>
        <View style={styles.contactItem}>
          <Text style={styles.contactLabel}>{t('information.emailLabel', 'Email:')}</Text>
          <TouchableOpacity onPress={() => Linking.openURL('mailto:info@flomindy.com')}>
            <Text style={styles.linkText}>info@flomindy.com</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.contactItem}>
          <Text style={styles.contactLabel}>{t('information.websiteLabel', 'Website:')}</Text>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.flomindy.com')}>
            <Text style={styles.linkText}>www.flomindy.com</Text>
          </TouchableOpacity>
        </View>
        
        <Text style={styles.sectionTitle}>
          {t('information.propertyTitle', 'Intellectual Property')}
        </Text>
        <Text style={styles.paragraph}>
          {t('information.propertyText', 'Flomindy is a patented application. Unauthorized reproduction, distribution, or modification is strictly prohibited. For licensing requests or intellectual property questions, please contact us directly.')}
        </Text>
        
        <Text style={styles.sectionTitle}>
          {t('information.legalNotesTitle', 'Legal Notes')}
        </Text>
        <Text style={styles.paragraph}>
          {t('information.legalNotesText', 'The use of the app is subject to current regulations on privacy and personal data protection. For more information, please contact us.')}
        </Text>
        
        <Text style={styles.copyrightText}>{t('information.copyright', '© 2025 Flomindy. All rights reserved.')}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

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
  appName: {
    color: '#8ED054',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  version: {
    color: '#AAAAAA',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    color: '#8ED054',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 15,
  },
  paragraph: {
    color: 'white',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
  },
  contactItem: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  contactLabel: {
    color: 'white',
    fontSize: 16,
    width: 80,
  },
  linkText: {
    color: '#8ED054',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  copyrightText: {
    color: '#AAAAAA',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 20,
  }
});