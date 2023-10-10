import { BrowserRouter } from 'react-router-dom'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Router } from './router'
import { ThemeProvider } from 'styled-components'
import { UserProvider } from '@contexts'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <GlobalStyle />
        <UserProvider>
          <Router />
        </UserProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
