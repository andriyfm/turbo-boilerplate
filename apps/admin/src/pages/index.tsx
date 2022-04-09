import { GetServerSideProps } from 'next'
import dynamic from 'next/dynamic'
import * as React from 'react'
import { withAuthSSR } from 'utils/withAuth'

const DefaultTemplate = dynamic(() => import('@templates/HomeTemplate'))

const HomePage: React.FC = () => <DefaultTemplate />

export const getServerSideProps: GetServerSideProps = withAuthSSR(() => ({
  props: {},
}))

export default HomePage
