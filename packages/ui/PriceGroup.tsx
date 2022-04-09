import * as React from 'react'
import Price from './Price'

interface Props {
  currentPrice: number
  lastPrice: number
  reverse?: boolean
}

const PriceGroup: React.FC<Props> = ({ currentPrice, lastPrice, reverse }) => (
  <div
    role="group"
    className="flex items-center justify-center lg:justify-start gap-x-3"
  >
    <Price
      value={lastPrice}
      priceType="last"
      className={reverse ? 'order-1' : ''}
    />

    <Price value={currentPrice} priceType="current" />
  </div>
)

PriceGroup.defaultProps = {
  reverse: false,
}

export default PriceGroup
