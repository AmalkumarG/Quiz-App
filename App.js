import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './screens/Welcome';
import Levels from './screens/Levels';
import Questions from './screens/Questions';
import Score from './screens/Score';
import Report from './screens/Report';
import Question from './src/Question';
import {Provider} from "react-redux"
import store from './store/store';
const Stack=createStackNavigator()

const NavigatePages=()=>{
  return(
    <Stack.Navigator>
    <Stack.Screen name='Welcome'
        component={Welcome} options={{headerShown:false}} 
      />
    <Stack.Screen name='Levels'
        component={Levels} options={{headerShown:false}}
      />
     
    
    <Stack.Screen name='Questions' 
        component={Questions} options={{headerShown:false}}
      />
      
    <Stack.Screen name='ques' 
        component={Question} options={{headerShown:false}}
      />
      <Stack.Screen name='Score' 
        component={Score} options={{headerShown:false}}
      />
    
     
      
      
      
      <Stack.Screen name='Report' 
        component={Report}

      />
       
    </Stack.Navigator>
  )
}


export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
    <NavigatePages/>
   </NavigationContainer>

    </Provider>
   
  );
}

