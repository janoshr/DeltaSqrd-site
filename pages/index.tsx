import Head from 'next/head'
import Nav from '../components/nav'
import Link from 'next/link'
import backgroundImg from '../public/images/background.jpg'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>DeltaSqrd</title>
        <link rel="icon" href="/images/logo.png" />
      </Head>

      <main>
        <Nav />
        <div className="card border-0">
          <Image src={backgroundImg} alt="Data Science image" className="card-img" />
          <div className="card-img-overlay">
            <h1 className="display-1 text-center pt-5">
              Welcome to <a href="#">DeltaSqrd!</a>
            </h1>
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
