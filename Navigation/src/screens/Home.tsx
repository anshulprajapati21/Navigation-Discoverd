import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

// navigation
import {NativeStackScreenProps} from "@react-navigation/native-stack"
import {RootStackParamList} from '../App'

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>

const Home = ({navigation}: HomeProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Home Screen</Text>
      <Button
      title='Go to details'
  
     // The active way to navigate to the Details screen with a productId parameter
      onPress={() => navigation.push('Details', {
        productId: "86"
      })}

      />
    </View>
  )
}

export default Home

//Defining styles for the Home component

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    smallText: {
        color: "#000000"
    }
})