import * as React from 'react'
import { AuthProvider } from './AuthContext'
import { SiderProvider } from './SiderContext'

interface Props {}

const Contexts: React.FC<Props> = ({ children }) => (
  <AuthProvider>
    <SiderProvider>{children}</SiderProvider>
  </AuthProvider>
)

export default React.memo(Contexts)
