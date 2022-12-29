import { StatusBar, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage'
import {useDispatch, useSelector} from "react-redux"
import allQuestions from "../src/Constants"
import { cleardata } from '../src/action'
const Score = ({navigation}) => {

  
    const rightAns=useSelector((state)=>state.rightAns)
    const wrongAns=useSelector((state)=>state.wrongAns)
    const dispatch=useDispatch()
  return ( 
    
    <View style={{flex:1,justifyContent:"center"}}>
    <StatusBar backgroundColor={"#c8e2f7"}/>
   
      <Text style={styles.answers}>Right Answers: {rightAns}</Text>
      <Text style={styles.answers}>Wrong Answers: {wrongAns}</Text>
      <Text style={styles.answers}>Unattended Answers: {allQuestions.length-(rightAns+wrongAns)}</Text>
      <View style={{width:"100%",justifyContent:"center",alignItems:"center"}}>
      <TouchableHighlight style={styles.tryAgain} onPress={()=>{navigation.navigate("Levels")
      dispatch(cleardata())
      }}>
        <Text style={{fontSize:20}}>Try Again</Text>
      </TouchableHighlight>

      </View>
      
    </View>
  )
}

export default Score

const styles = StyleSheet.create({
  answers:{
    fontSize:20,fontWeight:"bold",backgroundColor:"#c1d5f5",margin:10,borderRadius:10,height:40,elevation:10,padding:5
  },
  tryAgain:{
    backgroundColor:"#c1d5f5",justifyContent:"center",alignItems:"center",height:50,
    marginTop:20,borderRadius:10,width:"60%",elevation:20
  }
})