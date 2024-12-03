import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text, HelperText } from 'react-native-paper';

const LoginScreen = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleLogin = () => {
    if (username.trim() === '' || password.trim() === '') {
      setError(true);
      return;
    }
    setError(false);
    onLogin();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enterprise Login</Text>

      <TextInput
        label="Username"
        mode="outlined"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
        left={<TextInput.Icon name="account" />}
      />
      <HelperText type="error" visible={error && username.trim() === ''}>
        Username is required.
      </HelperText>

      <TextInput
        label="Password"
        mode="outlined"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry
        left={<TextInput.Icon name="lock" />}
      />
      <HelperText type="error" visible={error && password.trim() === ''}>
        Password is required.
      </HelperText>

      <Button
        mode="contained"
        onPress={handleLogin}
        style={styles.loginButton}
        contentStyle={{ padding: 10 }}
      >
        Login
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    marginBottom: 10,
  },
  loginButton: {
    marginTop: 20,
    backgroundColor: '#4caf50',
  },
});

export default LoginScreen;
