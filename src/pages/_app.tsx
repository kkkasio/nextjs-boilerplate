import Router from 'next/router'

import Head from 'next/head'
import NProgress from 'nprogress'
import { AppProps } from 'next/app'
import GlobalStyles from 'styles/global'

Router.events.on('routeChangeStart', (url) => {
  console.log(`Loading: ${url}`)
  NProgress.start()
  NProgress.configure({ easing: 'ease' })
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Avançado Boilerplate</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="A simple project st
          arter to work with typescript, React, NextJS and Styled Components"
        />

        <link rel="stylesheet" href="/nprogress.css" />
      </Head>

      <GlobalStyles />

      <Component {...pageProps} />
    </>
  )
}

export default App
