import Layout from '../../components/layout'
import Head from 'next/head'

export default function ContactUs() {
  return (
    <Layout>
      <Head>
        <title>DeltaSqrd | Contact Us</title>
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <h1 className="display-2 text-center">
        Contact Us
      </h1>
      <a href="external@deltasqrd.com" className="link-primary">external@deltasqrd.com</a>
    </Layout>
  )
}