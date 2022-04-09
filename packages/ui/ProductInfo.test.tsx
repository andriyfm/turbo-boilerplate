/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react'
import { render, screen } from '@testing-library/react'
import ProductInfo from './ProductInfo'

const props = {
  imageSrc: '/images/cyberpunk.jpg',
  title: 'serum glow',
  description: 'Isi 20ml',
  pricing: {
    currentPrice: 35000,
    lastPrice: 568000,
  },
  listItems: [
    'Treatment Acne (Paket Acne)',
    'Normal Glowing (Paket Brightening)',
    'Masker Wajah',
    'Body Lotion',
    'Serum',
  ],
}

describe('ProductInfo', () => {
  it('grid should have a correct className', () => {
    render(<ProductInfo {...props} />)
    const element = screen.getByRole('grid')
    const className =
      'flex flex-col items-center gap-6 lg:px-10 lg:flex-row lg:gap-14'
    expect(element.className).toBe(className)
  })

  it('figure should have a correct className', () => {
    render(<ProductInfo {...props} />)
    const element = screen.getByRole('figure')
    const className = 'relative w-full h-[279px] lg:w-[336px] lg:h-[417px] '
    expect(element.className).toBe(className)
  })

  it('contentinfo should have a correct className', () => {
    render(<ProductInfo {...props} />)
    const element = screen.getByRole('contentinfo')
    const className = 'flex flex-col items-center lg:items-start gap-y-6'
    expect(element.className).toBe(className)
  })

  it('definition should have a correct className', () => {
    render(<ProductInfo {...props} />)
    const element = screen.getByRole('definition')
    const className = 'text-center lg:text-left'
    expect(element.className).toBe(className)
  })

  it('listbox should have a correct className', () => {
    render(<ProductInfo {...props} />)
    const element = screen.getByRole('listbox')
    const className = 'flex flex-col lg:items-start gap-y-3'
    expect(element.className).toBe(className)
  })

  it('figure should change the className when reverse order', () => {
    render(<ProductInfo {...props} reverse />)
    const elFigure = screen.getByRole('figure')
    const classFigure = 'lg:order-2'
    expect(elFigure).toHaveClass(classFigure)
  })

  it('contentinfo should change the className when reverse order', () => {
    render(<ProductInfo {...props} reverse />)
    const elContentInfo = screen.getByRole('contentinfo')
    const classContentInfo = 'lg:items-end'
    expect(elContentInfo).toHaveClass(classContentInfo)
  })

  it('listbox should change the className when reverse order', () => {
    render(<ProductInfo {...props} reverse />)
    const elListBox = screen.getByRole('listbox')
    const classListBox = 'lg:items-end'
    expect(elListBox).toHaveClass(classListBox)
  })

  it.todo('button text should be start with "pesan" followed by title')
  it.todo('button should execute the purchase event of meta pixel')
})
