import { Button } from '../button'
import cloudImg from '../assets/cloud-and-thunder.png'

import * as S from './styles'

export const Welcome = () => {
  return (
    <S.WelcomeContainer>
      <S.Image source={cloudImg} />

      <S.Title>Descubra o Clima na sua Cidade</S.Title>

      <S.Desc>Com o FindWeather nunca ficou tão fácil ter a previsão do tempo na palma da sua mão</S.Desc>

      <Button
        height={54}
        width={328}
        backgroundColor='#23262B'
        borderRadius={18}
        borderColor='#838384'
      >
        <S.BtnText>Iniciar</S.BtnText>
      </Button>
    </S.WelcomeContainer>
  )
}
