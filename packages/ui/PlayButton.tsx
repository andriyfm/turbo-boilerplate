/* eslint-disable react/jsx-props-no-spreading */
import NextImage from 'next/image'
import * as React from 'react'

const PlayButton: React.FC = () => (
  <NextImage
    layout="intrinsic"
    width={55}
    height={55}
    objectFit="cover"
    objectPosition="center"
    src="/assets/play-button.svg"
  />
)

export default PlayButton
