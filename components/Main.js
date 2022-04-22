import styled from 'styled-components'
import Portfolio from './Portfolio'

const Main = ({ twTokens, sanityTokens, walletAddress }) => {
  return (
    <Wrapper>
      <Portfolio
        twTokens={twTokens}
        sanityTokens={sanityTokens}
        walletAddress={walletAddress}
      />
    </Wrapper>
  )
}

export default Main

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  overflow: scroll;

  & div {
    border-radius: 0.4rem;
  }
`
