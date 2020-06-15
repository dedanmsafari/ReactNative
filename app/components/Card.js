import React from 'react'
import { StyleSheet,View,Image, TouchableWithoutFeedback } from 'react-native'
import colors from '../config/colors'
import AppText from './Text'

const Card = ({title,subTitle,image, onPress}) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>

        <View style={styles.card}>
        <Image style={styles.image} source={image} />
        <View style={styles.textContainer}>
     <AppText numberOfLines={1} style={styles.title}>{title}</AppText>
     <AppText numberOfLines={2} style={styles.subTitle}>{subTitle}</AppText>
            </View>  
        </View>
        </TouchableWithoutFeedback>
    )
}

export default Card

const styles = StyleSheet.create({
    card:{
      borderRadius: 10,
      backgroundColor: colors.white,
      marginBottom:20,
       overflow:'hidden'
    },
    image:{
        width:'100%',
        height:200
    },
    textContainer:{
        padding: 20
    },
    subTitle:{
color:colors.auxiliary,
fontWeight:'bold',
    },
    title:{
       marginBottom:10 
    }
})
