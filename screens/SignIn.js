import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, ImageBackground, Alert } from 'react-native';
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig.js";
import backgroundImage from '../assets/image3.png'; 

const SignIn = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                Alert.alert("User logged in successfully:", user.email);
                navigation.navigate("Dashboard"); 
            })
            .catch((error) => {
                Alert.alert("Error", "Invalid credentials");
            });
    };

    return (
        <ImageBackground 
            source={backgroundImage} 
            style={styles.background}
            resizeMode="cover"
        >
            <KeyboardAvoidingView style={styles.container} behavior="padding">
                <Text style={styles.title}>Log into your                                account</Text>
                
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

                <TouchableOpacity 
                    style={styles.button} 
                    onPress={handleLogin}
                >
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>

                <Text style={styles.footerText}>
                    Don't have an account?{' '}
                    <Text style={styles.linkText} onPress={() => navigation.navigate('SignUp')}>
                        Sign Up
                    </Text>
                </Text>
            </KeyboardAvoidingView>
        </ImageBackground>
    );
};

export default SignIn;

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
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Corrected typo from 0.😎 to 0.5
    },
    title: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 50,
    },
    input: {
        width: '100%',
        padding: 15,
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
        width: '50%',
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
        color: '#888',
        fontSize: 14,
    },
    linkText: {
        color: '#1e90ff',
        fontWeight: '600',
    },
});
