import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Register = ({ navigation }) => {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const register = () => {
    navigation.navigate('Login');
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon
          name='arrow-back-ios'
          onPress={() => {
            navigation.goBack();
          }}
          size={28}
          color='black'
          style={{ marginLeft: 10, marginTop: 10, marginBottom: 10 }}
        />
        <Text style={{ marginTop: 10, fontSize: 18 }}>Register</Text>
      </View>
      <View style={[styles.item, { marginTop: 15 }]}>
        <Text>Nama</Text>
        <TextInput style={styles.input}
          value={nama}
          placeholder='Nama'
          onChangeText={(nama) => setNama(nama)}
        />
      </View>
      <View style={[styles.item, { marginTop: 20 }]}>
        <Text>Email</Text>
        <TextInput style={styles.input}
          value={email}
          placeholder='Password'
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View style={[styles.item, { marginTop: 20 }]}>
        <Text>Password</Text>
        <TextInput style={styles.input}
          value={password}
          placeholder='Password'
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <TouchableOpacity onPress={() => register()} style={styles.button}>
        <Text style={{ color: '#ffffff' }}>Register</Text>
      </TouchableOpacity>
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
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderColor: '#DCDCDC',
    borderBottomWidth: 0.7
  },
  item: {
    width: '90%',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  input: {
    width: "100%",
    marginLeft: '-1%',
    fontSize: 16,
    color: 'grey',
    borderWidth: 1,
    borderColor: '#DCDCDC',
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10
  },
  button: {
    backgroundColor: '#ba251a',
    width: '90%',
    marginTop: 20,
    height: 40,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Register