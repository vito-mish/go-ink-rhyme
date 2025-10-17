import { DimensionValue, FlexStyle, TouchableOpacityProps, ViewProps } from 'react-native'

export interface TouchableProps extends TouchableOpacityProps {
  withoutFeedback?: boolean
  underlayColor?: string
  onPress(): void
}

export interface BoxProps extends ViewProps, FlexStyle {
  row?: boolean
  wrap?: boolean
  absoluteFilled?: boolean
  disabled?: boolean
  xalign?: 'flex-start' | 'center' | 'flex-end'
  yalign?: 'flex-start' | 'center' | 'flex-end'
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'stretch'
  justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-around' | 'space-between' | 'space-evenly'
  mt?: number
  mb?: number
  mr?: number
  ml?: number
  mx?: number
  my?: number
  m?: number
  px?: number
  py?: number
  pt?: number
  pb?: number
  pr?: number
  pl?: number
  p?: number
  borderRadius?: number
  children?: React.ReactNode
  height?: DimensionValue
  width?: DimensionValue
  bg?: string
  borderWidth?: number
  borderColor?: string
  flex?: number
  activeOpacity?: number
  overflow?: 'hidden' | 'visible'
  underlayColor?: string
  onPress?: () => void
  onLongPress?: () => void
}
