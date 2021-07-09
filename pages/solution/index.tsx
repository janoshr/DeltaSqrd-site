import Layout from '../../components/layout'
import Head from 'next/head'

export default function Solution() {
  return (
    <Layout>
      <Head>
        <title>DeltaSqrd | Solution</title>
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <h1 className="display-2 text-center">
        Solution
      </h1>
      <div className="row mt-4">
        <div className="col">
          <h1>Solution 1</h1>
          {
            // content for solution 1
          }
        </div>
        <div className="col">
          <h1>Solution 2</h1>
          {
            // content for solution 2
          }
        </div>
      </div>
    </Layout>
  )
}