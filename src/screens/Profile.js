import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Profile = ({ navigation }) => {

  const logout = () => {
    navigation.navigate('Login');
  }

  const editProfile = () => {
    navigation.navigate('EditProfile');
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
        <Text style={{ marginTop: 10, fontSize: 18 }}>Profile</Text>
      </View>
      <View style={styles.boxShadow}>
        <View style={styles.dataProfile}>
          <Text>Nama: </Text>
          <Text>-</Text>
        </View>
        <View style={styles.dataProfile}>
          <Text>No KTP: </Text>
          <Text>-</Text>
        </View>
        <View style={styles.dataProfile}>
          <Text>Tempat Tanggal Lahir: </Text>
          <Text>-</Text>
        </View>
        <View style={styles.dataProfile}>
          <Text>Jenis Kelamin: </Text>
          <Text>-</Text>
        </View>
        <View style={styles.dataProfile}>
          <Text>Agama: </Text>
          <Text>-</Text>
        </View>
        <View style={styles.dataProfile}>
          <Text>Gol Darah: </Text>
          <Text>-</Text>
        </View>
        <View style={styles.dataProfile}>
          <Text>Status Pernikahan: </Text>
          <Text>-</Text>
        </View>
        <View style={styles.dataProfile}>
          <Text>Alamat KTP: </Text>
          <Text>-</Text>
        </View>
        <View style={styles.dataProfile}>
          <Text>Alamat Tinggal: </Text>
          <Text>-</Text>
        </View>
        <View style={styles.dataProfile}>
          <Text>Email: </Text>
          <Text>-</Text>
        </View>
        <View style={styles.dataProfile}>
          <Text>No Telp: </Text>
          <Text>-</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => editProfile()} style={styles.button}>
        <Text style={{ color: '#ffffff' }}>Edit Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => logout()} style={[styles.button, {backgroundColor: 'black'}]}>
        <Text style={{ color: '#ffffff' }}>Log Out</Text>
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
  boxShadow: {
    width: '90%',
    marginLeft: '2.5%',
    padding: 5,
    marginTop: 10,
    borderWidth: 0.1, //1
    borderColor: '#e6e6e6',
    borderRadius: 10,
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: "#FFFFFF",
    shadowColor: "#5c5b5b", //#000
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.12,
    shadowRadius: 2.22,

    elevation: 5,
  },
  dataProfile: {
    width: "100%",
    fontSize: 16,
    flexDirection: 'row',
    // alignItems: 'flex-end',
    marginTop: 5
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

export default Profile