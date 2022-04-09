import * as React from 'react'
import { render, screen } from '@testing-library/react'
import MessageBox from './MessageBox'

describe('MessageBox', () => {
  it('should have a correct className', () => {
    render(
      <MessageBox text="Excepteur laborum aliqua minim pariatur aliquip aliqua do quis." />,
    )
    const element = screen.getByRole('textbox')
    const className = 'px-6 py-4 text-sm text-white bg-black rounded-md'
    expect(element).toHaveClass(className)
  })
})
