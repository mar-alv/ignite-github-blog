import styled from 'styled-components'

export const SearchBarContainer = styled.form`
  margin-top: 4.5rem;

  input {
    width: 100%;

    margin-top: 0.75rem;
    padding: 0.75rem;

    border-radius: 6px;
    border: 1px solid ${(props) => props.theme['base-border']};

    font-size: ${(props) => props.theme.fontSize['text-m']};
    line-height: ${(props) => props.theme.lineHeight['text-m']};
    color: ${(props) => props.theme['base-text']};

    background-color: ${(props) => props.theme['base-input']};
  }

  input::placeholder {
    color: ${(props) => props.theme['base-label']};
  }

  input:focus {
    outline: 2px solid ${(props) => props.theme.blue};
  }
`

export const SearchBarHeader = styled.header`
  display: flex;
  justify-content: space-between;

  h3 {
    font-size: ${(props) => props.theme.fontSize['title-s']};
    line-height: ${(props) => props.theme.lineHeight['title-s']};
    color: ${(props) => props.theme['base-subtitle']};
  }

  span {
    font-size: ${(props) => props.theme.fontSize['text-s']};
    line-height: ${(props) => props.theme.lineHeight['text-s']};
    color: ${(props) => props.theme['base-span']};
  }
`
