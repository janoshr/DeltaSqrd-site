import Nav from '../../components/nav'
import Head from 'next/head'

export default function ContactUs() {
  return (
    <>
      <Head>
        <title>DeltaSqrd | Contact Us</title>
        <link rel="icon" href="/images/Yi0Byu2n_o.png" />
      </Head>
      <main>
        <Nav />
        <div className="container mt-5">
          <h1 className="display-2 text-center">
            Contact Us
          </h1>
          <a href="external@deltasqrd.com">external@deltasqrd.com</a>
        </div>
      </main>
    </>
  )
}