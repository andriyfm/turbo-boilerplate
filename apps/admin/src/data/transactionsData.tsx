export interface ITransaction {
  id: string
  name: string
  createdAt: string
  amount: number
  status: 'paid' | 'pending' | 'canceled' | 'rejected' | 'refunded'
}

export const transactionsData: ITransaction[] = [
  {
    id: '1',
    name: 'John Doe',
    createdAt: '2020-01-01',
    amount: 199,
    status: 'paid',
  },
  {
    id: '2',
    name: 'Jane Doe',
    createdAt: '2020-02-02',
    amount: 200,
    status: 'pending',
  },
  {
    id: '3',
    name: 'Samuel',
    createdAt: '2020-03-03',
    amount: 99,
    status: 'canceled',
  },
  {
    id: '4',
    name: 'Bimantara',
    createdAt: '2020-04-04',
    amount: 178,
    status: 'rejected',
  },
  {
    id: '5',
    name: 'Sulistio Pramono',
    createdAt: '2020-05-05',
    amount: 178,
    status: 'refunded',
  },
]
