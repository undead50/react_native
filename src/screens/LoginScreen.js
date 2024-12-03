import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

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
      {/* Logo Section */}
      <Image
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Apple_Music_logo.svg/512px-Apple_Music_logo.svg.png',
        }}
        style={styles.logo}
      />
      <Text style={styles.title}>Sign in to your account</Text>

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Apple ID"
          placeholderTextColor="#999"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />
      </View>
      {error && username.trim() === '' && (
        <Text style={styles.errorText}>Apple ID is required.</Text>
      )}

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#999"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>
      {error && password.trim() === '' && (
        <Text style={styles.errorText}>Password is required.</Text>
      )}

      {/* Login Button */}
      <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Log In</Text>
      </TouchableOpacity>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Don’t have an Apple ID?{' '}
          <Text style={styles.linkText}>Create yours now</Text>.
        </Text>
        <Text style={styles.footerText}>
          <Text style={styles.linkText}>Forgot your password?</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 30,
    textAlign: 'center',
  },
  inputContainer: {
    width: '100%',
    backgroundColor: '#f7f7f7',
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  input: {
    height: 50,
    fontSize: 16,
    color: '#333',
  },
  errorText: {
    color: '#e53935',
    fontSize: 12,
    alignSelf: 'flex-start',
    marginLeft: 10,
    marginBottom: 10,
  },
  loginButton: {
    width: '100%',
    paddingVertical: 15,
    backgroundColor: '#1877f2', // Facebook's signature blue
    borderRadius: 5, // Slight rounding for a modern look
    alignItems: 'center',
    marginTop: 20,
  },
  loginButtonText: {
    color: '#ffffff', // White text for contrast
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  footer: {
    marginTop: 30,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
    marginVertical: 5,
  },
  linkText: {
    color: '#007aff',
    fontWeight: '600',
  },
});

export default LoginScreen;
