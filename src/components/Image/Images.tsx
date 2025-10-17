import React, { FC } from 'react'

import images from '../../assets/images'
import { Image } from './Image'
import { BasicImageProps } from './types'

type ImageKeys = keyof typeof images
type LocalImageRecord = Record<ImageKeys, FC<BasicImageProps>>
export const Images: LocalImageRecord = {} as LocalImageRecord

Object.keys(images).forEach((_filename) => {
  const filename = _filename as ImageKeys
  const LocalImage: FC<BasicImageProps> = (props) => <Image file={images[filename]} {...props} />
  Images[filename] = LocalImage
})
