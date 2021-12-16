import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class HomeScreen extends Component {
    render(){
        return(
            <View style={styles.container}>
            <Text style={{color:"#fff"}}>Home Screen</Text>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#000",
        justifyContent:"center",
        alignContent:"center"
    }
})
