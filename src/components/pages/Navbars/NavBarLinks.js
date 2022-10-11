import { NavLink } from 'react-router-dom';

function NavBarLinks() {
    return (
        <div className='navbar_links'>'
            <NavLink className="navbar_navlink" to="/">
                DASHBOARD
            </NavLink>
        </div>
    );
}

export default NavBarLinks;