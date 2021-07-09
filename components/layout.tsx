import Nav from './nav'

export default function Layout({ children }){
  return(
    <main>
      <Nav />
      <div className="container mt-5">
        {children}
      </div>
    </main>
  );
}