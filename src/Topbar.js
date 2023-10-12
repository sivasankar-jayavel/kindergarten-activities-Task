import React, { useContext } from 'react'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import UserContext from './UserContext'
function Topbar() {
    // to pass the usercontext in usecontext hook to declare the variable in userData
    const userData = useContext(UserContext)
    return (
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

            <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                <div className="input-group">
                    <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button">
                        <FontAwesomeIcon icon={faSearch}/>
                        </button>
                    </div>
                </div>
            </form>


            <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown no-arrow">
                    <Link className="nav-link dropdown-toggle"
                        to="/"
                        id="userDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false">
                        <span className="mr-2 d-none d-lg-inline text-gray-600 small">{userData.user.names}</span>
                        <img class="img-profile rounded-circle"
                    src="https://www.erecept.pl/assets/img/undraw_profile.svg"/>
                    </Link>
                 </li>
            </ul>

        </nav>
    )
}

export default Topbar