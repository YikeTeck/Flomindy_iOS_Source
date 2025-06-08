import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text, StyleSheet } from 'react-native';

// Componente temporaneo per le schermate che verranno implementate in seguito
const PlaceholderScreen = ({ route }) => (
  <View style={styles.placeholderContainer}>
    <Text style={styles.placeholderText}>{route.name}</Text>
    <Text style={styles.placeholderSubtext}>Contenuto in arrivo</Text>
  </View>
);

// Crea il drawer navigator
const Drawer = createDrawerNavigator();

function AppDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#121824',
        },
        headerTintColor: '#FFFFFF',
        drawerStyle: {
          backgroundColor: '#121824',
        },
        drawerActiveTintColor: '#8ED054',
        drawerInactiveTintColor: '#FFFFFF',
      }}
    >
      <Drawer.Screen
        name="Home"
        component={PlaceholderScreen}
        options={{ title: 'Home' }}
      />
      <Drawer.Screen
        name="HowItWorks"
        component={PlaceholderScreen}
        options={{ title: 'Come Funziona' }}
      />
      <Drawer.Screen
        name="ScientificBasis"
        component={PlaceholderScreen}
        options={{ title: 'Basi Scientifiche' }}
      />
      <Drawer.Screen
        name="Settings"
        component={PlaceholderScreen}
        options={{ title: 'Impostazioni' }}
      />
      <Drawer.Screen
        name="About"
        component={PlaceholderScreen}
        options={{ title: 'Informazioni' }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  placeholderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121824',
  },
  placeholderText: {
    fontSize: 24,
    color: 'white',
    marginBottom: 10,
  },
  placeholderSubtext: {
    fontSize: 16,
    color: '#8ED054',
  },
});

export default AppDrawer;