import * as React from 'react'
import { render, screen } from '@testing-library/react'
import ImageGallery from './ImageGallery'

const items = ['/images/cyberpunk.jpg']

describe('ImageGallery', () => {
  it('should have 4 columns', () => {
    render(<ImageGallery columns={4} items={items} />)
    const element = screen.getByRole('grid')
    const className = 'grid grid-cols-4 gap-3'
    expect(element).toHaveClass(className)
  })

  it('should have 6 columns', () => {
    render(<ImageGallery columns={6} items={items} />)
    const element = screen.getByRole('grid')
    const className = 'grid grid-cols-6 gap-3'
    expect(element).toHaveClass(className)
  })
})
