import { BrowserRouter } from 'react-router-dom'
import { Issue } from '@interfaces'
import { IssuesContext } from '@contexts'
import { ReactNode } from 'react'

interface CustomValueProps {
  issues?: Issue[]
  getIssues?: (query?: string) => Promise<void>
}

const defaultValue = {
	issues: [],
  getIssues(query?: string) {
		return Promise.resolve()
	}
}

export function customRender(children: ReactNode, customValue = {} as CustomValueProps) {
	return (
    <BrowserRouter>
			<IssuesContext.Provider
				value={{
					...defaultValue,
					...customValue
				}}
				>
				{children}
			</IssuesContext.Provider>
		</BrowserRouter>
	)
}
