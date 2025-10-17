import React, { forwardRef, ForwardRefRenderFunction } from 'react'
import { TouchableHighlight, TouchableOpacity, View } from 'react-native'

import { TouchableProps } from './types'

const _Touchable: ForwardRefRenderFunction<View, TouchableProps> = (
  { withoutFeedback, underlayColor, ...rest },
  ref,
) => {
  const props = {
    ref,
    activeOpacity: withoutFeedback ? 1 : 0.2,
    ...rest,
  }

  if (underlayColor) {
    return <TouchableHighlight {...props} underlayColor={underlayColor} />
  }

  return <TouchableOpacity {...props} />
}

export default forwardRef(_Touchable)
