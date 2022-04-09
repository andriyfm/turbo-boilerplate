import { APP_NAME } from 'configs/app.config'
import { useSider } from 'contexts/SiderContext'
import * as React from 'react'

const Logo: React.FC = () => {
  const {
    state: { collapsed },
  } = useSider()

  return (
    <span
      className={`inline-block font-black text-blue-500 ${
        collapsed
          ? 'text-2xl bg-blue-50 w-10 h-10 rounded-md flex items-center justify-center'
          : 'text-xl'
      }`}
    >
      {collapsed ? APP_NAME.charAt(0) : APP_NAME}
    </span>
  )
}

export default React.memo(Logo)
