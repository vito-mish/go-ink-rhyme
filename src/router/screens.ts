import { BattleTimerScreen } from '../screens/BattleTimer'
import { HomeScreen } from '../screens/Home'
import { SettingsScreen } from '../screens/Settings'
import { ScreenConfig, ScreenNames } from './types'

export const screens: ScreenConfig[] = [
  {
    name: ScreenNames.Home,
    component: HomeScreen,
    options: { title: '主頁', headerShown: false },
  },
  {
    name: ScreenNames.BattleTimer,
    component: BattleTimerScreen,
    options: { headerShown: true },
  },
  {
    name: ScreenNames.Settings,
    component: SettingsScreen,
    options: { headerShown: true },
  },
]
