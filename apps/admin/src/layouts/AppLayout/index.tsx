import { APP_NAME } from 'configs/app.config'
import NextHead from 'next/head'
import * as React from 'react'
import Header from './Header'
import Body from './Body'
import Sider from './Sider'

interface Props {
  title: string
}

export const AppLayout: React.FC<Props> = ({ title, children }) => (
  <>
    <NextHead>
      <link rel="icon" href="/favicon.svg" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <title>{`${title} - ${APP_NAME}`}</title>
    </NextHead>

    <div className="relative overflow-hidden">
      <Header />
      <div className="flex flex-wrap">
        <Sider />
        <Body>{children}</Body>
      </div>
    </div>
  </>
)

export default React.memo(AppLayout)
