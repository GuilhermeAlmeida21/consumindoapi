import React, {useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';



const api = async(callback) => {
const resposta = await fetch('https://valorant-api.com/v1/agents');
const parsed = await resposta.json();
callback(parsed.data);
}



export default function App() {
const [registro, setRegistros] = useState([]);



useEffect(() => {
api(setRegistros);
}, []);



return (
<View style = { style.container }>
<Text style = { style.titulo }> Agentes do Valorant </Text>

<FlatList 
data = {registro}
keyExtractor = {(item) => item.uuid.toString()}
numColumns={2}
renderItem = {({ item }) => <Text style={style.item}> Agente: { item.displayName } - {item.description} ULTIMATE: {item.Ultimate} </Text>}
/>

<StatusBar style = "auto"/>
</View>
);}



const style = StyleSheet.create({

container:{
flex: 1,
backgroundColor: '#e63946',
},
titulo:{
  
  fontSize:25,
  fontWeight:'bold',
  textAlign:'center',
  marginBottom: 30,
  marginTop:40
},
item:{
  flex: 1,
  paddingVertical:10,
  textAlign:'center',
  backgroundColor:'#fff',
  margintop: 15,
  marginBottom: 15,
  marginRight: 15,
  marginLeft: 15,
  paddingLeft:15,
  paddingRight:15,
},


});

