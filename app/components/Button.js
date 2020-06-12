import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import colors from '../config/colors'

const AppButton = ({ title, onPress, color='primary' }) => {
    return (
        <TouchableOpacity style={[styles.container,{backgroundColor:colors[color]}]} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

export default AppButton

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:"center",
        // backgroundColor: colors.secondary,
        borderRadius:25,
        padding:12,
        width:'100%',
        marginVertical:5
    },
    text:{
      color:colors.white,  
        fontSize:18,
        textTransform:'uppercase',
        fontWeight:'bold'

    }
})
