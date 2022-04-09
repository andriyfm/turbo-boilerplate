/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react'

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  text: string
  weight?: 'normal' | 'bold'
  className?: string
}

const Paragraph: React.FC<Props> = ({ text, weight, ...props }) => {
  const fontWeight = React.useMemo(
    () => (weight === 'bold' ? 'font-bold' : 'font-normal'),
    [weight],
  )

  return (
    <p
      {...props}
      className={`text-black leading-[150%] ${fontWeight} ${props.className}`}
    >
      {text}
    </p>
  )
}

Paragraph.defaultProps = {
  weight: 'normal',
  className: '',
}

export default Paragraph
