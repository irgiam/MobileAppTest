import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DropDownPicker from 'react-native-dropdown-picker';

const EditProfile = ({ navigation }) => {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [openGender, setOpenGender] = useState(false);
  const [valueGender, setValueGender] = useState(null);
  const [gender, setGender] = useState([
    { label: 'Laki-laki', value: 'male' },
    { label: 'Perempuan', value: 'female' },
  ]);

  const [openReligion, setOpenReligion] = useState(false);
  const [valueReligion, setValueReligion] = useState(null);
  const [religion, setReligion] = useState([
    { label: 'Islam', value: 'islam' },
    { label: 'Katolik', value: 'katolik' },
    { label: 'Protestan', value: 'protestan' },
    { label: 'Hindu', value: 'hindu' },
    { label: 'Budha', value: 'budha' },
  ]);

  const [openGolDarah, setOpenGolDarah] = useState(false);
  const [valueGolDarah, setValueGolDarah] = useState(null);
  const [golDarah, setGolDarah] = useState([
    { label: 'O', value: 'o' },
    { label: 'A', value: 'a' },
    { label: 'AB', value: 'ab' },
    { label: 'B', value: 'b' }
  ]);

  const [riwayatPekerjaan, setRiwayatPekerjaan] = useState([]);
  const [jenjangPendidikan, setJenjangPendidikan] = useState([]);

  const editProfile = () => {
    navigation.navigate('Profile');
  }

  const addRiwayatPekerjaan = () => {
    setRiwayatPekerjaan([...riwayatPekerjaan, { namaPerusahaan: '', posisiTerakhir: ''}])
  }

  const addJenjangPendidikan = () => {
    setJenjangPendidikan([...jenjangPendidikan, { jenjangPendidikanTerakhir: '', namaInstitusiAkademik: ''}])
  }

  return (
    <ScrollView>
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
          <Text style={{ marginTop: 10, fontSize: 18 }}>Edit Profile</Text>
        </View>
        <View style={[styles.item, { marginTop: 15 }]}>
          <Text>Posisi yang Dilamar</Text>
          <TextInput style={styles.input}
            value={nama}
          // placeholder='Nama'
          // onChangeText={(nama) => setNama(nama)}
          />
        </View>
        <View style={[styles.item, { marginTop: 15 }]}>
          <Text>Nama</Text>
          <TextInput style={styles.input}
            value={nama}
            // placeholder='Nama'
            onChangeText={(nama) => setNama(nama)}
          />
        </View>
        <View style={[styles.item, { marginTop: 15 }]}>
          <Text>No KTP</Text>
          <TextInput style={styles.input}
            value={nama}
            // placeholder='Nama'
            onChangeText={(nama) => setNama(nama)}
          />
        </View>
        <View style={[styles.item, { marginTop: 15, zIndex: 90 }]}>
          <Text>Jenis Kelamin</Text>
          <DropDownPicker
            zIndex={3000}
            placeholder=""
            open={openGender}
            value={valueGender}
            items={gender}
            setOpen={setOpenGender}
            setValue={setValueReligion}
            setItems={setReligion}
            listMode="SCROLLVIEW"
            scrollViewProps={{
              nestedScrollEnabled: true,
            }}
            style={styles.dropDownStyle}
            containerStyle={{
              zIndex: 999,
              flex: 1,
            }}
            dropDownContainerStyle={styles.dropDownContainerStyle}
          />
        </View>
        <View style={[styles.item, { marginTop: 15 }]}>
          <Text>Tempat Tanggal Lahir</Text>
          <TextInput style={styles.input}
            value={nama}
            // placeholder='Nama'
            onChangeText={(nama) => setNama(nama)}
          />
        </View>
        <View style={[styles.item, { marginTop: 15, zIndex: 80 }]}>
          <Text>Agama</Text>
          <DropDownPicker
            zIndex={3000}
            placeholder=""
            open={openReligion}
            value={valueReligion}
            items={religion}
            setOpen={setOpenReligion}
            setValue={setValueGender}
            setItems={setGender}
            listMode="SCROLLVIEW"
            scrollViewProps={{
              nestedScrollEnabled: true,
            }}
            style={styles.dropDownStyle}
            containerStyle={{
              zIndex: 999,
              flex: 1,
            }}
            dropDownContainerStyle={styles.dropDownContainerStyle}
          />
        </View>
        <View style={[styles.item, { marginTop: 15, zIndex: 70 }]}>
          <Text>Golongan Darah</Text>
          <DropDownPicker
            zIndex={3000}
            placeholder=""
            open={openGolDarah}
            value={valueGolDarah}
            items={golDarah}
            setOpen={setOpenGolDarah}
            setValue={setValueGolDarah}
            setItems={setGolDarah}
            listMode="SCROLLVIEW"
            scrollViewProps={{
              nestedScrollEnabled: true,
            }}
            style={styles.dropDownStyle}
            containerStyle={{
              zIndex: 999,
              flex: 1,
            }}
            dropDownContainerStyle={styles.dropDownContainerStyle}
          />
        </View>
        <View style={[styles.item, { marginTop: 20 }]}>
          <Text>Alamat KTP</Text>
          <TextInput style={[styles.input]}
            value={email}
            // placeholder='Email'
            onChangeText={(email) => setEmail(email)}
            numberOfLines={4}
            multiline={true}
          />
        </View>
        <View style={[styles.item, { marginTop: 20 }]}>
          <Text>Alamat Tinggal</Text>
          <TextInput style={[styles.input]}
            value={email}
            // placeholder='Email'
            onChangeText={(email) => setEmail(email)}
            numberOfLines={4}
            multiline={true}
          />
        </View>
        <View style={[styles.item, { marginTop: 20 }]}>
          <Text>Email</Text>
          <TextInput style={[styles.input]}
            value={email}
            // placeholder='Email'
            onChangeText={(email) => setEmail(email)}
          />
        </View>
        <View style={[styles.item, { marginTop: 20 }]}>
          <Text>No Telp</Text>
          <TextInput style={[styles.input]}
            value={email}
            // placeholder='Email'
            onChangeText={(email) => setEmail(email)}
          />
        </View>
        <View style={[styles.item, { marginTop: 20 }]}>
          <View style={{flexDirection: 'row'}}>
            <View style={{ width: '50%' }}>
              <Text>Pendidikan Terakhir:</Text>
            </View>
            <View style={{ width: '49%', alignItems: 'flex-end' }}>
              <TouchableOpacity onPress={() => addJenjangPendidikan()}>
                <Text style={{fontSize: 16, fontWeight: 1000}}>+</Text>
              </TouchableOpacity>
            </View>
          </View> 
          {
            jenjangPendidikan && jenjangPendidikan.map((data, index) => {
              return (
                <View style={{ width: '100%' }}>
                  <View style={styles.subItem}>
                    <Text>Jenjang Pendidikan Terakhir:</Text>
                    <TextInput style={[styles.input]}
                      value={email}
                      // placeholder='Email'
                      onChangeText={(email) => setEmail(email)}
                    />
                  </View>
                  <View style={styles.subItem}>
                    <Text>Nama Institusi Akademik:</Text>
                    <TextInput style={[styles.input]}
                      value={email}
                      // placeholder='Email'
                      onChangeText={(email) => setEmail(email)}
                    />
                  </View>
                  <View style={styles.subItem}>
                    <Text>Jurusan:</Text>
                    <TextInput style={[styles.input]}
                      value={email}
                      // placeholder='Email'
                      onChangeText={(email) => setEmail(email)}
                    />
                  </View>
                  <View style={styles.subItem}>
                    <Text>Tahun Lulus:</Text>
                    <TextInput style={[styles.input]}
                      value={email}
                      // placeholder='Email'
                      onChangeText={(email) => setEmail(email)}
                    />
                  </View>
                </View>
              )
            })
          }
        </View>
        <View style={[styles.item, { marginTop: 20 }]}>
          <View style={{flexDirection: 'row'}}>
            <View style={{ width: '50%' }}>
              <Text>Riwayat Pekerjaan:</Text>
            </View>
            <View style={{ width: '49%', alignItems: 'flex-end' }}>
              <TouchableOpacity onPress={() => addRiwayatPekerjaan()}>
                <Text style={{fontSize: 16, fontWeight: 1000}}>+</Text>
              </TouchableOpacity>
            </View>
          </View>  
          {
            riwayatPekerjaan && riwayatPekerjaan.map((data, index) => {
              return (
                <View style={{ width: '100%' }}>
                  <View style={styles.subItem}>
                    <Text>Nama Perusahaan:</Text>
                    <TextInput style={[styles.input]}
                      value={email}
                      // placeholder='Email'
                      onChangeText={(email) => setEmail(email)}
                    />
                  </View>
                  <View style={styles.subItem}>
                    <Text>Posisi Terakhir:</Text>
                    <TextInput style={[styles.input]}
                      value={email}
                      // placeholder='Email'
                      onChangeText={(email) => setEmail(email)}
                    />
                  </View>
                  <View style={styles.subItem}>
                    <Text>Pendapatan Terakhir:</Text>
                    <TextInput style={[styles.input]}
                      value={email}
                      // placeholder='Email'
                      onChangeText={(email) => setEmail(email)}
                    />
                  </View>
                  <View style={styles.subItem}>
                    <Text>Tahun:</Text>
                    <TextInput style={[styles.input]}
                      value={email}
                      // placeholder='Email'
                      onChangeText={(email) => setEmail(email)}
                    />
                  </View>
                </View>
              )
            })
          }        
        </View>
        <TouchableOpacity onPress={() => editProfile()} style={styles.button}>
          <Text style={{ color: '#ffffff' }}>Simpan Profile</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
  subItem: {
    width: '95%',
    marginHorizontal: '2.5%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginVertical: 5
  },
  input: {
    width: "100%",
    fontSize: 16,
    color: 'grey',
    borderWidth: 1,
    borderColor: '#DCDCDC',
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
    textAlignVertical: 'top'
  },
  button: {
    backgroundColor: '#ba251a',
    width: '90%',
    marginVertical: 20,
    height: 40,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  dropDownStyle: {
    borderWidth: 1,
    borderRadius: 10,
    color: '#000000',
    backgroundColor: '#FFFFFF',
    borderColor: '#DCDCDC',
    zIndex: 10
  },
  dropDownContainerStyle: {
    borderWidth: 1,
    borderRadius: 10,
    zIndex: 1000,
    color: '#000000',
    backgroundColor: 'white',
    opacity: 100,
    borderColor: '#DCDCDC',
  }
})

export default EditProfile