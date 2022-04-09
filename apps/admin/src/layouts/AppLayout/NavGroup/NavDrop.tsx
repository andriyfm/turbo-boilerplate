import { Disclosure, Popover } from '@headlessui/react'
import { useSider } from 'contexts/SiderContext'
import { INav } from 'data/navigationsData'
import { useRouter } from 'next/router'
import * as React from 'react'
import { HiOutlineChevronUp } from 'react-icons/hi'

interface Props {
  item: INav
}

const NavDrop: React.FC<Props> = ({ item }) => {
  const router = useRouter()
  const {
    state: { collapsed },
  } = useSider()

  if (!item.children) return null

  if (collapsed) {
    return (
      <Popover className="">
        <Popover.Button className="flex items-center justify-between w-full h-12 px-5 capitalize transition-all border-r-2 border-transparent gap-x-5 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-500">
          <span className="text-xl">{item.icon}</span>
        </Popover.Button>

        <Popover.Panel className="absolute z-10 overflow-hidden bg-white rounded-lg shadow-lg">
          {item.children.map(child => (
            <button
              type="button"
              onClick={() => router.push(child.href as string)}
              className="flex items-center w-full h-12 px-5 capitalize transition-all border-r-2 border-transparent gap-x-5 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-500"
            >
              <span>{child.title}</span>
            </button>
          ))}
        </Popover.Panel>
      </Popover>
    )
  }

  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex items-center justify-between w-full h-12 px-5 capitalize transition-all border-r-2 border-transparent gap-x-5 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-500">
            <span className="text-xl">{item.icon}</span>
            <span className="flex-1 text-left">{item.title}</span>
            <HiOutlineChevronUp
              className={`text-sm text-slate-400 transition-all ${
                open ? 'transform rotate-180' : ''
              }`}
            />
          </Disclosure.Button>

          <Disclosure.Panel className="text-gray-500">
            {item.children?.map(child => (
              <button
                key={child.title}
                type="button"
                onClick={() => router.push(child.href as string)}
                className="w-full py-3 text-left capitalize transition-all border-r-2 border-transparent pl-[calc(56px+4px)] pr-5 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-500"
              >
                <span>{child.title}</span>
              </button>
            ))}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default React.memo(NavDrop)
