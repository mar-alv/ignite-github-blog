import { createGlobalStyle } from 'styled-components'
import backgroundImage from '../assets/backgroundImage.png'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
    
    background-color:  ${(props) => props.theme['base-background']};
    background-image: url(${backgroundImage});
    background-repeat: no-repeat;
    background-size: contain;
  }

  body, input, textarea, button {
    font-family: 'Nunito', sans-serif;
  }

  main {
    width: 100%;
    max-width: 880px;
    margin: 12.5rem auto;
    padding: 0 1.5rem;
  }
`
