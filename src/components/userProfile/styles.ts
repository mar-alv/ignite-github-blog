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

  a svg {
    margin-left: 0.5rem;
  }
`

export const ProfileInfo = styled.div`
  margin-top: 1.5rem;

  gap: 1.5rem;
  display: flex;

  svg {
    margin-right: 0.5rem;

    color: ${(props) => props.theme['base-label']};
  }

  span {
    color: ${(props) => props.theme['base-subtitle']};
  }
`
