import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function Cliente({ navigation }) {
  const [cpf, setCpf] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Cliente</Text>
      
      <TextInput 
        style={styles.input} 
        placeholder="CPF" 
        placeholderTextColor="#068BFF"
        value={cpf}
        onChangeText={setCpf}
        keyboardType="numeric"
      />
      <TextInput 
        style={styles.input} 
        placeholder="Nome" 
        placeholderTextColor="#068BFF"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput 
        style={styles.input} 
        placeholder="E-mail" 
        placeholderTextColor="#068BFF"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput 
        style={styles.input} 
        placeholder="Senha" 
        placeholderTextColor="#068BFF"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry={true}
      />
      <TextInput 
        style={styles.input} 
        placeholder="Confirmar Senha" 
        placeholderTextColor="#068BFF"
        value={confirmarSenha}
        onChangeText={setConfirmarSenha}
        secureTextEntry={true}
      />

      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button 
            title="Inicio" 
            onPress={() => navigation.navigate('Inicio')} 
            color="#068BFF"
          />
        </View>
        <View style={styles.button}>
          <Button 
            title="Sobre" 
            onPress={() => navigation.navigate('Sobre')} 
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
    fontFamily: 'Arimo',
    color: '#068BFF',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#068BFF',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    fontFamily: 'Arimo',
    color: '#068BFF',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    width: '100%',
  },
  button: {
    flex: 1,
    marginHorizontal: 10,
  },
});
