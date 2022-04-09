import { APP_NAME } from 'configs/app.config'
import * as React from 'react'

const Footer = () => {
  function getCurrentYear() {
    return new Date().getFullYear()
  }

  return (
    <div className="h-16 p-5 border-t border-slate-200 text-slate-500 text-sm">
      <span>Copyright &copy; {getCurrentYear()}</span>{' '}
      <strong>{APP_NAME}</strong> <span>All rights reserved.</span>
    </div>
  )
}

export default Footer
