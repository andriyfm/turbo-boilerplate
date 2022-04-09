import { render, screen } from '@testing-library/react'
import * as React from 'react'
import Box from './Box'

describe('Box', () => {
  it('group should have a correct className', () => {
    render(<Box />)
    const element = screen.getByRole('group')
    const className = 'relative'
    expect(element).toHaveClass(className)
  })

  it('main should have a correct className', () => {
    render(<Box />)
    const element = screen.getByRole('main')
    const className =
      'relative flex flex-col items-center justify-center gap-6 px-5 py-10 lg:px-0 lg:gap-10'
    expect(element.className).toBe(className)
  })

  it('should show the background image', () => {
    render(
      <Box
        backgroundImg="/images/cyberpunk.jpg"
        className="w-full h-[720px] bg-red-300"
      />,
    )
    const element = screen.getByRole('img')
    const className = 'absolute w-full h-full opacity-30'

    expect(element).toBeInTheDocument()
    expect(element.className).toBe(className)
  })
})
