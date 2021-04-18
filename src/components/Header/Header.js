import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css'

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    let history = useHistory();

    const handleLoginBtn = () => {
        if (loggedInUser.email) {
            setLoggedInUser({})
            history.push('/home')
        } else {
            history.push('/login')
        }
    }

    return (
        <nav className="navbar navbar-expand-lg py-3 px-md-0 px-3  ">
            <Link to='/home' className="navbar-brand">
                <img style={{ height: '80px' }} src={`https://i.ibb.co/XFhHPTT/Logo-Makr-0-NRhu4.png`} alt="you-and-me-logo" />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link to='/home' className="nav-link">Home<span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/portfolio' className="nav-link">About US</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={`/checkout`} className="nav-link">Checkout</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/dashboard' className="nav-link">Dashboard</Link>
                    </li>
                    <li className="nav-item text-white">
                        <Link to='/dashboard' className="nav-link">Admin</Link>
                    </li>
                    <li className="nav-item">
                        <button onClick={handleLoginBtn} className="nav-link btn btn-dark text-white px-4">{loggedInUser.email ? `${loggedInUser.name.split(' ')[0]} / Logout` : 'Login'}</button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;