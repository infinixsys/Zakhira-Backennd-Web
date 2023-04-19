import React from 'react'

function TopBar() {
  return (
    <React.Fragment>
        <div className="d-flex justify-content-end px-5 py-3  col-xl-12 bg-white header">
        <div className="dropdown">
        <a href="#" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
          <img src="https://github.com/mdo.png" alt="" width={32} height={32} className="rounded-circle me-2" />
          <strong>Amit kumar</strong>
        </a>
        <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
          <li><a className="dropdown-item" href="#">Profile</a></li>
          <li><a className="dropdown-item" href="#">Sign out</a></li>
        </ul>
      </div>
        </div>
    </React.Fragment>
  )
}

export default TopBar