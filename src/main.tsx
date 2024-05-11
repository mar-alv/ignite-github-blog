import { App } from './app.tsx'
import { BrowserRouter } from 'react-router-dom'
import { ContextProvider } from '@context'
import React from 'react'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <BrowserRouter>
				<ContextProvider>
					<App />
				</ContextProvider>
			</BrowserRouter>
  </React.StrictMode>
)
