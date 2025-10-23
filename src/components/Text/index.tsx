import React, { FC } from 'react'
import { Text as RNText } from 'react-native'
import styled from 'styled-components/native'
import { color as sColor, compose, flexbox, position, space, system, typography } from 'styled-system'

import { theme } from '../../styles/theme'
import { TextProps } from './types'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SText: any = styled(RNText)(
  compose(
    position,
    flexbox,
    space,
    sColor,
    typography,
    system({
      textDecorationLine: true,
    }),
  ),
)

export const Text: FC<TextProps> = ({
  size = 2,
  bold,
  weight = 0,
  align,
  color = theme.colors.gray[5],
  lineHeight = 18,
  ...rest
}) => {
  return (
    <SText
      fontWeight={bold ? 1 : weight}
      fontSize={size}
      lineHeight={lineHeight ? `${lineHeight}px` : size}
      textAlign={align}
      color={color}
      allowFontScaling={false}
      {...rest}
    />
  )
}

export const OneLineText: FC<TextProps> = (props) => <Text numberOfLines={1} {...props} />
export const Heading1: FC<TextProps> = (props) => (
  <Text size={7} lineHeight={39.2} letterSpacing={1} weight={1} {...props} />
) // 28
export const Heading2: FC<TextProps> = (props) => <Text size={6} lineHeight={38.4} weight={1} {...props} /> // 24
export const Heading3: FC<TextProps> = (props) => <Text size={5} lineHeight={28} weight={1} {...props} /> // 20
export const Body1: FC<TextProps> = (props) => <Text size={5} lineHeight={28} {...props} /> // 20
export const Body2: FC<TextProps> = (props) => <Text size={4} lineHeight={28.8} {...props} /> // 18
export const Body3: FC<TextProps> = (props) => <Text size={3} lineHeight={28.8} {...props} /> // 16
export const Body4: FC<TextProps> = (props) => <Text size={2} lineHeight={25.2} {...props} /> // 14
export const Body5: FC<TextProps> = (props) => <Text size={1} lineHeight={21.6} {...props} /> // 12
export const Body6: FC<TextProps> = (props) => <Text size={0} lineHeight={14} {...props} /> // 10
