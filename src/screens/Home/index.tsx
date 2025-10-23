import React, { FC, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components/native'

import images from '../../assets/images'
import { Box, StretchImage } from '../../components'
import { Button } from '../../components/Button'
import { HomeScreenProps, ScreenNames } from '../../router/types'

export const HomeScreen: FC<HomeScreenProps> = ({ navigation }) => {
  const { t } = useTranslation()

  const handleNavigateBattleTimer = useCallback(() => {
    navigation.navigate(ScreenNames.BattleTimer)
  }, [navigation])

  const handleNavigateSettings = useCallback(() => {
    navigation.navigate(ScreenNames.Settings)
  }, [navigation])

  return (
    <Container>
      <Box absoluteFilled>
        <StretchImage file={images.HomeBg} />
      </Box>

      <ActionButton title={t('battle_timer_title')} onPress={handleNavigateBattleTimer} />
      <ActionButton title={t('settings_title')} onPress={handleNavigateSettings} />
    </Container>
  )
}

const Container = styled(Box)`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-horizontal: 40px;
`

const ActionButton = styled(Button).attrs({ boxProps: { style: { opacity: 0.75, marginVertical: 12 } } })``
