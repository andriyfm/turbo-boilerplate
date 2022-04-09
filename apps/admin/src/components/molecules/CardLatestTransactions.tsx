import { ITransaction } from 'data/transactionsData'
import * as React from 'react'
import NumberFormat from 'react-number-format'
import CardContainer from 'ui/CardContainer'
import { CardTitle } from 'ui/CardTitle'
import { Pill, TPillVariant } from 'ui/Pill'

interface Props {
  transactions: ITransaction[]
}

function getVariantColor(status: ITransaction['status']): TPillVariant {
  switch (status) {
    case 'canceled':
      return 'danger'
    case 'paid':
      return 'success'
    case 'pending':
      return 'info'
    case 'refunded':
      return 'warning'
    default:
      return 'default'
  }
}

export const CardLatestTransactions: React.FC<Props> = ({ transactions }) => (
  <CardContainer>
    <CardTitle text="latest transactions" />
    <table className="table w-full text-sm table-auto">
      <thead className="border-b text-slate-800 border-slate-100">
        <tr>
          <th className="py-2.5 text-left">Customer</th>
          <th className="py-2.5 text-right">Date</th>
          <th className="py-2.5 text-right">Amount</th>
          <th className="py-2.5 text-right">Status</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-100 text-slate-600">
        {transactions.map(transaction => (
          <tr key={transaction.id}>
            <td className="py-2.5 text-left">
              <div className="flex items-center font-semibold gap-x-3">
                <div className="flex items-center justify-center w-8 h-8 text-xs text-white uppercase bg-green-500 rounded-full">
                  {transaction.name.charAt(0)}
                </div>
                <div className="capitalize">{transaction.name}</div>
              </div>
            </td>
            <td className="py-2.5 text-right">{transaction.createdAt}</td>
            <td className="py-2.5 text-right">
              <NumberFormat
                displayType="text"
                value={transaction.amount}
                thousandSeparator=","
                decimalSeparator="."
                prefix="$"
              />
            </td>
            <td className="py-2.5 text-right">
              <Pill
                variant={getVariantColor(transaction.status)}
                text={transaction.status}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </CardContainer>
)

export default React.memo(CardLatestTransactions)
