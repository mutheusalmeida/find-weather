import styled from 'styled-components/native'
import { Text } from '../text'

export const WelcomeContainer = styled.View`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: end;
  gap: 33px;
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
  color: #AFAFAF;
  font-size: 22px;
  line-height: 28px;
  font-family: 'Overpass_600SemiBold';
  max-width: 360px;
  text-align: center;
`

export const BtnText = styled(Text)`
  color: #fff;
  font-family: 'Overpass_400Regular';
  font-size: 22px;
  line-height: 32px;
`
