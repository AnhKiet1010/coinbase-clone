import styled from 'styled-components'
import { BsThreeDotsVertical } from 'react-icons/bs'
// import Icon from 'react-crypto-icons'

const Coin = ({ coin }) => {

  function formatusd(n, currency) {
    return currency + n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
  }

  return (
    <Wrapper>
      <div>
        <div style={{ flex: 3 }}>
          <NameCol>
            <CoinIcon>
              <img src={coin.image.small} alt={coin.name} width="100%" />
            </CoinIcon>
            <div>
              <Primary>{coin.name}</Primary>
            </div>
            <Secondary>{coin.symbol.toUpperCase()}</Secondary>
          </NameCol>
        </div>
        <div style={{ flex: 2 }}>
          <Primary>
            {formatusd(coin.market_data.current_price.usd, '$')}
          </Primary>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ color: coin.market_data.price_change_percentage_24h_in_currency.usd < 0 ? '#f0616d' : '#26ad75' }}>
            {coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(3) > 0 && '+'}
            {coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(3)}%
          </div>
        </div>
        <div style={{ flex: 1 }}>{1}%</div>
        <div style={{ flex: 0 }}>
          <BsThreeDotsVertical />
        </div>
      </div>
    </Wrapper>
  )
}

export default Coin

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  & > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
  }
`

const NameCol = styled.div`
  display: flex;
  align-items: center;
`

const CoinIcon = styled.div`
  width: 1.8rem;
  margin-right: 1rem;
`

const Primary = styled.div`
  margin-bottom: 0.1rem;
`

const Secondary = styled.div`
  color: #8a919e;
  font-size: 1rem;
  margin-left: 0.5rem;
`
