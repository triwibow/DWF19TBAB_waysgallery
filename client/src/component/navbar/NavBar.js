import './navbar.css';
import logo from '../../assets/icon/logo.svg';

const NavBar = () => {
    return(
        <div className="navbar-container">
            <div className="navbar-wrapper">
                <div className="navbar-logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="navbar-menu">
                    <ul className="navbar-menu-list">
                        <li className="navbar-menu-item">
                            <button className="button-primary">Upload</button>
                        </li>

                        <li className="navbar-menu-item">
                            <button className="button-secondary">Logout</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar;