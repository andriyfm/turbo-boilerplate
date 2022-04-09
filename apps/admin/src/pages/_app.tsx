/* eslint-disable react/jsx-props-no-spreading */

import Contexts from 'contexts'
import { AppProps } from 'next/app'
import React from 'react'
import { Toaster } from 'react-hot-toast'
import 'react-loading-skeleton/dist/skeleton.css'
import 'styles/global.css'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Contexts>
    <Component {...pageProps} />
    <Toaster position="top-center" reverseOrder={false} />
  </Contexts>
)

export default MyApp
