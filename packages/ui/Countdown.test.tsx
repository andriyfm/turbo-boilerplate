import * as React from 'react'
import { render, screen } from '@testing-library/react'
import Countdown from './Countdown'

describe('Countdown', () => {
  it('should have a correct className', () => {
    render(<Countdown date={Date.now() + 5000} />)
    expect(screen.getByRole('timer')).toHaveClass('flex')
  })
})
