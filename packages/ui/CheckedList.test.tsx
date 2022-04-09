import * as React from 'react'
import { render, screen } from '@testing-library/react'
import CheckedList from './CheckedList'

describe('CheckedList', () => {
  it('listitem should have a correct class', () => {
    render(<CheckedList text="lingkaran hitam dibawah mata" />)
    const element = screen.getByRole('listitem')
    const className = 'inline-flex items-center gap-x-3'
    expect(element).toHaveClass(className)
  })

  it('img should have a correct class', () => {
    render(<CheckedList text="lingkaran hitam dibawah mata" />)
    const element = screen.getByRole('img')
    const className = 'flex-none text-2xl text-primary'
    expect(element).toHaveClass(className)
  })

  it('textbox should have a correct class', () => {
    render(<CheckedList text="lingkaran hitam dibawah mata" />)
    const element = screen.getByRole('textbox')
    const className = 'text-sm font-bold text-black'
    expect(element).toHaveClass(className)
  })

  it('change className when reverse order', () => {
    render(<CheckedList text="lingkaran hitam dibawah mata" reverse />)
    const element = screen.getByRole('img')
    expect(element).toHaveClass('lg:order-2')
  })
})
