import { Link } from 'react-router-dom';
import './navbar.css';
import logo from '../../assets/icon/logo.svg';
import {useContext} from 'react';
import {AppContext} from '../../context/AppContext';

const NavBar = () => {
    const [state, dispatch] = useContext(AppContext);
    
    const handleClick = () => {
        dispatch({
            type:"LOGOUT"
        })
    }

    return(
        <div className="navbar-container">
            <div className="navbar-wrapper">
                <div className="navbar-logo">
                    <Link to="/" className="link">
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                <div className="navbar-menu">
                    <ul className="navbar-menu-list">
                        <Link to="/upload" className="link">
                            <li className="navbar-menu-item">
                                <button className="button-primary">Upload</button>
                            </li>
                        </Link>

                        <li className="navbar-menu-item">
                            <button className="button-secondary" onClick={handleClick}>Logout</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar;