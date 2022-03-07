import Router from "next/router"
import NProgress from "nprogress"
// import '../styles/nprogress.css'
import "nprogress/css/nprogress.css"
import Head from "next/head"
import { ChakraProvider } from '@chakra-ui/react'

import Layout from "../components/Layout"

function MyApp({ Component, pageProps }) {
  NProgress.configure({ showSpinner: false })
  
  Router.events.on(('routeChangeStart', NProgress.start))
  Router.events.on(('routeChangeComplete', NProgress.done))
  return (
    <>
      <Head>
      </Head>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  )
}

export default MyApp
