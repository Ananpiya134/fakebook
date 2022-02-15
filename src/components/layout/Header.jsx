import { Link } from "react-router-dom";
import { useContext } from 'react'
import AuthContext from '../../contexts/AuthContext'



function Header() {

    const { logout } = useContext(AuthContext);

    return (
        <nav className="navbar navbar-expand-sm sticky-top bg-white text-facebook">
            <div className="container-fluid">
                <Link
                    to="/"
                    className="navbar-brand"
                >
                    <i className="fab fa-facebook fs-1"></i>
                </Link>
                <div className="navbar-collapse justify-content-center">
                    <ul className="navbar-nav">
                        <li className="nav-item mx-5">
                            <Link to="/" className="nav-link">
                                <i className="fas fa-home fs-2"></i>
                            </Link>
                        </li>
                        <li className="nav-item mx-5">
                            <Link to="/friend" className="nav-link">
                                <i className="fas fa-user-friends fs-2"></i>
                            </Link>
                        </li>
                        <li className="nav-item mx-5">
                            <div className="nav-link" role="button"
                                onClick={() => console.log(logout)}
                            // onClick={() => console.log('logout')}
                            >
                                <i className="fas fa-sign-out-alt fs-2"></i>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="navbar-brand" role="button">
                    <img
                        src="https://images.pexels.com/photos/698532/pexels-photo-698532.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        width="40"
                        className="rounded-circle"
                        alt="user"
                    />
                </div>
            </div>
        </nav>
    )
}

export default Header;