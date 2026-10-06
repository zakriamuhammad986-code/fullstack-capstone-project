import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/AuthContext';

export default function Navbar() {
    const { isLoggedIn, setIsLoggedIn, userName, setUserName } = useAppContext();
    const navigate = useNavigate();

    // Page refresh ke baad bhi login state wapas laayein
    useEffect(() => {
        const authToken = sessionStorage.getItem('auth-token');
        const name = sessionStorage.getItem('name');
        if (authToken) {
            setIsLoggedIn(true);
            setUserName(name || '');
        }
    }, [setIsLoggedIn, setUserName]);

    const handleLogout = () => {
        sessionStorage.removeItem('auth-token');
        sessionStorage.removeItem('name');
        sessionStorage.removeItem('email');
        setIsLoggedIn(false);
        setUserName('');
        navigate('/app');
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
            <Link className="navbar-brand" to="/">GiftLink</Link>

            <div className="collapse navbar-collapse show" id="navbarNav">
                <ul className="navbar-nav me-auto">
                    {/* Task 1: Add links to Home and Gifts below*/}
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/app">Gifts</Link>
                    </li>
                </ul>

                <ul className="navbar-nav ms-auto">
                    {isLoggedIn ? (
                        <>
                            <li className="nav-item">
                                <span className="nav-link">Welcome, {userName}</span>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link btn btn-link" onClick={handleLogout}>Logout</button>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className="nav-item">
                                <Link className="nav-link" to="/app/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/app/register">Register</Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
}
