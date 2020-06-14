import React from 'react'
import { StyleSheet, Text, View, TextInput,Platform } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
// import colors from '../config/colors'
import defaultStyles from '../config/styles';

const AppTextInput = ({icon,width = '100%',...otherProps}) => {
    return (
        <View style={[styles.container, {width}]}>
{icon && <MaterialCommunityIcons name={icon} size={30} color={defaultStyles.colors.grey}  style={styles.icon} />}
      <TextInput 
      placeholderTextColor={defaultStyles.colors.grey}
      style={defaultStyles.text} {...otherProps} />
        </View>
    )
} 

export default AppTextInput

const styles = StyleSheet.create({
    container:{
        backgroundColor:defaultStyles.colors.medium,
        borderRadius:25,
        flexDirection:'row',
 
        padding:10,
        marginVertical: 10
    },
    icon:{
 marginRight: 12,
    },
 
})
