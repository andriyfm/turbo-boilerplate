/* eslint-disable jsx-a11y/anchor-is-valid */
import FormSignUp from '@organisms/FormSignUp'
import Link from 'next/link'
import * as React from 'react'

export const RegisterTemplate: React.FC = () => (
  <div className="flex min-h-screen bg-blue-600">
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
      <div className="mt-24 text-center">
        <h2 className="mt-6 text-3xl font-extrabold leading-9 text-center text-white">
          Sign up
        </h2>

        <p className="mt-2 text-center text-gray-200 text-md">
          Already have an account?{' '}
          <Link href="/login">
            <a href="#" className="text-white underline">
              Sign in
            </a>
          </Link>
        </p>
      </div>
      <div className="px-4 py-8 mt-8 bg-white shadow sm:rounded-lg sm:px-10">
        <FormSignUp />
      </div>
    </div>
  </div>
)

export default RegisterTemplate
