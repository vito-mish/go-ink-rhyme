import React, { FC, useState } from 'react'
import { LayoutChangeEvent } from 'react-native'

import { Box } from '../Box'
import { Image } from './Image'
import { ImageProps } from './types'

export const StretchImage: FC<ImageProps> = (props) => {
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 })

  const handleBoxLayout = (event: LayoutChangeEvent): void => {
    const { layout } = event.nativeEvent
    setImageSize({ width: layout.width, height: layout.height })
  }

  const canShow = !!(imageSize.width && imageSize.height)
  return (
    <Box flex={1} onLayout={handleBoxLayout}>
      {canShow && <Image {...props} width={imageSize.width} height={imageSize.height} />}
    </Box>
  )
}
