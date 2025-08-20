import React, { FC } from 'react'
import { Button, Text, View } from 'react-native'

import { HomeScreenProps, ScreenNames } from '../../router/types'

export const HomeScreen: FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Go to Battle Timer" onPress={() => navigation.navigate(ScreenNames.BattleTimer, { id: '123' })} />
    </View>
  )
}
