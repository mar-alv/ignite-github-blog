import styled from 'styled-components'

export const ProfileContainer = styled.div`
  display: flex;

  gap: 2rem;
  padding: 2rem 2.5rem;

  border-radius: 10px;

  background-color: ${(props) => props.theme['base-profile']};

  img {
    width: 9.25rem;
    height: 9.25rem;

    border-radius: 8px;
  }
`

export const ProfileAbout = styled.div`
  p {
    margin-top: 1rem;

    font-size: ${(props) => props.theme.fontSize['text-m']};
    line-height: ${(props) => props.theme.lineHeight['text-m']};
    color: ${(props) => props.theme['base-text']};
  }
`

export const ProfileHeader = styled.header`
  display: flex;
  justify-content: space-between;

  h1 {
    font-size: ${(props) => props.theme.fontSize['title-l']};
    line-height: ${(props) => props.theme.lineHeight['title-l']};
    color: ${(props) => props.theme['base-title']};
  }

  a {
    font-size: ${(props) => props.theme.link};
    font-weight: bold;
    line-height: ${(props) => props.theme.lineHeight.link};
    color: ${(props) => props.theme.blue};
    text-decoration: none;
  }

  a svg {
    margin-left: 0.5rem;
  }

  a:hover {
    text-decoration: underline;
  }
`

export const ProfileInfo = styled.div`
  margin-top: 1.5rem;

  gap: 1.5rem;
  display: flex;

  svg {
    margin-right: 0.5rem;
  }

  p {
    color: ${(props) => props.theme['base-subtitle']};
  }
`
