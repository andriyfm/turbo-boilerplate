import * as React from 'react'
import { HiBadgeCheck } from 'react-icons/hi'

interface Props {
  text: string
  reverse?: boolean
}

const CheckedList: React.FC<Props> = ({ text, reverse }) => (
  <div role="listitem" className="inline-flex items-center truncate gap-x-3">
    <HiBadgeCheck
      role="img"
      className={`flex-none text-2xl text-primary ${
        reverse ? 'lg:order-2' : ''
      }`}
    />
    <span role="textbox" className="text-sm font-bold text-black truncate">
      {text}
    </span>
  </div>
)

CheckedList.defaultProps = {
  reverse: false,
}

export default CheckedList
