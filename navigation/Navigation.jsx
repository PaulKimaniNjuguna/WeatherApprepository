import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from '../screens/HomeScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


const Stack = createNativeStackNavigator ()
const Navigation = () => {
    return (
     <NavigationContainer>
     <Stack.Navigator>
     
     <Stack.Screen name="home" component={HomeScreen} options={{headerShown:false}}/>
     </Stack.Navigator>
     
     </NavigationContainer>
    )
}

export default Navigation

const styles = StyleSheet.create({})


