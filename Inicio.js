import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

export default function Inicio({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Título da página */}
      <Text style={styles.title}>Inicio</Text>

      {/* Imagem no centro da tela */}
      <Image 
        source={require('./splash_image.png')} // Imagem local
        style={styles.image}
      />

      {/* Botões para navegar */}
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button 
            title="Sobre" 
            onPress={() => navigation.navigate('Sobre')} 
            color="#068BFF" 
          />
        </View>
        <View style={styles.button}>
          <Button 
            title="Cliente" 
            onPress={() => navigation.navigate('Cliente')} 
            color="#068BFF" 
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: 'Arimo',
    color: '#068BFF',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
  button: {
    flex: 1,
    marginHorizontal: 10,
  },
});
