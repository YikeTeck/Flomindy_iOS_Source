import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';

export default function Disclaimer({ onClose }) {
  const { t, i18n } = useTranslation();
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <Text style={styles.closeButtonText}>✕</Text>
        </TouchableOpacity>
        <Text style={styles.title}>{t('menu.disclaimer', 'Disclaimer')}</Text>
      </View>
      
      <ScrollView style={styles.content}>
        <Text style={styles.warningTitle}>
          {t('disclaimer.warningTitle', 'Important Notice')}
        </Text>
        
        <View style={styles.bulletPoints}>
          <Text style={styles.bulletPoint}>• {t('disclaimer.bullet1', 'Flomindy is a cognitive enhancement support tool and not a medical device')}</Text>
          <Text style={styles.bulletPoint}>• {t('disclaimer.bullet2', 'Do not use Flomindy if you have a history of epilepsy or photosensitivity')}</Text>
          <Text style={styles.bulletPoint}>• {t('disclaimer.bullet3', 'Immediately discontinue use if you experience discomfort, dizziness, headache, or other negative symptoms')}</Text>
          <Text style={styles.bulletPoint}>• {t('disclaimer.bullet4', 'Consult a physician before use if you have any neurological condition')}</Text>
          <Text style={styles.bulletPoint}>• {t('disclaimer.bullet5', 'Results may vary from person to person')}</Text>
          <Text style={styles.bulletPoint}>• {t('disclaimer.bullet6', 'Do not use while driving or operating machinery')}</Text>
        </View>
        
        <Text style={styles.paragraph}>
          {t('disclaimer.mainText', 'The information provided by Flomindy is based on scientific research, but the app is not a substitute for professional medical advice. Use of the app is at your own risk.')}
        </Text>
        
        <Text style={styles.sectionTitle}>
          {t('disclaimer.liabilityTitle', 'Liability Limitations')}
        </Text>
        <Text style={styles.paragraph}>
          {t('disclaimer.liabilityText', 'The developers of Flomindy are not responsible for any direct, indirect, or consequential damages arising from the use or inability to use the app. The user uses the app at their own risk and responsibility.')}
        </Text>
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
  warningTitle: {
    color: '#F49A3A',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  paragraph: {
    color: 'white',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
  },
  sectionTitle: {
    color: '#8ED054',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 15,
  },
  bulletPoints: {
    marginBottom: 20,
  },
  bulletPoint: {
    color: 'white',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
  },
  bold: {
    fontWeight: 'bold',
  }
});