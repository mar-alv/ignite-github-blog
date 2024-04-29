import { IssuesContext } from '@contexts'
import { SearchContainer, SearchHeader, StyledHeader, StyledInput, StyledSearch } from './styles'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

interface Props {
  issuesCount: number
}

const searchSchema = z.object({
  query: z.string(),
})

type SearchInputs = z.infer<typeof searchSchema>

export function Search({ issuesCount }: Props) {
  const { getIssues } = useContext(IssuesContext)

  const { handleSubmit, register } = useForm<SearchInputs>({
    resolver: zodResolver(searchSchema),
  })

  async function handleSearchIssues(data: SearchInputs) {
    await getIssues(data.query)
  }

  return (
    <StyledSearch onSubmit={handleSubmit(handleSearchIssues)}>
      <StyledHeader>
        <h3 className='title-s'>Publicações</h3>

        <span className='text-s'>
					{issuesCount} publicações
				</span>
      </StyledHeader>

      <StyledInput
				className='text-m'
        placeholder='Buscar conteúdo'
        tabIndex={2}
        type='text'
        {...register('query')}
      />
    </StyledSearch>
  )
}
