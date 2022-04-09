import React from 'react'
import CardContainer from 'ui/CardContainer'
import CardTitle from 'ui/CardTitle'
import Image from 'next/image'
import { HiOutlineUserAdd } from 'react-icons/hi'
import { IUser } from 'data/usersData'
import Skeleton from 'react-loading-skeleton'

interface Props {
  title: string
  users: IUser[]
}

export const CardLatestMember: React.FC<Props> = ({ title, users }) => (
  <CardContainer>
    <CardTitle text={title} />

    {users.length > 0 ? (
      <div className="mt-5 space-y-4">
        {users.map(user => (
          <div key={user.id} className="flex items-center gap-x-3">
            <Image
              src={user.avatar ?? '/images/thumb-1.jpg'}
              alt={user.name}
              layout="intrinsic"
              width={45}
              height={45}
              objectFit="cover"
              className="overflow-hidden rounded-full"
            />
            <div className="flex-1 text-sm truncate">
              <div className="font-semibold capitalize text-slate-800">
                {user.name ?? '-'}
              </div>
              <div className="text-slate-400 ">{user.email ?? '-'}</div>
            </div>

            <button
              type="button"
              className="flex items-center px-3 py-2 text-sm transition-all bg-white border rounded-lg hover:bg-slate-50 text-slate-600 gap-x-2 border-slate-200"
            >
              <HiOutlineUserAdd />
              <span>Add</span>
            </button>
          </div>
        ))}
      </div>
    ) : (
      <div className="space-y-3">
        {Array.from({ length: 5 }).map((_, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={i} className="w-full">
            <Skeleton className="w-[25%]" />
            <Skeleton className="w-[100%]" />
          </div>
        ))}
      </div>
    )}
  </CardContainer>
)

export default React.memo(CardLatestMember)
