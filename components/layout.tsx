import Nav from './nav'
import Head from 'next/head'

export default function Layout({ children, home }:any){
  return(
    <main>
      <Head>
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <Nav />
      {home ? (
        <>
          <div>
            {children}
          </div>
        </>
      ):(
        <>
          <div className="container mt-5">
            {children}
          </div>
        </>
      )}
    </main>
  );
}