/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react'

export type TPillVariant = 'default' | 'success' | 'warning' | 'danger' | 'info'

interface Props {
  variant: TPillVariant
  text: string
}

export const Pill: React.FC<Props> = ({ variant, text }) => {
  const [color, setColor] = React.useState('')

  React.useEffect(() => {
    switch (variant) {
      case 'success':
        setColor('text-green-700 bg-green-100')
        break
      case 'warning':
        setColor('text-yellow-700 bg-yellow-100')
        break
      case 'danger':
        setColor('text-red-700 bg-red-100')
        break
      case 'info':
        setColor('text-sky-700 bg-sky-100')
        break
      default:
        setColor('text-gray-700 bg-gray-100')
        break
    }
  }, [variant])

  return (
    <span
      className={`text-[10px] min-w-[50px] uppercase px-2 py-0 rounded-full  inline-flex items-center justify-center font-semibold tracking-wide ${color}`}
    >
      {text}
    </span>
  )
}
export default React.memo(Pill)
