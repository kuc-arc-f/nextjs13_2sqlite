import { ReactElement } from 'react'
import Head from 'next/head';
import Navibar from './Navibar';
//import Script from 'next/script'

type LayoutProps = Required<{
  readonly children: ReactElement
}>
//
function Layout({ children}: LayoutProps) {
  return (
    <div>
      <Head>
        <title key="title">NextJs App</title>
      </Head>
      <hr className="my-0" />
      {children}
      <br />
    </div>
  )
}

export default Layout
