import climateChangeImg from '../../assets/climate-change.png'

import * as S from './styles'

export const Home = () => {
  return (
    <S.HomeContainer>
      <S.Title>Find<S.BoldText>Weather</S.BoldText></S.Title>

      <S.Image source={climateChangeImg} />

      <S.Desc>Selecione aqui um local e encontre o clima em tempo real</S.Desc>
    </S.HomeContainer>
  )
}
