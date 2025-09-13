import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { FC, useEffect } from 'react'
import { hideSplash } from 'react-native-splash-view'

import { screens } from './screens'

const Stack = createNativeStackNavigator()

const RootStack = () => {
  useEffect(() => {
    hideSplash()
  }, [])

  return (
    <Stack.Navigator>
      {screens.map((screen) => (
        <Stack.Screen key={screen.name} name={screen.name} component={screen.component} options={screen.options} />
      ))}
    </Stack.Navigator>
  )
}

export const RouterContainer: FC = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  )
}
