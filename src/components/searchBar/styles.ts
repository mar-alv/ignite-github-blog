import styled from 'styled-components'

export const SearchBarContainer = styled.div``

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
