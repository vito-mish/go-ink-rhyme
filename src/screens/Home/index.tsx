import React, { FC, useCallback } from 'react'
import styled from 'styled-components/native'

import images from '../../assets/images'
import { Box, StretchImage } from '../../components'
import { Button } from '../../components/Button'
import { HomeScreenProps, ScreenNames } from '../../router/types'

export const HomeScreen: FC<HomeScreenProps> = ({ navigation }) => {
  const handleNavigateBattleTimer = useCallback(() => {
    navigation.navigate(ScreenNames.BattleTimer)
  }, [navigation])

  return (
    <Container>
      <Box absoluteFilled>
        <StretchImage file={images.HomeBg} />
      </Box>

      <ActionButton title="Go to Battle Timer" onPress={handleNavigateBattleTimer} />
    </Container>
  )
}

const Container = styled(Box)`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-horizontal: 40px;
`

const ActionButton = styled(Button).attrs({ boxProps: { style: { opacity: 0.75 } } })``
