/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react'

interface Props {
  text: string
}

export const CardTitle: React.FC<Props> = ({ text }) => (
  <div
    role="heading"
    aria-level={4}
    className="mb-3 font-semibold capitalize text-slate-500"
  >
    {text}
  </div>
)

export default React.memo(CardTitle)
