import * as S from './styles'

type SearchProps = {
  navigation: any;
}

export const Search = ({ navigation }: SearchProps): JSX.Element => {
  return (
    <S.SearchContainer>
      <S.Title>Search</S.Title>
    </S.SearchContainer>
  )
}
