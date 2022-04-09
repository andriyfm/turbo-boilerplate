import * as React from 'react'
import { render, screen } from '@testing-library/react'
import Heading from 'ui/Heading'

describe('Heading', () => {
  test('Heading level 1', () => {
    render(<Heading text="Heading 1" level={1} />)
    const heading = screen.getByRole('heading')
    expect(heading).toHaveAttribute('aria-level', '1')
    expect(heading).toHaveClass('text-[36px]')
  })

  test('Heading level 2', () => {
    render(<Heading text="Heading 2" level={2} />)
    const heading = screen.getByRole('heading')
    const className = 'text-[24px]'
    expect(heading).toHaveAttribute('aria-level', '2')
    expect(heading).toHaveClass(className)
  })

  test('Heading level 3', () => {
    render(<Heading text="Heading 3" level={3} />)
    const heading = screen.getByRole('heading')
    expect(heading).toHaveAttribute('aria-level', '3')
    expect(heading).toHaveClass('text-[18px]')
  })

  test('Heading level 4', () => {
    render(<Heading text="Heading 2" level={4} />)
    const heading = screen.getByRole('heading')
    expect(heading).toHaveAttribute('aria-level', '4')
    expect(heading).toHaveClass('text-[14px]')
  })

  test('Heading level 5 atau 6', () => {
    render(<Heading text="Heading 5" level={5} />)
    const heading = screen.getByRole('heading')
    expect(heading).toHaveAttribute('aria-level', '5')
    expect(heading).toHaveClass('text-[14px]')
  })

  test('Heading dengan font weight normal', () => {
    render(<Heading level={1} text="Heading" weight="normal" />)
    const heading = screen.getByRole('heading')
    expect(heading).toHaveClass('font-normal')
  })

  test('Heading default', () => {
    render(<Heading level={1} text="Heading" />)
    const heading = screen.getByRole('heading')
    expect(heading).toHaveClass(
      'font-bold text-black capitalize leading-[150%]',
    )
  })
})
