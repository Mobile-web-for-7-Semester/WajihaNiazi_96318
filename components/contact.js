import React from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function Contact() {
  return (
    <View style={styles.formstyle}>
      <Text style={styles.header}>Contact Us</Text>
      <Text style={styles.label}>Name:</Text>
      <TextInput style={styles.input} placeholder="Fullname" autoFocus />
      <Text style={styles.label}>Email:</Text>
      <TextInput style={styles.input} placeholder="Email" />
      <Text style={styles.label}>Subject:</Text>
      <TextInput style={styles.input} placeholder="Subject" />
      <Text style={styles.label} >Massage:</Text>
      <TextInput style={styles.message} placeholder="Message..........."  />
      <TouchableOpacity style={styles.submit}>
        <Text style={styles.send}>Send</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  formstyle: {
    width:'500px',
    height:'600px',
    border:'1px solid #8cd9b3',
    padding:40,
    backgroundColor:'#ecf8f2'
  },
  input: {
    padding:6,
    border:'3px solid #215f41',
    marginTop:6
  },
  message:{
    padding:6,
    border:'3px solid #215f41',
    marginTop:6,
    height:150
  },
  submit:{
    backgroundColor:'#26734d',
    marginRight:'20%',
    marginTop:'6px',
    color:'#ffffff',
    width:'30%',
    height:40,
    },
    send:{
      fontSize:20,
      fontWeight: 'bold',
      textAlign:'center',
      color:'#fff',
      margin:2,
    },
    header:{
      fontSize:30,
      fontWeight: 'bold',
      textAlign:'center',
      color:'#26734d'
    },
    label:{
      fontSize:20,
      fontWeight: 'bold',
      color:'#26734d'
    }
});
