import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';

export default function BasiScientifiche({ onClose }) {
  const { t, i18n } = useTranslation();
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <Text style={styles.closeButtonText}>✕</Text>
        </TouchableOpacity>
        <Text style={styles.title}>{t('menu.scientificBasis', 'Scientific Basis')}</Text>
      </View>
      
      <ScrollView style={styles.content}>
        <Text style={styles.paragraph}>
          {t('scientificBasis.description', 'Neural entrainment through light stimulation is documented by numerous scientific studies. Rhythmic visual stimulation at specific frequencies can influence the electrical activity of the brain (EEG).')}
        </Text>
        
        <Text style={styles.sectionTitle}>{t('scientificBasis.researchTitle', 'Key Research')}</Text>
        <View style={styles.bulletPoints}>
          <Text style={styles.bulletPoint}>• {t('scientificBasis.research1', 'Studies by Adrian & Matthews (1934) first demonstrated the brain\'s response to rhythmic light stimulation')}</Text>
          <Text style={styles.bulletPoint}>• {t('scientificBasis.research2', 'Herrmann\'s research (2001) confirms that visual stimulation can induce synchronized EEG oscillations')}</Text>
          <Text style={styles.bulletPoint}>• {t('scientificBasis.research3', 'Various clinical studies have shown benefits in learning, attention, and relaxation')}</Text>
        </View>
        
        <Text style={styles.sectionTitle}>{t('scientificBasis.entrainmentTitle', 'Entrainment Phenomenon')}</Text>
        <Text style={styles.paragraph}>
          {t('scientificBasis.entrainmentText', 'Entrainment (synchronization) is a fundamental principle of physics that occurs when rhythmic systems interact. In the brain, neurons tend to synchronize with external rhythmic stimuli, such as light flashing at specific frequencies.')}
        </Text>
        
        <Text style={styles.sectionTitle}>{t('scientificBasis.applicationsTitle', 'Practical Applications')}</Text>
        <Text style={styles.paragraph}>
          {t('scientificBasis.applicationsText', 'Using specific frequencies to influence brain activity has several applications:')}
        </Text>
        <View style={styles.bulletPoints}>
          <Text style={styles.bulletPoint}>• {t('scientificBasis.application1', 'Improving attention and concentration')}</Text>
          <Text style={styles.bulletPoint}>• {t('scientificBasis.application2', 'Supporting learning and memorization')}</Text>
          <Text style={styles.bulletPoint}>• {t('scientificBasis.application3', 'Relaxation techniques and stress management')}</Text>
          <Text style={styles.bulletPoint}>• {t('scientificBasis.application4', 'Optimizing cognitive performance')}</Text>
        </View>
        
        <Text style={styles.sectionTitle}>{t('scientificBasis.bibliographyTitle', 'Bibliography')}</Text>
        <View style={styles.bulletPoints}>
          <Text style={styles.bulletPoint}>• {t('scientificBasis.bibliography1', 'Adrian ED, Matthews BH. (1934). "The Berger rhythm: potential changes from the occipital lobes in man." Brain, 57(4), 355-385.')}</Text>
          <Text style={styles.bulletPoint}>• {t('scientificBasis.bibliography2', 'Herrmann CS. (2001). "Human EEG responses to 1-100 Hz flicker: resonance phenomena in visual cortex and their potential correlation to cognitive phenomena." Experimental Brain Research, 137(3-4), 346-353.')}</Text>
          <Text style={styles.bulletPoint}>• {t('scientificBasis.bibliography3', 'Notbohm A, Kurths J, Herrmann CS. (2016). "Modification of brain oscillations via rhythmic light stimulation provides evidence for entrainment but not for superposition of event-related responses." Frontiers in Human Neuroscience, 10, 10.')}</Text>
          <Text style={styles.bulletPoint}>• {t('scientificBasis.bibliography4', 'Yao J, Zhang L, Zhang C, et al. (2024). "Rhythmic gamma frequency light flickering ameliorates stress-related behaviors and cognitive deficits by modulating neuroinflammatory response through IL-12-Mediated cytokines production in chronic stress-induced mice." Brain, Behavior, and Immunity.')}</Text>
          <Text style={styles.bulletPoint}>• {t('scientificBasis.bibliography5', 'Mankowska M, Mojs E, Samborska-Sablik A, Jarema M. (2022). "Neuropsychological and Neurophysiological Mechanisms behind Flickering Light: A Narrative Review." Frontiers in Psychology.')}</Text>
          <Text style={styles.bulletPoint}>• {t('scientificBasis.bibliography6', 'Maylor SA, Birak DJ, Graham KS. (2006). "10 Hz flicker improves recognition memory in older people." BMC Neuroscience, 7, 21.')}</Text>
          <Text style={styles.bulletPoint}>• {t('scientificBasis.bibliography7', 'Al-Abduljawad MZ, et al. (2025). "Flickering white light stimulation at 60 Hz induces strong somatic and neural responses." bioRxiv.')}</Text>
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