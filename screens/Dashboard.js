import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

const Dashboard = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#121212', 
  },
  title: {
    fontSize: 90,
    fontWeight: '700',
    marginBottom: 30,
    color: '#ffffff', 
  },
  button: {
    backgroundColor: '#af33ff', 
    padding: 15,
    borderRadius: 100,
    width: '50%',
    alignItems: 'center',
    marginTop: 30,
  },
  buttonText: {
    color: '#fff', 
    fontSize: 16,
    fontWeight: '500',
  },
});
