import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';

export default function Sobre({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Sobre o App</Text>
      <Text style={styles.description}>
        Este aplicativo permite navegar entre as telas Inicio, Sobre e Cliente, oferecendo um fluxo simples de navegação e coleta de dados para cadastro de clientes.
      </Text>
      <Button 
        title="Voltar para Inicio" 
        onPress={() => navigation.navigate('Inicio')} 
        color="#068BFF" 
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#068BFF',
    fontFamily: 'Arimo',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: '#333',
    fontFamily: 'Arimo',
    textAlign: 'center',
    marginBottom: 20,
  },
});
