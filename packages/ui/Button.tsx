/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react'

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  text: string
  variant?: 'primary' | 'secondary' | 'black' | 'white'
}

const Button: React.FC<Props> = ({ variant, text, ...props }) => {
  const variantColor = React.useMemo(() => {
    switch (variant) {
      case 'primary':
        return 'bg-primary text-lightgray'
      case 'secondary':
        return 'bg-secondary text-black'
      case 'black':
        return 'bg-black text-white'
      case 'white':
        return 'bg-white text-black'
      default:
        return 'bg-primary text-lightgray'
    }
  }, [variant])

  return (
    <button
      {...props}
      type="button"
      className={`min-w-[102px] py-[14px] transition-all px-6 rounded-md text-xs font-bold uppercase hover:bg-opacity-80 ${variantColor} ${props.className}`}
    >
      {text}
    </button>
  )
}

Button.defaultProps = {
  variant: 'primary',
}

export default Button
