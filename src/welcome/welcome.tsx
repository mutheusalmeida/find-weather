import { StatusBar } from 'expo-status-bar'
import { Button } from '../button'

import * as S from './styles'

export const Welcome = () => {
  return (
    <S.WelcomeContainer>
      <S.Title>Descubra o Clima na sua Cidade</S.Title>

      <S.Desc>Com o FindWeather nunca ficou tão fácil ter a previsão do tempo na palma da sua mão</S.Desc>

      <StatusBar style="light" />

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
