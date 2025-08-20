import { BattleTimerScreen } from '../screens/BattleTimer'
import { HomeScreen } from '../screens/Home'
import { ScreenConfig, ScreenNames } from './types'

export const screens: ScreenConfig[] = [
  {
    name: ScreenNames.Home,
    component: HomeScreen,
    options: { title: '主頁' },
  },
  {
    name: ScreenNames.BattleTimer,
    component: BattleTimerScreen,
    options: { headerShown: true },
  },
]
