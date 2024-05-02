import { StyledHeader, StyledInput, StyledSearch } from './styles'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

interface Props {
  issuesCount: number
	onSearch(query: string): void
}

const searchSchema = z.object({
  query: z.string(),
})

type SearchInputs = z.infer<typeof searchSchema>

export function Search({ issuesCount, onSearch }: Props) {
  const { handleSubmit, register } = useForm<SearchInputs>({
    resolver: zodResolver(searchSchema)
  })

  function handleSearch(data: SearchInputs) {
		onSearch(data.query)
  }

  return (
    <StyledSearch onSubmit={handleSubmit(handleSearch)}>
      <StyledHeader>
        <h3 className='title-s'>Publicações</h3>

        <span className='text-s'>
					{issuesCount} {`${issuesCount > 1 || issuesCount === 0 ? 'publicações' : 'publicação'}`}
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
