import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { FC, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { hideSplash } from 'react-native-splash-view'

import { screens } from './screens'

const Stack = createNativeStackNavigator()

const RootStack = () => {
  const { t } = useTranslation()

  useEffect(() => {
    hideSplash()
  }, [])

  return (
    <Stack.Navigator>
      {screens.map((screen) => (
        <Stack.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={{
            ...screen.options,
            title: t(`${screen.name}_title`),
          }}
        />
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
