import climateChangeImg from '../../assets/climate-change.png'
import rainingImg from '../../assets/raining.png'
import { TabBtn } from '../../tab-btn'
import { useTheme } from 'styled-components/native'
import { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons';

import * as S from './styles'

export const Home = () => {
  const theme = useTheme()
  const [isEmpty, setIsEmpty] = useState(true)

  return (
    <S.HomeContainer isEmpty={isEmpty}>
      <S.HomeWrapper isEmpty={isEmpty}>
        {isEmpty ? (
          <>
            <S.Title>Find<S.BoldText>Weather</S.BoldText></S.Title>

            <S.Image source={climateChangeImg} />

            <S.Desc onPress={() => setIsEmpty(false)}>Selecione aqui um local e encontre o clima em tempo real</S.Desc>
          </>
        ) : (
          <>
            <S.LocationWrapper>
              <MaterialIcons
                name="location-on"
                size={18}
                color={theme.colors.white}
              />

              <S.Location>A Corunã, Espanha</S.Location>
            </S.LocationWrapper>

            <S.Image source={rainingImg} />
          </>
        )}
      </S.HomeWrapper>

      <TabBtn name="home" size={30} color={theme.colors.white} text='Home' />
    </S.HomeContainer>
  )
}
