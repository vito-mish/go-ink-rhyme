import { ImageProps as RNImageProps, ImageSourcePropType as RNImageSourcePropType } from 'react-native'

import { BoxProps } from '../Box/types'

interface CommonImageProps extends BoxProps {
  width?: number
  height?: number
  fallbackSource?: RNImageSourcePropType
  resizeMode?: RNImageProps['resizeMode']
  onPress?: () => void
}

interface FileImageProps extends CommonImageProps {
  file: number
  uri?: never // 確保 file 存在時 uri 為 never
}

interface UriImageProps extends CommonImageProps {
  file?: never // 確保 uri 存在時 file 為 never
  uri: string
}

export type ImageProps = FileImageProps | UriImageProps

export type BasicImageProps = Omit<ImageProps, 'file' | 'uri'>
