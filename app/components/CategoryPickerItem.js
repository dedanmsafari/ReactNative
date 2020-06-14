import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import AppText from './Text'
import Icon from './Icon'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
const CategoryPickerItem = ({ item,onPress}) => {
    return   (
  
        <View style={styles.container} >
 <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80}/>
    <AppText style={styles.label}>{item.label}</AppText>
        </View>
    )
    
}

export default CategoryPickerItem

const styles = StyleSheet.create({
    container:{
paddingHorizontal:15,
paddingVertical:15,
alignItems:'center',
width:'33%'
    },
    label:{
        marginTop:6,
        textAlign:"center"
    }
})
