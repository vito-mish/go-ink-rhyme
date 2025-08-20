import React, { FC } from 'react'
import { Text, View } from 'react-native'

import { BattleTimerScreenProps } from '../../router/types'

export const BattleTimerScreen: FC<BattleTimerScreenProps> = ({ route }) => {
  const { id } = route.params

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Battle Timer Screen</Text>
      <Text>Timer ID: {id}</Text>
    </View>
  )
}
