/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-props-no-spreading */

import { useAuth } from 'contexts/AuthContext'
import { auth } from 'lib/firebase-admin'
import { GetServerSidePropsContext } from 'next'
import { useRouter } from 'next/router'
import nookies from 'nookies'
import * as React from 'react'

/**
 * Gunakan function ini untuk protected route pada component template
 * ref: https://stackoverflow.com/questions/70325619/how-to-create-hoc-for-auth-in-next-js
 * @param Component
 * @returns
 */
export const withAuthClient = <P extends object>(
  Component: React.ComponentType<P>,
) => {
  const WithAuthClient = (props: P) => {
    const { authUser } = useAuth()
    const { replace } = useRouter()

    React.useEffect(() => {
      if (!authUser) replace('/login')
    }, [authUser])

    if (!authUser) return null
    return <Component {...props} />
  }

  return WithAuthClient
}

/**
 * Gunakan function ini untuk protected route jika menggunakan SSR (getServerSideProps).
 * ref: https://stackoverflow.com/questions/70325619/how-to-create-hoc-for-auth-in-next-js
 * @returns
 */
export const withAuthSSR =
  (gssp: any) => async (context: GetServerSidePropsContext) => {
    const redirect = { destination: '/login', permanent: true }

    try {
      const { token } = nookies.get(context)
      if (!token) return { redirect }

      const DecodedIdToken = await auth.verifyIdToken(token)
      if (!DecodedIdToken) return { redirect }

      const gsspData = await gssp(context)
      return { props: { ...gsspData.props } }
    } catch (error) {
      return { redirect }
    }
  }

export default { withAuthClient, withAuthSSR }
