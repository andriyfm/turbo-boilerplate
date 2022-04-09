import * as React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Button from './Button'

test('Button', () => {
  const onClick = jest.fn()
  render(<Button text="Hello" onClick={onClick} />)
  const elButton = screen.getByText('Hello')
  fireEvent.click(elButton)
  expect(onClick).toHaveBeenCalledTimes(1)
})
