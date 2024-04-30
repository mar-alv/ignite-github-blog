import cover from '../assets/cover.jpg'
import logo from '../assets/logo.png'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *::before,
  *,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    transition: background-color 0.3s, color 0.3s, scale 0.3s,
      transform 0.3s;
  }

	:root {
    font-size: clamp(0.5rem, 1vw, 0.625rem);
  }

  html {
    hanging-punctuation: first last;
  }

  body {
    height: 100vh;
    min-height: 100svh;

    background-color: ${(props) => props.theme['base-background']};
    background-image: url(${cover});
    background-repeat: no-repeat;
    background-size: 100% 40vh;
  }

  body,
	button,
	input {
    font-family: 'Nunito', system-ui, sans-serif;
  }

  #app {
    width: 100%;
    max-width: 88rem;
    margin:  20rem auto;
    padding: 0 2.4rem;
  }

	h1,
  h2,
  h3,
  h4 {
    text-wrap: balance;
  }

  h1 {
    color: ${(props) => props.theme['base-title']};
  }

  p {
    max-width: 62ch;

    text-wrap: pretty;
  }

  a,
  button,
  input {
    all: unset;
    appearance: none;
  }

  a {
		cursor: pointer;
    text-decoration: none;
    font-size: ${(props) => props.theme.fontSize.link};
    font-weight: bold;
    line-height: ${(props) => props.theme.lineHeight.link};
    color: ${(props) => props.theme.blue};

		&:hover {
    	text-decoration: underline;
  	}

		&:focus {
			outline-offset: .2rem;
			outline: .1rem solid ${(props) => props.theme.blue};
		}
	}

	img,
	svg {
		max-width: 100%;
		height: auto;
		display: block;
	}

	button {
    cursor: pointer;

		&:disabled {
			cursor: not-allowed;
		}
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
