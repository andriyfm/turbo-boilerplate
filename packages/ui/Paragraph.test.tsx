import * as React from 'react'
import { render, screen } from '@testing-library/react'
import Paragraph from './Paragraph'

describe('Paragraph', () => {
  it('default paragraph', () => {
    render(<Paragraph text="Hello world" />)
    const element = screen.getByText('Hello world')
    const className = 'text-black leading-[150%] font-normal '
    expect(element.className).toBe(className)
  })

  it('bold paragraph', () => {
    render(<Paragraph text="Hello world" weight="bold" />)
    const element = screen.getByText('Hello world')
    expect(element).toHaveClass('font-bold')
  })
})
