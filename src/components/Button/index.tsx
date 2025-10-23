import React, { FC } from 'react'
import styled from 'styled-components/native'

import { theme } from '../../styles/theme'
import { Box } from '../Box'
import { BoxProps } from '../Box/types'
import { Body3 } from '../Text'

export const BUTTON_HEIGHT = 56

export interface ButtonProps {
  title: string
  onPress: () => void
  boxProps?: BoxProps
}

export const Button: FC<ButtonProps> = ({ title, onPress, boxProps }) => {
  return (
    <Container onPress={onPress} {...boxProps}>
      <Body3>{title}</Body3>
    </Container>
  )
}

const Container = styled(Box)`
  height: ${BUTTON_HEIGHT}px;
  align-self: stretch;
  background-color: ${theme.colors.gray[0]};
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`
