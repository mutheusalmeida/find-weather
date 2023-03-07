import styled from 'styled-components/native'
import { Button, Text } from '../../styles'

export const WelcomeContainer = styled.View`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 33px;
  padding: 16px 16px 54px;
`

export const Image = styled.Image`
  margin-bottom: 24px;
`

export const Title = styled(Text)`
  color: #FFF;
  font-size: 33px;
  line-height: 42px;
  font-family: 'Overpass_600SemiBold';
  max-width: 304px;
  text-align: center;
`

export const Desc = styled(Text)`
  font-family: 'Overpass_600SemiBold';
  max-width: 360px;
  text-align: center;
  margin-bottom: 41px;
  color: #AFAFAF;
  `

export const BoldText = styled(Desc)`
  font-family: 'Overpass_700Bold';
`

export const StartBtn = styled(Button)``

export const BtnText = styled(Text)``
