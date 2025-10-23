import React, { FC } from 'react'
import { Text, View } from 'react-native'

import { SettingsScreenProps } from '../../router/types'

export const SettingsScreen: FC<SettingsScreenProps> = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings Screen</Text>
    </View>
  )
}
