import Layout from '../../components/layout'
import Head from 'next/head'

export default function Blog() {
  return (
    <Layout>
      <Head>
        <title>DeltaSqrd | Blog</title>
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <h1 className="display-2 text-center">
        Blog
      </h1>
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">Post 1</h5>
          <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ridiculus mus mauris vitae ultricies. Sed viverra tellus in hac.</p>
        </div>
      </div>
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">Post 2</h5>
          <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec et odio pellentesque diam volutpat commodo sed egestas. Enim ut tellus elementum sagittis vitae.</p>
        </div>
      </div>
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">Post 3</h5>
          <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus.</p>
        </div>
      </div>
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">Post 4</h5>
          <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien et ligula ullamcorper malesuada proin. Orci porta non pulvinar neque laoreet.</p>
        </div>
      </div>
    </Layout>
  )
}