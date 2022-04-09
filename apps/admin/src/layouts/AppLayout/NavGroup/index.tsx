import { useSider } from 'contexts/SiderContext'
import { INav } from 'data/navigationsData'
import * as React from 'react'
import NavDrop from './NavDrop'
import NavLink from './NavLink'

interface Props {
  title: string
  navigations: INav[]
}

const NavGroup: React.FC<Props> = ({ title, navigations }) => {
  const {
    state: { collapsed },
  } = useSider()

  return (
    <div className="space-y-3">
      {!collapsed && (
        <div className="px-5 text-xs font-semibold tracking-wider uppercase text-slate-500">
          {title}
        </div>
      )}

      <div className="text-slate-700">
        {navigations.map(item => (
          <React.Fragment key={item.title}>
            {item.children ? <NavDrop item={item} /> : <NavLink item={item} />}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default NavGroup
