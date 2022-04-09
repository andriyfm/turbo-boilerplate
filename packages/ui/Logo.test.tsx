import * as React from 'react'
import { render, screen } from '@testing-library/react'
import Logo from './Logo'

describe('Logo', () => {
  it('should have a correct className', () => {
    render(<Logo src="/images/cyberpunk.jpg" />)
    const element = screen.getByRole('img')
    const className = 'rounded-full bg-lightgray'
    expect(element).toHaveClass(className)
  })
  it.todo('should have size 80x80')
})
