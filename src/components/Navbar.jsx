import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({ id, title }) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Rokkomini</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor03">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">Visit my Github</a>
              </li>
            </ul>
            <form className="d-flex">
              <a href="/"><button type="button" className="btn btn-primary btn-lg">Back to home</button></a>
            </form>

          </div>
        </div>
      </nav>
    </div>
  )
}
