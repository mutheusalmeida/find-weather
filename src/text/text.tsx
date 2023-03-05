import { TextType } from 'components-types'

import * as S from './styles'

type TextProps = TextType

export const Text = ({
  color,
  font = 'Overpass_400Regular',
  fontSize,
  lineHeight,
  children,
  ...rest
}: TextProps) => {
  return (
    <S.Text
      color={color}
      font={font}
      fontSize={fontSize}
      lineHeight={lineHeight}
      {...rest}
    >
      {children}
    </S.Text>
  )
}
