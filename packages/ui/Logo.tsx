/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react'
import NextImage, { ImageProps } from 'next/image'

interface Props extends ImageProps {}

const Logo: React.FC<Props> = props => (
  <NextImage
    {...props}
    layout="intrinsic"
    width={80}
    height={80}
    objectFit="cover"
    objectPosition="center"
    className="rounded-full bg-lightgray"
  />
)

export default Logo
