/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react'
import ReactCountdown, {
  CountdownProps,
  CountdownRendererFn,
} from 'react-countdown'
import Ticker, { Props as TickerProps } from './Ticker'

interface Props extends CountdownProps {
  date: Date | string | number | undefined
  variant?: TickerProps['variant']
}

const Countdown: React.FC<Props> = ({ date, variant, ...props }) => {
  const renderer: CountdownRendererFn = args => {
    const { days, hours, minutes, seconds } = args

    return (
      <div role="timer" className="flex gap-1 p-3">
        <Ticker label="hari" value={days} variant={variant} />
        <Ticker label="jam" value={hours} variant={variant} />
        <Ticker label="menit" value={minutes} variant={variant} />
        <Ticker label="detik" value={seconds} variant={variant} />
      </div>
    )
  }

  return (
    <ReactCountdown
      {...props}
      zeroPadTime={2}
      date={date}
      renderer={renderer}
    />
  )
}

Countdown.defaultProps = {
  variant: 'dark',
}

export default Countdown
