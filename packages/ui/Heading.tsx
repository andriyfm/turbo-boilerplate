/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react'

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  level: 1 | 2 | 3 | 4 | 5 | 6
  text: string
  weight?: 'normal' | 'bold'
}

const Heading: React.FC<Props> = ({ level, weight, text, ...props }) => {
  const fontSize = React.useMemo(() => {
    switch (level) {
      case 1:
        return 'text-[36px]'
      case 2:
        return 'text-[24px]'
      case 3:
        return 'text-[18px]'
      case 4:
        return 'text-[14px]'
      default:
        return 'text-[14px]'
    }
  }, [level])

  const fontWight = React.useMemo(() => {
    switch (weight) {
      case 'bold':
        return 'font-bold'
      case 'normal':
        return 'font-normal'
      default:
        return 'font-bold'
    }
  }, [weight])

  return (
    <div
      {...props}
      role="heading"
      aria-level={level}
      className={`text-black capitalize leading-[150%] ${fontSize} ${fontWight} ${props.className}`}
    >
      {text}
    </div>
  )
}

Heading.defaultProps = {
  weight: 'bold',
}

export default Heading
