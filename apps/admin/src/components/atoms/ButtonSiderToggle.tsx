import { useSider } from 'contexts/SiderContext'
import * as React from 'react'
import { HiOutlineViewGridAdd } from 'react-icons/hi'

const ButtonSiderToggle: React.FC = () => {
  const {
    state: { collapsed },
    setCollapsed,
  } = useSider()

  return (
    <button
      type="button"
      onClick={() => setCollapsed(!collapsed)}
      className="flex items-center justify-center text-xl text-slate-600"
    >
      <HiOutlineViewGridAdd />
    </button>
  )
}

export default React.memo(ButtonSiderToggle)
