import styled from 'styled-components'

export const StyledUser = styled.section`
  padding: 2rem 2.5rem;
  gap: 2rem;
  display: flex;

  border-radius: 10px;
  background-color: ${(props) => props.theme['base-profile']};

  img {
    width: 9.25rem;
    height: 9.25rem;

    border-radius: 8px;
  }
`

export const StyledDescription = styled.p`
	margin-top: 1rem;

	color: ${(props) => props.theme['base-text']};
`

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;

  a {
		gap: .5rem;
		display: flex;
		align-items: center;
  }
`

export const StyledInfo = styled.div`
  margin-top: 1.5rem;
  gap: 1.5rem;
  display: flex;

  a {
    color: ${(props) => props.theme['base-label']};
  }

  span {
		gap: .5rem;
		display: flex;
		align-items: center;

    color: ${(props) => props.theme['base-subtitle']};
  }
`
