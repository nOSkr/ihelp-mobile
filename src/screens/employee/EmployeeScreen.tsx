import { StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'

const EmployeeScreen = memo(() => {
    return (
      <View>
        <Text>EmployeeScreen</Text>
      </View>
    )
  })

export default EmployeeScreen

EmployeeScreen.displayName = "EmployeeScreen"

const styles = StyleSheet.create({})