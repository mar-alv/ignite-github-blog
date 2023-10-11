import styled from 'styled-components'

export const ProfileContainer = styled.div`
  padding: 2rem;

  border-radius: 10px;

  background-color: ${(props) => props.theme['base-profile']};

  h1 {
    margin-top: 1.25rem;
  }
`

export const ProfileHeader = styled.header`
  display: flex;
  justify-content: space-between;

  a svg:first-child {
    margin-right: 0.5rem;
  }

  a svg:last-child {
    margin-left: 0.5rem;
  }
`

export const ProfileInfo = styled.div`
  margin-top: 0.5rem;

  gap: 1.5rem;
  display: flex;

  svg {
    margin-right: 0.5rem;
    color: ${(props) => props.theme['base-label']};
  }

  span {
    color: ${(props) => props.theme['base-span']};
  }
`
