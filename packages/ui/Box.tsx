/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react'
import NextImage from 'next/image'

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  backgroundImg?: string
  backgroundColor?: string
}

const Box: React.FC<Props> = ({ backgroundImg, backgroundColor, ...props }) => (
  <div
    {...props}
    role="group"
    className={`relative ${backgroundColor} ${props.className ?? ''}`}
  >
    {backgroundImg && (
      <NextImage
        src={backgroundImg}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="absolute w-full h-full opacity-30"
      />
    )}
    <div
      role="main"
      className="relative flex flex-col items-center justify-center gap-6 px-5 py-10 lg:px-0 lg:gap-10"
    >
      {props.children}
    </div>
  </div>
)

Box.defaultProps = {
  backgroundImg: '',
  backgroundColor: 'bg-[#F4F4F4]',
}

export default Box
