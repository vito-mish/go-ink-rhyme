import { TextProps as RNTextProps } from 'react-native'
import {
  BorderProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  TypographyProps,
} from 'styled-system'

export type TextDecorationLine = 'none' | 'underline' | 'line-through' | 'underline line-through'

export interface StyledProps
  extends PositionProps,
    LayoutProps,
    FlexboxProps,
    SpaceProps,
    ColorProps,
    BorderProps,
    TypographyProps {}

export interface TextProps extends RNTextProps, StyledProps {
  size?: number
  weight?: number
  lineHeight?: number
  align?: 'left' | 'center' | 'right'
  textDecorationLine?: TextDecorationLine
  bold?: boolean
  color?: string
  ml?: number
  mr?: number
  mt?: number
  mb?: number
  onPress?: () => void
}
