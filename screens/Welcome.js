import { StatusBar, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/AntDesign"

const Welcome = ({navigation}) => {
  return (
    <View style={{backgroundColor:"#c8e2f7",flex:1}}>
    <StatusBar backgroundColor={"#c8e2f7"}/>
      <Text style={{fontSize:30,margin:10}}>Welcome to challenger !</Text>
      <Text style={{fontSize:18,margin:10}}>Your daily online quiz application .Challenger will bringout different questions daily covering the daily sports, news, science, technology, GK etc.. .By playing challenger daily you will be well informed</Text>
      <Text style={{fontSize:18,margin:10}}>Challenge friends in any topic for a quick, real time match or dandomly play other people from around the world. Climb the rank and claim your titles.</Text>
      <View style={{width:"100%",justifyContent:"center",alignItems:"center",marginTop:80}}>
      <TouchableHighlight style={{backgroundColor:"#62a880",width:60,height:40,justifyContent:"center",alignItems:"center",borderRadius:20,elevation:20,marginTop:100}}  onPress={()=>navigation.navigate("Levels")}>
        <Icon name='right' size={30} />
      </TouchableHighlight>

      </View>
      
    
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({})