/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */

import { useAuth } from 'contexts/AuthContext'
import { useRouter } from 'next/router'
import * as React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

interface IFormInput {
  name: string
  email: string
  password: string
}

const SignUpForm: React.FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IFormInput>()

  const { replace } = useRouter()
  const { signUp } = useAuth()

  const onSubmit: SubmitHandler<IFormInput> = async data => {
    await signUp(data)
    replace('/login')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="">
        <label
          htmlFor="name"
          className="block text-sm font-medium leading-5 text-gray-700"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          className="block w-full px-3 py-2 placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
          {...register('name', { required: 'Please enter a name' })}
        />
        {errors.name && (
          <div className="mt-2 text-xs text-red-600">{errors.name.message}</div>
        )}
      </div>

      <div className="">
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-5 text-gray-700"
        >
          Email address
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email address"
          className="block w-full px-3 py-2 placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
          {...register('email', {
            required: 'Please enter an email',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: 'Not a valid email address',
            },
          })}
        />
        {errors.email && (
          <div className="mt-2 text-xs text-red-600">
            {errors.email.message}
          </div>
        )}
      </div>

      <div className="">
        <label
          htmlFor="password"
          className="block text-sm font-medium leading-5 text-gray-700"
        >
          Password
        </label>
        <div className="mt-1 rounded-md ">
          <input
            id="password"
            className="block w-full px-3 py-2 placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
            type="password"
            {...register('password', {
              required: 'Please enter a password',
              minLength: {
                value: 6,
                message: 'Should have at least 6 characters',
              },
            })}
          />
          {errors.password && (
            <div className="mt-2 text-xs text-red-600">
              {errors.password.message}
            </div>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white uppercase transition duration-150 ease-in-out bg-blue-600 border border-transparent rounded-md hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700"
      >
        register
      </button>
    </form>
  )
}

export default SignUpForm
