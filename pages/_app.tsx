import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.6.2/sql-wasm.min.js"></script>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
