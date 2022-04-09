import dynamic from 'next/dynamic'
import * as React from 'react'

const LoginTemplate = dynamic(() => import('@templates/LoginTemplate'))

const LoginPage: React.FC = () => <LoginTemplate />

export default LoginPage
