import React, { useState, useEffect } from 'react'
import {View, Text, StyleSheet, TextInput, Image, TouchableOpacity} from 'react-native';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const buatAkun = () => {
    // navigation.navigate('Register');
  }
  return (
    <View style={styles.container}>
      <Image  source={require('../assets/EDII.jpg')} style={styles.image} />
      <View style={[styles.item, { marginTop: '-5%' }]}>
        <Text>Email</Text>
        <TextInput style={styles.input}
          value={email}
          underlineColorAndroid='#c6c6c6'
          placeholder='Email/Username'
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View style={[styles.item, { marginTop: 20 }]}>
        <Text>Test</Text>
        <TextInput style={styles.input}
          value={password}
          underlineColorAndroid='#c6c6c6'
          placeholder='Password'
          onChangeText={(email) => setPassword(email)}
        />
      </View>
      <TouchableOpacity onPress={() => onLoginPress()} style={styles.button}>
        <Text style={{ color: '#ffffff' }}>LOGIN</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <Text >Belum punya akun? </Text>
        <TouchableOpacity onPress={() => buatAkun()}>
          <Text style={{ color: '#191970' }}>Buat akun</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
  item: {
    width: '90%',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  input:{
    width : "102.5%",
    marginLeft: '-1%'
  },
  image: {
      width: '70%',
      height: '35%',
      // marginTop: '10%'
  },
  button: {
      backgroundColor: '#ba251a',
      width: '90%',
      marginTop: 20,
      height: 40,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center'
  },
  footer: {
      width : "100%",
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
  }
});

export default Login