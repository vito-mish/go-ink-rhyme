/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen'
import React, { FC } from 'react'
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native'

const aa = 666
const App: FC = () => {
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NewAppScreen templateFileName="App.tsx" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default App
