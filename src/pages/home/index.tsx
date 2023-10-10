import { IISsue } from '@interfaces'
import { Issue, Profile, SearchBar } from '@components'
import { Issues } from './style'

export function HomePage() {
  const issues: IISsue[] = [
    {
      id: 1,
      title: 'JavaScript data types and data structures',
      createdAt: '1',
      description:
        'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.',
    },
    {
      id: 2,
      title: 'JavaScript data types and data structures',
      createdAt: '1',
      description:
        'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.',
    },
    {
      id: 3,
      title: 'JavaScript data types and data structures',
      createdAt: '1',
      description:
        'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.',
    },
    {
      id: 4,
      title: 'JavaScript data types and data structures',
      createdAt: '1',
      description:
        'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.',
    },
    {
      id: 5,
      title: 'JavaScript data types and data structures',
      createdAt: '1',
      description:
        'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.',
    },
    {
      id: 6,
      title: 'JavaScript data types and data structures',
      createdAt: '1',
      description:
        'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.',
    },
  ]

  return (
    <main>
      <Profile />
      <SearchBar issuesCount={issues.length} />
      <Issues>
        {issues.map((i) => (
          <Issue key={i.id} issue={i} />
        ))}
      </Issues>
    </main>
  )
}
