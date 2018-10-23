import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img src={logo} alt="Kaldi" style={{ width: '256px' }} />
          </figure>
        </Link>
      </div>
      <div className="navbar-start">

      </div>
      <div className="navbar-end">
        <Link className="navbar-item" to="/about">
          About
        </Link>
        <Link className="navbar-item" to="/products">
          Services
        </Link>
        <Link className="navbar-item" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  </nav>
)

export default Navbar
