import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faHouse, faCalendarDays, faHeartCircleCheck, faMessage,faHouseSignal, faChalkboardUser, faChild ,faGear} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
import UserContext from './UserContext'
function Sidebar() {

    // to pass the usercontext in usecontext hook to declare the variable in user 
    const userData = useContext(UserContext)
    // if console the userdata it gives object - in this object inside has user and user have names to access 
    // console.log(userData.user.names)

    return (

        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
            id="accordionSidebar">

            <a className="sidebar-brand d-flex align-items-center justify-content-center"
                href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                <FontAwesomeIcon icon={faHeartCircleCheck} size='2x' />
                </div>
                <div className="sidebar-brand-text mx-3">Hello!  {userData.user.names}</div>
            </a>

            <hr className="sidebar-divider my-0" />

            <li className="nav-item">
                <Link className="nav-link" to="/portal/home">
                <FontAwesomeIcon icon={faHouse} />{"\n"}
                    <span>Home</span>
                </Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" to="/portal/calendar">
                <FontAwesomeIcon icon={faCalendarDays} />{"\n"}
                    <span>Calendar</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/portal/curriculam">
                <FontAwesomeIcon icon={faClipboardList} />{"\n"}
                    <span>Curriculam</span>
                </Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" to="/portal/message">
                <FontAwesomeIcon icon={faMessage} />{"\n"}
                    <span>Messages</span>
                </Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" to="/portal/educator">
                <FontAwesomeIcon icon={faChalkboardUser} />{"\n"}
                    <span>Educators</span>
                </Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" to="/portal/children">
                <FontAwesomeIcon icon={faChild} />{"\n"}
                    <span>Children</span>
                </Link>
            </li>


            <hr class="sidebar-divider d-none d-md-block"></hr>

{/* <!-- Sidebar Toggler (Sidebar) --> */}
<div class="sidebar-card d-none d-lg-flex">
    <Link class="btn btn-success btn-sm" to="/portal/settings"><FontAwesomeIcon icon={faGear} />{"\n"}Settings</Link>
</div>

{/* <!-- Sidebar Message --> */}
<div class="sidebar-card d-none d-lg-flex">
    <Link class="btn btn-success btn-sm" to="/portal/centre"><FontAwesomeIcon icon={faHouseSignal} />{"\n"}ECD centres</Link>
</div>
        </ul>
    )
}

export default Sidebar;

