import styled from 'styled-components/native'
import { Text } from '../text'

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
  color: #AFAFAF;
  font-size: 22px;
  line-height: 28px;
  font-family: 'Overpass_600SemiBold';
  max-width: 360px;
  text-align: center;
  margin-bottom: 41px;
`

export const BtnText = styled(Text)`
  color: #fff;
  font-family: 'Overpass_400Regular';
  font-size: 22px;
  line-height: 32px;
`
