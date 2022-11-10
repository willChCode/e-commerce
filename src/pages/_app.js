import '../styles/globals.css'
import { useEffect } from 'react'
import Layout from '../components/layout'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/css/bootstrap.min.css')
    import("bootstrap/dist/js/bootstrap")
  }, [])

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
