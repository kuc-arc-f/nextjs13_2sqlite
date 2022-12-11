import Link from 'next/link';
import Head from 'next/head';
//
export default function Navibar(){
//  console.log(process.env.APP_NAME);
  const name = process.env.APP_NAME;
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
    <div className="container-fluid">
      <Link href="/">
        <a>{name}</a>
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
       data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link href="/">
              <a className="nav-link " aria-current="page">Home</a>
            </Link> 
          </li>
          {/*
          <li className="nav-item">
            <Link href="/tasks/test2">
              <a className="nav-link active" aria-current="page">test2</a>
            </Link>             
          </li>
          */}
          <li className="nav-item">
            <Link href="/chats">
              <a className="nav-link active" aria-current="page">Chats</a>
            </Link>             
          </li>
        </ul>
        <ul className="navbar-nav d-flex">
          <li className="nav-item">
            <Link href="/about">
              <a className="nav-link active" aria-current="page">About</a>
            </Link>             
          </li>
          <li className="nav-item">
            <Link href="/auth/login">
              <a className="nav-link active" aria-current="page">Login</a>
            </Link>             
          </li>          
        </ul>
        {/*
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        */}
      </div>
    </div>
  </nav>    
  );
}
/*
    <div>
      <Link href="/">
        <a>[ Home ]</a>
      </Link>
      <Link href="/about">
        <a>[ About ]</a>
      </Link>
      <Link href="/bookmark">
        <a>[ bookmark ]</a>
      </Link>
      <Link href="/auth/login">
        <a>[ Login ]</a>
      </Link>      
    </div>
*/
