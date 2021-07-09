import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/images/logo.png'

export default function Nav(){
  return(
    <nav className="navbar navbar-expand-lg navbar-light shadow">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand">
            <Image src={logo} alt="DeltaSqrd logo" width={32} height={32} unoptimized />
          </a>
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link href="/">
              <a className="nav-link">Home</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/posts">
              <a className="nav-link">Blog</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/solution">
              <a className="nav-link">Solution</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/contact_us">
              <a className="nav-link">Contact Us</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}