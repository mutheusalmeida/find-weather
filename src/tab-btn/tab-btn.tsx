import { Octicons } from '@expo/vector-icons'

import * as S from './styles'

type TabBtnProps = {
  name: any
  size: number
  color: string
  text: string
}

export const TabBtn = ({ name, size, color, text }: TabBtnProps): JSX.Element => {
  return (
    <S.BtnContainer>
      <Octicons name={name} size={size} color={color} />

      <S.BtnText>{text}</S.BtnText>
    </S.BtnContainer>
  )
}
