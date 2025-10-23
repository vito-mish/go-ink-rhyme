import { NativeStackNavigationOptions, NativeStackScreenProps } from '@react-navigation/native-stack'
import { FC } from 'react'

export enum ScreenNames {
  Home = 'home',
  BattleTimer = 'battle_timer',
  Settings = 'settings',
}

type RootStackParamList = {
  [ScreenNames.Home]: undefined
  [ScreenNames.BattleTimer]: undefined
  [ScreenNames.Settings]: undefined
  // ex: [ScreenNames.BattleTimer]: { id: string }
}

export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, ScreenNames.Home>
export type BattleTimerScreenProps = NativeStackScreenProps<RootStackParamList, ScreenNames.BattleTimer>
export type SettingsScreenProps = NativeStackScreenProps<RootStackParamList, ScreenNames.Settings>

export type ScreenConfig = {
  name: keyof RootStackParamList
  component: FC<any> // eslint-disable-line @typescript-eslint/no-explicit-any
  options?: NativeStackNavigationOptions
}
