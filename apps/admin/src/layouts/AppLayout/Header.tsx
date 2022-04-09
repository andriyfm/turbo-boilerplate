import * as Atom from 'components/atoms'
import { useAuth } from 'contexts/AuthContext'
import { useSider } from 'contexts/SiderContext'
import * as React from 'react'

const Header: React.FC = () => {
  const {
    state: { collapsed },
  } = useSider()

  const { userProfile, signOut } = useAuth()

  return (
    <div className="sticky inset-x-0 flex items-center justify-between h-16 p-5 border-b border-gray-200 shadow-sm">
      <div className={`transition-all ${collapsed ? 'w-[60px]' : 'w-60'}`}>
        <Atom.Logo />
      </div>

      <div className="flex items-center flex-1 pr-14 gap-x-5">
        <Atom.ButtonSiderToggle />
        <Atom.SearchBar />
      </div>

      <div className="">
        <div>{userProfile?.name}</div>
        <button type="button" className="" onClick={() => signOut()}>
          logout
        </button>
      </div>
    </div>
  )
}

export default Header
