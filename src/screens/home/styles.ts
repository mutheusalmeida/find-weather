import styled from 'styled-components/native'
import { Text } from '../../styles'

export const HomeContainer = styled.View`
  flex: 1;
  padding: 50px 24px 28px;
  background-color: ${({ theme }) => theme.colors.dark};
`

export const HomeWrapper = styled.View`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 33px;
  padding: 0 0 96px;
`

export const Image = styled.Image`
  margin-bottom: 24px;
`

export const Title = styled(Text)`
  font-size: ${({ theme }) => `${theme.fontSize.xxl33}px`};
  line-height: 42px;
  font-family: ${({ theme }) => theme.fontFamily.OverpassRegular};
  text-align: center;
`

export const Desc = styled(Title)`
  font-size: ${({ theme }) => `${theme.fontSize.md22}px`};
  font-family: ${({ theme }) => theme.fontFamily.OverpassRegular};
  color: ${({ theme }) => theme.colors.gray100};
  line-height: 28px;
  text-decoration: underline;
`

export const BoldText = styled(Title)`
  font-family: ${({ theme }) => theme.fontFamily.OverpassBold};
`
