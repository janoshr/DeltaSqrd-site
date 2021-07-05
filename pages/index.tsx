import Head from 'next/head'
import Nav from '../components/nav'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Delta Sqrd</title>
        <link rel="icon" href="/images/Yi0Byu2n_o.png" />
      </Head>

      <main>
        <Nav />
        <div className="container mt-5">
          <h1 className="display-1 text-center">
            Welcome to <a href="#">DeltaSqrd!</a>
          </h1>
          <div className="row row-cols-1 row-cols-md-2 g-4 mt-5 mb-5">
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Post 1</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ridiculus mus mauris vitae ultricies. Sed viverra tellus in hac.</p>
                  <Link href="/blog">
                    <a className="btn btn-dark">Read blog</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Post 2</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec et odio pellentesque diam volutpat commodo sed egestas. Enim ut tellus elementum sagittis vitae.</p>
                  <Link href="/blog">
                    <a className="btn btn-dark">Read blog</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Post 3</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus.</p>
                  <Link href="/blog">
                    <a className="btn btn-dark">Read blog</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Post 4</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien et ligula ullamcorper malesuada proin. Orci porta non pulvinar neque laoreet.</p>
                  <Link href="/blog">
                    <a className="btn btn-dark">Read blog</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid bg-dark text-white">
          <div className="row row-cols-1 row-cols-md-3 text-center p-4" >
            <div className="col border-end border-2">
              <h5>
                Lexctus urna duis
              </h5>
            </div>
            <div className="col border-start border-end border-2">
              <h5>
                Elementum tempus egestas
              </h5>
            </div>
            <div className="col border-start border-2">
              <h5>
                Praesent tristique magna
              </h5>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="mt-5 text-center">
            <h4 className="h4">First Solution</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Link href="/solution">
              <a className="btn btn-dark">Discover solution</a>
            </Link>
            <hr />
            <h4 className="h4">Second Solution</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <Link href="/solution">
              <a className="btn btn-dark">Discover solution</a>
            </Link>
          </div>
        </div>
      </main>
      <footer className="bg-dark text-white mt-5">
        <div className="container p-3">
          DeltaSqrd
        </div>
      </footer>
    </div>
  )
}
