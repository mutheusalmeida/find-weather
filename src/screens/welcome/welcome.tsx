import cloudImg from '../../assets/cloud-and-thunder.png'

import * as S from './styles'

type WelcomeProps = {
  navigation: any;
}

export const Welcome = ({ navigation }: WelcomeProps): JSX.Element => {
  return (
    <S.WelcomeContainer>
      <S.Image source={cloudImg} />

      <S.Title>Descubra o Clima na sua Cidade</S.Title>

      <S.Desc>Com o <S.BoldText>FindWeather</S.BoldText> nunca ficou tão fácil ter a previsão do tempo na palma da sua mão</S.Desc>

      <S.StartBtn onPress={() => navigation.navigate('Home')}>
        <S.BtnText>Iniciar</S.BtnText>
      </S.StartBtn>
    </S.WelcomeContainer>
  )
}
