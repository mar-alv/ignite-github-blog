import styled from 'styled-components'

export const IssueContainer = styled.article`
  padding: 2rem;
  border-radius: 10px;

  background-color: ${(props) => props.theme['base-post']};

  p {
    margin-top: 2rem;

    font-size: ${(props) => props.theme.fontSize['text-m']};
    line-height: ${(props) => props.theme.lineHeight['text-m']};
    color: ${(props) => props.theme['base-text']};
  }
`

export const IssueHeader = styled.header`
  display: flex;
  justify-content: space-between;

  h2 {
    max-width: 280px;

    font-size: ${(props) => props.theme.fontSize['title-m']};
    line-height: ${(props) => props.theme.lineHeight['title-m']};
    color: ${(props) => props.theme['base-title']};
  }

  span {
    font-size: ${(props) => props.theme.fontSize['text-s']};
    line-height: ${(props) => props.theme.lineHeight['text-s']};
    color: ${(props) => props.theme['base-span']};
  }
`
