import { useSider } from 'contexts/SiderContext'
import {
  appNavs,
  compnentsNavs,
  dashboardNavs,
  docsNavs,
  pagesNavs,
} from 'data/navigationsData'
import * as React from 'react'
import NavGroup from './NavGroup'

const Sider = () => {
  const {
    state: { collapsed },
  } = useSider()

  return (
    <div
      className={`h-[calc(100vh-64px)] overflow-auto py-5 bg-white border-r border-slate-200 scrollbar scrollbar-thin scrollbar-thumb-slate-transparent scrollbar-track-slate-transparent transition-all ${
        collapsed ? 'w-[60px] divide-y' : 'w-60 space-y-5'
      }`}
    >
      <NavGroup title="dashboard" navigations={dashboardNavs} />
      <NavGroup title="apps" navigations={appNavs} />
      <NavGroup title="components" navigations={compnentsNavs} />
      <NavGroup title="pages" navigations={pagesNavs} />
      <NavGroup title="docs" navigations={docsNavs} />
    </div>
  )
}

export default Sider
