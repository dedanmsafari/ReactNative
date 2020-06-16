import React from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native'
import colors from '../../config/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'
const ListItemDeleteAction = ({onPress}) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
      <View style ={styles.deleteSwipe}>
          <MaterialCommunityIcons name="trash-can" size={35} color={colors.white}/>
          </View>
        </TouchableWithoutFeedback>

      
    )
}

export default ListItemDeleteAction

const styles = StyleSheet.create({
    deleteSwipe:{
        backgroundColor: colors.primary,
        alignItems:'center',
        justifyContent:'center',
        width:70
    }
})
