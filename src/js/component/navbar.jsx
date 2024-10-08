import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary border-bottom border-body">
      <div className="container-fluid">
        <span className="spaced">
          <ul className="navbar-nav d-none d-lg-flex">
            <li className="nav-item"><a className="nav-link active" aria-current="page" href="#">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Contacto</a></li>
            <li className="nav-item dropdown-menu-end">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"></a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Telefono</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Email</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Ubicaicon</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Programar Cita Para Adoptar</a></li>
              </ul>
            </li>
          </ul>
        </span>
        <span className="spaced">
          <div className="d-flex align-items-center">
            <form className="d-flex justify-content-end w-100">
              <input className="form-control me-2" type="search" placeholder="💟Buscar Gatito💟" aria-label="Search" />
              <button className="btn btn-light" type="submit">Adoptar</button>
            </form>
          </div>
        </span>
      </div>
    </nav>
  )
}

export default Navbar