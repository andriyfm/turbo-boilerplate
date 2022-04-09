import * as React from 'react'
import { render, screen } from '@testing-library/react'
import Ticker from './Ticker'

describe('Ticker', () => {
  it('style of group role', () => {
    render(<Ticker value={0} label="hari" />)
    const element = screen.getByRole('group')
    const className =
      'bg-black text-white w-[50px] h-[50px] p-[10px] rounded-md flex flex-col items-center gap-0'
    expect(element).toHaveClass(className)
  })

  it('should bg-white if the variant is light', () => {
    render(<Ticker value={0} label="hari" variant="light" />)
    const element = screen.getByRole('group')
    expect(element).toHaveClass('bg-white')
  })

  it('style of value itemID', () => {
    const { rerender } = render(<Ticker value={1} label="hari" />)
    rerender(<Ticker value={1} label="hari" />)

    const element = screen.getByText('01')
    expect(element).toHaveTextContent('01')

    const className = 'text-2xl font-bold font-roboto leading-[80%]'
    expect(element).toHaveClass(className)
  })

  it('style lable element', () => {
    render(<Ticker value={0} label="hari" />)
    const element = screen.getByText('hari')
    const className = 'text-[10px] font-bold uppercase'
    expect(element).toHaveClass(className)
  })
})
