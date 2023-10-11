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

  h1 {
    font-size: ${(props) => props.theme.fontSize['title-l']};
    line-height: ${(props) => props.theme.lineHeight['title-l']};
    color: ${(props) => props.theme['base-title']};
  }

  a {
    font-size: ${(props) => props.theme.fontSize.link};
    font-weight: bold;
    line-height: ${(props) => props.theme.lineHeight.link};
    color: ${(props) => props.theme.blue};
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  a:focus {
    outline-offset: 2px;
    outline: 1px solid ${(props) => props.theme.blue};
  }
`
