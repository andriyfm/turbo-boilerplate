import dynamic from 'next/dynamic'
import * as React from 'react'

const RegisterTemplate = dynamic(() => import('@templates/RegisterTemplate'))

const RegisterPage: React.FC = () => <RegisterTemplate />

export default RegisterPage
