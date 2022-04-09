import { render, screen } from '@testing-library/react'
import * as React from 'react'
import { CardTitle } from './CardTitle'

test('CardTitle', () => {
  render(<CardTitle text="Hello" />)
  const elCardTitle = screen.getByRole('heading')
  expect(elCardTitle).toBeInTheDocument()
})
