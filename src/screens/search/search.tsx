import { useState } from 'react'
import { useTheme } from 'styled-components/native'
import { Octicons } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'

import * as S from './styles'

type SearchProps = {
  navigation: any;
}

export const Search = ({ navigation }: SearchProps): JSX.Element => {
  const [value, setValue] = useState('')
  const theme = useTheme()
  const iconSize = 19

  return (
    <S.SearchContainer>
      <S.TextInputContainer>
        <S.TextInputWrapper>
          <Octicons
            name='search'
            size={iconSize}
            color={theme.colors.white}
            style={{
              position: 'absolute',
              zIndex: 1,
              left: 16,
              top: '50%',
              transform: [{ translateY: -Math.abs(iconSize / 2) }],
            }}
          />

          <S.TextInput
            placeholder='Digite o nome de uma cidade'
            cursorColor={theme.colors.white}
            placeholderTextColor={theme.colors.gray200}
            selectionColor={theme.colors.gray200}
            inputMode='text'
            onChangeText={setValue}
            value={value}
            onSubmitEditing={(e) => console.log(e.nativeEvent.text)}
          />
        </S.TextInputWrapper>

        <S.InputButton onPress={() => console.log(value)}>
          <MaterialIcons
            name="location-on"
            size={34}
            color={theme.colors.white}
          />
        </S.InputButton>
      </S.TextInputContainer>
    </S.SearchContainer>
  )
}
