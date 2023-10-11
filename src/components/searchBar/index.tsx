import { IssuesContext } from '@contexts'
import { SearchBarContainer, SearchBarHeader } from './styles'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

interface Props {
  issuesCount: number
}

const searchBarSchema = z.object({
  query: z.string(),
})

type SearchBarInputs = z.infer<typeof searchBarSchema>

export function SearchBar({ issuesCount }: Props) {
  const { getIssues } = useContext(IssuesContext)

  const { handleSubmit, register } = useForm<SearchBarInputs>({
    resolver: zodResolver(searchBarSchema),
  })

  async function handleSearchIssues(data: SearchBarInputs) {
    await getIssues(data.query)
  }

  return (
    <SearchBarContainer onSubmit={handleSubmit(handleSearchIssues)}>
      <SearchBarHeader>
        <h3>Publicações</h3>
        <span>{issuesCount} publicações</span>
      </SearchBarHeader>
      <input
        placeholder="Buscar conteúdo"
        tabIndex={2}
        type="text"
        {...register('query')}
      />
    </SearchBarContainer>
  )
}
