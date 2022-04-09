import * as Molecule from 'components/molecules'
import { transactionsData } from 'data/transactionsData'
import useSummaryHook from 'hooks/useSummaryHook'
import * as Layout from 'layouts'
import * as React from 'react'

export const HomeTemplate: React.FC = () => {
  const {
    brands,
    categories,
    images,
    orders,
    products,
    users,
    vendors,
    transactions,
    latestUsers,
  } = useSummaryHook()

  return (
    <Layout.AppLayout title="Dashboard Default">
      <div className="space-y-3">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-4 xl:grid-cols-8">
          <div className="col-span-2">
            <Molecule.CardSummary
              title="products"
              value={products ?? 0}
              valueMovement={0}
            />
          </div>

          <div className="col-span-2">
            <Molecule.CardSummary
              title="users"
              value={users ?? 0}
              valueMovement={0}
            />
          </div>

          <div className="col-span-2">
            <Molecule.CardSummary
              title="orders"
              value={orders ?? 0}
              valueMovement={0}
            />
          </div>

          <div className="col-span-2">
            <Molecule.CardSummary
              title="transactions"
              value={transactions ?? 0}
              valueMovement={0}
            />
          </div>

          <div className="col-span-2">
            <Molecule.CardSummary
              title="categories"
              value={categories ?? 0}
              valueMovement={0}
            />
          </div>

          <div className="col-span-2">
            <Molecule.CardSummary
              title="brands"
              value={brands ?? 0}
              valueMovement={0}
            />
          </div>

          <div className="col-span-2">
            <Molecule.CardSummary
              title="vendors"
              value={vendors ?? 0}
              valueMovement={0}
            />
          </div>

          <div className="col-span-2">
            <Molecule.CardSummary
              title="images"
              value={images ?? 0}
              valueMovement={0}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 xl:grid-cols-8">
          <div className="col-span-1 xl:col-span-3">
            <Molecule.CardLatestMember
              title="new join member"
              users={latestUsers}
            />
          </div>
          <div className="col-span-1 xl:col-span-5">
            <Molecule.CardLatestTransactions transactions={transactionsData} />
          </div>
        </div>
      </div>
    </Layout.AppLayout>
  )
}

export default HomeTemplate
