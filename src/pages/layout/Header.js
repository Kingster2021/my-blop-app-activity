import { Link } from "react-router-dom";



function Header() {
    return(
        <>
        <header>
        <nav className="navbar bg-dark mb-1" data-bs-theme="dark">
        <div className="container-fluid">
    <Link to={"/"} className="navbar-brand">JaInc.</Link>
    <ul className="nav justify-content-end">
  <li className="nav-item">
    <Link to={"/"} className="nav-link text-white">Home</Link>
  </li>
  <li className="nav-item">
    <Link to={"about"} className="nav-link text-white">About Me</Link>
  </li>
  <li className="nav-item">
    <Link to={"projects"} className="nav-link text-white">Projects</Link>
  </li>
  <li className="nav-item">
    <Link to={"contact"} className="nav-link text-white">Contact</Link>
  </li>
</ul>
    </div>
    
        </nav>
        </header>
        </>
    )
}
export default Header;