import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, ImageBackground, Alert } from 'react-native';
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useFonts } from "expo-font";
import backgroundImage from '../assets/image1.png'; 

const SignUp = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const isFormValid = () =>
      email.includes("@") && password === confirmPassword && password.length >= 6;

    const handleSignup = async () => {
      if (!isFormValid()) {
        Alert.alert(
          "Try again",
          "Please enter a valid email and matching passwords with at least 6 characters"
        );
        return;
      }

      try {
        await createUserWithEmailAndPassword(auth, email, password);
        Alert.alert("Success", "Account created successfully");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        navigation.navigate("SignIn");
      } catch (error) {
        Alert.alert("Error", `Error creating user: ${error.message}`);
      }
    };

    return (
      <ImageBackground 
        source={backgroundImage}
        style={styles.background}
        resizeMode="cover"
      >
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <Text style={styles.title}>Create new                             account</Text>
          <TextInput
            style={styles.input}
            placeholder="Email Address"
            placeholderTextColor="#aaa"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#aaa"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor="#aaa"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />

          <TouchableOpacity style={styles.button} onPress={handleSignup}>
            <Text style={styles.buttonText}>Create Account</Text>
          </TouchableOpacity>
          
          <Text style={styles.footerText}>
            Already have an account?{' '}
            <Text style={styles.linkText} onPress={() => navigation.navigate('SignIn')}>
              Sign In
            </Text>
          </Text>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
};

export default SignUp;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#fff', 
    marginBottom: 50,
  },
  input: {
    width: '100%',
    padding: 14,
    borderColor: '#333',
    borderWidth: 1,
    borderRadius: 100,
    marginVertical: 10,
    backgroundColor: 'rgba(50, 50, 50, 0.9)', 
    color: '#fff',
  },
  button: {
    backgroundColor: '#af33ff',
    paddingVertical: 15,
    borderRadius: 100,
    width: '60%',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  footerText: {
    marginTop: 20,
    color: '#fff', 
    fontSize: 14,
  },
  linkText: {
    color: '#3478f6',
    fontWeight: '600',
  },
});
