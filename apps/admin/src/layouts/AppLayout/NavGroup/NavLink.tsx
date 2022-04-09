import { INav } from 'data/navigationsData'
import { useRouter } from 'next/router'
import * as React from 'react'

interface Props {
  item: INav
}

const NavLink: React.FC<Props> = ({ item }) => {
  const router = useRouter()

  return (
    <button
      type="button"
      onClick={() => router.push(item.href as string)}
      className="flex items-center w-full h-12 px-5 capitalize transition-all border-r-2 border-transparent gap-x-5 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-500"
    >
      <span className="text-xl">{item.icon}</span>
      <span>{item.title}</span>
    </button>
  )
}

export default React.memo(NavLink)
