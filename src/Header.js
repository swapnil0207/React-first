import React from 'react'
import {Link} from "react-router-dom"

export const Header = () => {
    return (
        <div className="">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link className="navbar-brand App-logo" to="#">Review</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/delete"> To Delete </Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="/filter">To filter</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="/add">To Add</Link>
      </li>
    </ul>
  </div>
</nav>                        
        </div>
    )
}
