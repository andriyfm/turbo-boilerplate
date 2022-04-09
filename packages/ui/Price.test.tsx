import * as React from 'react'
import { render, screen } from '@testing-library/react'
import Price from './Price'

describe('Price', () => {
  it('price default should have a correct className', () => {
    render(<Price value={35000} />)
    const element = screen.getByText('Rp 35.000')
    const className = 'text-2xl font-bold text-black'
    expect(element).toHaveClass(className)
  })

  it('last price type should have a correct className', () => {
    render(<Price value={35000} priceType="last" />)
    const element = screen.getByText('Rp 35.000')
    const className = 'text-sm font-bold text-gray-400 line-through'
    expect(element).toHaveClass(className)
  })

  it('should have a correct format', () => {
    render(<Price value={35000} />)
    const element = screen.getByText('Rp 35.000')
    expect(element).toBeInTheDocument()
  })
})
