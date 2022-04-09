/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react'
import NextImage, { ImageProps } from 'next/image'

interface Props extends ImageProps {}

const Image: React.FC<Props> = props => (
  <NextImage {...props} className="rounded-md bg-lightgray" />
)

export default Image
