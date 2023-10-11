import { SearchBarContainer, SearchBarHeader } from './styles'

interface Props {
  issuesCount: number
}

export function SearchBar({ issuesCount }: Props) {
  return (
    <SearchBarContainer>
      <SearchBarHeader>
        <h3>Publicações</h3>
        <span>{issuesCount} publicações</span>
      </SearchBarHeader>
      <input type="text" placeholder="Buscar conteúdo" tabIndex={2} />
    </SearchBarContainer>
  )
}
