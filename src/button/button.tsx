import { ButtonType } from 'button'

import * as S from './styles'

type ButtonProps = Omit<ButtonType, 'activeOpacity'>

export const Button = ({
  backgroundColor,
  borderColor = 'transparent',
  children,
  borderRadius,
  height,
  width,
  ...rest
}: ButtonProps) => {
  return (
    <S.Button
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      borderRadius={borderRadius}
      height={height}
      width={width}
      {...rest}
    >
      {children}
    </S.Button>
  )
}
