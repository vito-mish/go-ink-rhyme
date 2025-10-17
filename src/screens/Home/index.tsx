import React, { FC } from 'react'
import { Button, Text, View } from 'react-native'

import images from '../../assets/images'
import { StretchImage } from '../../components'
import { HomeScreenProps, ScreenNames } from '../../router/types'

export const HomeScreen: FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
        <StretchImage file={images.HomeBg} />
      </View>
      <Text>Home Screen</Text>
      <Button title="Go to Battle Timer" onPress={() => navigation.navigate(ScreenNames.BattleTimer, { id: '123' })} />
    </View>
  )
}
