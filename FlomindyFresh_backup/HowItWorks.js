import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';

export default function HowItWorks({ onClose }) {
  const { t, i18n } = useTranslation();
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <Text style={styles.closeButtonText}>✕</Text>
        </TouchableOpacity>
        <Text style={styles.title}>{t('menu.howItWorks', 'How It Works')}</Text>
      </View>
      
      <ScrollView style={styles.content}>
        <Text style={styles.paragraph}>
          {t('howItWorks.description', 'Flomindy is an innovative app that enhances mental performance during daily device use. By synchronizing brainwaves (EEG) through screen flickering, you can use your device normally while maintaining your brain at the optimal frequency for your activity.')}
        </Text>
        
        <Text style={styles.sectionTitle}>
          {t('howItWorks.howItWorksTitle', 'How It Works')}
        </Text>
        <Text style={styles.paragraph}>
          {t('howItWorks.howItWorksText', 'Light flickering at specific frequencies induces the brain to synchronize (entrainment) with these frequencies, activating specific mental states:')}
        </Text>
        
        <View style={styles.bulletPoints}>
          <Text style={styles.bulletPoint}>• <Text style={styles.bold}>{t('brainwaves.deltaTheta', 'Delta/Theta')}</Text>: {t('brainwaves.sleepRelaxation', 'Sleep & Relaxation')}</Text>
          <Text style={styles.bulletPoint}>• <Text style={styles.bold}>{t('brainwaves.theta', 'Theta')}</Text>: {t('brainwaves.deepRelaxation', 'Deep Relaxation')}</Text>
          <Text style={styles.bulletPoint}>• <Text style={styles.bold}>{t('brainwaves.alphaLow', 'Alpha (Low)')}</Text>: {t('brainwaves.deepLearning', 'Deep Learning')}</Text>
          <Text style={styles.bulletPoint}>• <Text style={styles.bold}>{t('brainwaves.alphaHigh', 'Alpha (High)')}</Text>: {t('brainwaves.dynamicLearning', 'Dynamic Learning')}</Text>
          <Text style={styles.bulletPoint}>• <Text style={styles.bold}>{t('brainwaves.beta', 'Beta')}</Text>: {t('brainwaves.problemSolving', 'Problem Solving')}</Text>
        </View>
        
        <Text style={styles.sectionTitle}>
          {t('howItWorks.howToUseTitle', 'How to use Flomindy')}
        </Text>
        <View style={styles.bulletPoints}>
          <Text style={styles.bulletPoint}>1. {t('howItWorks.howToUseStep1', 'Choose the desired frequency using the slider based on your activity')}</Text>
          <Text style={styles.bulletPoint}>2. {t('howItWorks.howToUseStep2', 'Adjust the intensity with "Deep Effect"')}</Text>
          <Text style={styles.bulletPoint}>3. {t('howItWorks.howToUseStep3', 'Set an optional timer')}</Text>
          <Text style={styles.bulletPoint}>4. {t('howItWorks.howToUseStep4', 'Press START to activate the effect')}</Text>
          <Text style={styles.bulletPoint}>5. {t('howItWorks.howToUseStep5', 'Press BACKGROUND to continue your normal activities while Flomindy keeps your brain synchronized at the chosen frequency')}</Text>
        </View>
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