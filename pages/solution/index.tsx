import Nav from '../../components/nav'
import Head from 'next/head'

export default function Solution() {
  return (
    <>
      <Head>
        <title>DeltaSqrd | Solution</title>
        <link rel="icon" href="/images/Yi0Byu2n_o.png" />
      </Head>
      <main>
        <Nav />
        <div className="container mt-5">
          <h1 className="display-2 text-center">
            Solution
          </h1>
          <hr />
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
        </div>
      </main>
    </>
  )
}