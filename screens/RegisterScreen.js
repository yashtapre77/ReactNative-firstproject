import React from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';

const RegisterScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.subtitle}>Create an account so you can explore all the existing jobs</Text>
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.footerText}>Already have an account?</Text>
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
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 16,
    paddingHorizontal: 20,
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

export default RegisterScreen;