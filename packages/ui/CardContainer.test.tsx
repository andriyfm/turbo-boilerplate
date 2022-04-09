import * as React from 'react'
import { render, screen } from '@testing-library/react'
import CardContainer from './CardContainer'

test('CardContainer', () => {
  render(<CardContainer>some text here...</CardContainer>)
  const elCardContainer = screen.getByRole('group')
  expect(elCardContainer).toBeInTheDocument()
})
