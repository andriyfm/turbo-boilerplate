/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react'
import NumberFormat, { NumberFormatProps } from 'react-number-format'

interface Props {
  value: NumberFormatProps['value']
  priceType?: 'current' | 'last'
  className?: string
}

const Price: React.FC<Props> = ({ priceType, value, className, ...props }) => {
  const variantClass = React.useMemo(() => {
    if (priceType === 'last') return 'text-sm line-through text-gray-400'
    return 'text-2xl text-black'
  }, [priceType])

  return (
    <NumberFormat
      {...props}
      displayType="text"
      thousandSeparator="."
      decimalSeparator=","
      prefix="Rp "
      value={value}
      className={`font-bold leading-none ${variantClass} ${className}`}
    />
  )
}

Price.defaultProps = {
  priceType: 'current',
  className: '',
}

export default Price
