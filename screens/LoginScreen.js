import React from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Here</Text>
      <Text style={styles.subtitle}>Welcome back, you've been missed!</Text>
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <TouchableOpacity style={styles.forgotButton}>
        <Text style={styles.forgotText}>Forgot your password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign in</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.footerText}>Create new account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    padding: 15,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
  },
  forgotButton: {
    alignSelf: 'flex-end',
    marginRight: '10%',
    marginBottom: 20,
  },
  forgotText: {
    color: '#2E5BFF',
  },
  button: {
    backgroundColor: '#2E5BFF',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  footerText: {
    color: '#2E5BFF',
  },
});

export default LoginScreen;