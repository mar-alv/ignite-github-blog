import { createGlobalStyle } from 'styled-components'
import bgImg from '../assets/bg-img.png'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
    
    background-color:  ${(props) => props.theme['base-background']};
    background-image: url(${bgImg});
    background-repeat: no-repeat;
    background-size: contain;
  }

  body, input, textarea, button {
    font-family: 'Nunito', sans-serif;
  }

  #app {
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

  .title-l {
    font-size: ${(props) => props.theme.fontSize['title-l']};
    line-height: ${(props) => props.theme.lineHeight['title-l']};
	}

  .title-m {
    font-size: ${(props) => props.theme.fontSize['title-m']};
    line-height: ${(props) => props.theme.lineHeight['title-m']};
	}

  .title-s {
    font-size: ${(props) => props.theme.fontSize['title-s']};
    line-height: ${(props) => props.theme.lineHeight['title-s']};
	}

  .text-m {
    font-size: ${(props) => props.theme.fontSize['text-m']};
    line-height: ${(props) => props.theme.lineHeight['text-m']};
	}

  .text-s {
    font-size: ${(props) => props.theme.fontSize['text-s']};
    line-height: ${(props) => props.theme.lineHeight['text-s']};
	}
`
