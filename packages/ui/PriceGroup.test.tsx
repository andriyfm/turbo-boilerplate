import * as React from 'react'
import { render, screen } from '@testing-library/react'
import PriceGroup from './PriceGroup'

describe('Price', () => {
  it('should have a correct className', () => {
    render(<PriceGroup currentPrice={35000} lastPrice={40000} />)
    const element = screen.getByRole('group')
    expect(element).toHaveClass('flex items-center gap-x-3')
  })

  it('should have a correct className when reverse', () => {
    render(<PriceGroup currentPrice={35000} lastPrice={40000} reverse />)
    const element = screen.getByText('Rp 40.000')
    expect(element).toHaveClass('order-1')
  })
})
