// eslint-disable-next-line import/no-extraneous-dependencies
import * as React from 'react'

const CardContainer: React.FC = ({ children }) => (
  <div role="group" className="p-5 bg-white border rounded-lg border-slate-100">
    {children}
  </div>
)

export default CardContainer
