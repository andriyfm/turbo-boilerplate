import * as React from 'react'

export interface Props {
  value: number
  label: 'hari' | 'jam' | 'menit' | 'detik'
  variant?: 'dark' | 'light'
}

const Ticker: React.FC<Props> = ({ variant, value, label }) => {
  const bgColor = React.useMemo(
    () => (variant === 'dark' ? 'bg-black text-white' : 'bg-white text-black'),
    [variant],
  )

  const getValue = React.useMemo(() => {
    if (value < 10) return `0${value}`
    return value
  }, [value])

  return (
    <div
      role="group"
      className={`${bgColor} w-[50px] h-[50px] p-[10px] rounded-md flex flex-col items-center gap-0`}
    >
      <div className="text-2xl font-bold font-roboto leading-[80%]">
        {getValue}
      </div>
      <div className="text-[10px] font-bold uppercase">{label}</div>
    </div>
  )
}

Ticker.defaultProps = {
  // eslint-disable-next-line react/default-props-match-prop-types
  variant: 'dark',
}

export default Ticker
