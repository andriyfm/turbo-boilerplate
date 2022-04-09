/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react'
import { render, screen } from '@testing-library/react'
import { HiThumbUp } from 'react-icons/hi'
import FeatureCard, { Props } from './FeatureCard'

const props: Props = {
  icon: <HiThumbUp />,
  title: 'Terbukti Menghilangkan Masalah Pada Wajah',
  description:
    'Seperti jerawat dan noda bekas jerawat hilang, kulit tak lagi kusam/ berminyak serta wajah tampak lebih bercahaya',
}

describe('FeatureCard', () => {
  it('article should have a correct className', () => {
    render(<FeatureCard {...props} />)
    const element = screen.getByRole('article')
    const className =
      'px-10 py-10 sm:px-20 sm:py-16 md:px-3 md:py-5 lg:px-5 lg:py-7 rounded-md bg-pastel-pink-light text-black text-center flex flex-col items-center justify-center gap-[30px]'
    expect(element.className).toBe(className)
  })

  it('group should have a correct className', () => {
    render(<FeatureCard {...props} />)
    const element = screen.getByRole('group')
    const className = 'space-y-[20px] px-12 md:px-3'
    expect(element.className).toBe(className)
  })

  it('img should have a correct className', () => {
    render(<FeatureCard {...props} />)
    const element = screen.getByRole('img')
    const className = 'flex justify-center text-6xl'
    expect(element.className).toBe(className)
  })
})
