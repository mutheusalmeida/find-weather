import styled from 'styled-components/native'
import { Text } from '../../styles'

type EmptyType = {
  isEmpty: boolean
}

export const HomeContainer = styled.View<EmptyType>`
  flex: 1;
  padding: ${({ isEmpty }) => isEmpty ? '50px 24px 28px' : '25px 16px 28px'};
  background-color: ${({ theme }) => theme.colors.dark};
`

export const HomeWrapper = styled.View<EmptyType>`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 33px;
  padding: 0 0 ${({ isEmpty }) => isEmpty ? `${68}px` : `${13}px`};
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

export const LocationWrapper = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 3px;
`

export const Location = styled(Text)`
  font-size: ${({ theme }) => `${theme.fontSize.sm18}px`};
  line-height: 38px;
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
