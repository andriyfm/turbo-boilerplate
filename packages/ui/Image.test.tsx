import * as React from 'react'
import { render, screen } from '@testing-library/react'
import Image from './Image'

describe('Image', () => {
  it('Image style', () => {
    render(<Image src="/images/thumb-1.jpg" layout="fill" />)
    const element = screen.getByRole('img')
    const className = 'rounded-md bg-lightgray'
    expect(element).toHaveClass(className)
  })
})
