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
  size = 16,
  bold,
  weight = 400,
  align,
  color = theme.colors.gray[5],
  lineHeight = 18,
  ...rest
}) => {
  return (
    <SText
      fontWeight={bold ? 600 : weight}
      fontSize={size}
      lineHeight={lineHeight ? `${lineHeight}px` : `${size}px`}
      textAlign={align}
      color={color}
      allowFontScaling={false}
      {...rest}
    />
  )
}

export const OneLineText: FC<TextProps> = (props) => <Text numberOfLines={1} {...props} />
export const Heading1: FC<TextProps> = (props) => <Text size={28} lineHeight={39.2} letterSpacing={1} bold {...props} />
export const Heading2: FC<TextProps> = (props) => <Text size={24} lineHeight={38.4} bold {...props} />
export const Heading3: FC<TextProps> = (props) => <Text size={20} lineHeight={28.8} bold {...props} />
export const Body1: FC<TextProps> = (props) => <Text size={20} lineHeight={28.8} {...props} />
export const Body2: FC<TextProps> = (props) => <Text size={18} lineHeight={28.8} {...props} />
export const Body3: FC<TextProps> = (props) => <Text size={16} lineHeight={28.8} {...props} />
export const Body4: FC<TextProps> = (props) => <Text size={14} lineHeight={25.2} {...props} />
export const Body5: FC<TextProps> = (props) => <Text size={12} lineHeight={21.6} {...props} />
export const Body6: FC<TextProps> = (props) => <Text size={10} lineHeight={14} {...props} />
