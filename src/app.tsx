import { BrowserRouter } from 'react-router-dom'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { IssuesProvider } from '@contexts'
import { Router } from './router'
import { ThemeProvider } from 'styled-components'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <GlobalStyle />
        <IssuesProvider>
          <Router />
        </IssuesProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
