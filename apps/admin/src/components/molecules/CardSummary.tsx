/* eslint-disable no-nested-ternary */
/* eslint-disable react/destructuring-assignment */
import React from 'react'
import CardContainter from 'ui/CardContainer'
import NumberFormat from 'react-number-format'
import { HiOutlineTrendingDown, HiOutlineTrendingUp } from 'react-icons/hi'
import CardTitle from 'ui/CardTitle'

interface Props {
  title: string
  value: number
  valueMovement: number
  description?: string
  prefix?: string | undefined
}

export const CardSummary: React.FC<Props> = props => (
  <CardContainter>
    <CardTitle text={props.title} />

    <div className="flex items-center text-slate-800 gap-x-3">
      <NumberFormat
        displayType="text"
        value={props.value}
        prefix={props.prefix}
        thousandSeparator=","
        decimalSeparator="."
        className="text-3xl font-bold"
      />

      <div
        className={`inline-flex items-center gap-x-1 ${
          props.valueMovement > 0
            ? 'text-green-500'
            : props.valueMovement < 0
            ? 'text-red-500'
            : 'text-gray-500'
        }`}
      >
        <NumberFormat
          displayType="text"
          value={props.valueMovement}
          suffix="%"
          thousandSeparator=","
          decimalSeparator="."
          className="font-semibold"
        />

        {props.valueMovement > 0 ? (
          <HiOutlineTrendingUp />
        ) : props.valueMovement < 0 ? (
          <HiOutlineTrendingDown />
        ) : null}
      </div>
    </div>

    <div className="text-xs truncate text-slate-400">{props.description}</div>
  </CardContainter>
)

CardSummary.defaultProps = {
  description: `Perbandingan tahun kemarin (${new Date().getFullYear() - 1})`,
  prefix: undefined,
}

export default React.memo(CardSummary)
