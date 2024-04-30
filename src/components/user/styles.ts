import styled from 'styled-components'

export const StyledUser = styled.section`
  padding: 3.2rem 4rem;
  gap: 3.2rem;
  display: grid;

  border-radius: 1rem;
  background-color: ${(props) => props.theme['base-profile']};

  img {
    width: 14.8rem;
    height: 14.8rem;
		justify-self: center;

    border-radius: .8rem;
  }

	@media (width > 540px) {
		grid-template-columns: auto 1fr;

		img {
			justify-self: initial;
		}
	}
`

export const StyledDescription = styled.p`
	margin-top: 1.6rem;

	color: ${(props) => props.theme['base-text']};
`

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;

  a {
		gap: .8rem;
		display: flex;
		align-items: center;
  }
`

export const StyledInfo = styled.div`
  margin-top: 2.4rem;
  gap: 2.4rem;
  display: flex;
	flex-wrap: wrap;

  a {
    color: ${(props) => props.theme['base-label']};
  }

  span {
		gap: .8rem;
		display: flex;
		align-items: center;

    color: ${(props) => props.theme['base-subtitle']};
  }
`
