import climateChangeImg from '../../assets/climate-change.png'
import { TabBtn } from '../../tab-btn'
import { useTheme } from 'styled-components/native'

import * as S from './styles'

export const Home = () => {
  const theme = useTheme()

  return (
    <S.HomeContainer>
      <S.HomeWrapper>
        <S.Title>Find<S.BoldText>Weather</S.BoldText></S.Title>

        <S.Image source={climateChangeImg} />

        <S.Desc>Selecione aqui um local e encontre o clima em tempo real</S.Desc>

      </S.HomeWrapper>

      <TabBtn name="home" size={30} color={theme.colors.white} text='Home' />
    </S.HomeContainer>
  )
}
