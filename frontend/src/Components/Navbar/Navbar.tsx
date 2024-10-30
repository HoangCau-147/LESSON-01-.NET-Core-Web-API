import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import './Navbar.css';
import { userAuth } from '../../Context/useAuth';

interface Props {}

const Navbar = (props: Props) => {
    const { isLoggedIn, user, logout } = userAuth();
    return (
        <nav className="container relative p-6 mx-auto">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-20">
                    <Link to="/">
                        <img src={logo} alt="" />
                    </Link>
                    <div className="hidden font-bold lg:flex">
                        <Link to="/search" className="text-black hover:text-darkBlue">
                            Search
                        </Link>
                    </div>
                </div>
                {isLoggedIn() ? (
                    <div className="items-center hidden space-x-6 lg:flex text-back">
                        <div className="hover:text-darkBlue">Welcome, {user?.userName}</div>
                        <a
                            onClick={logout}
                            className="px-8 py-3 font-bold text-white rounded bg-lightGreen hover:opacity-70"
                        >
                            Logout
                        </a>
                    </div>
                ) : (
                    <div className="items-center hidden space-x-6 lg:flex text-back">
                        <Link to="/login" className="hover:text-darkBlue">
                            Login
                        </Link>
                        <Link
                            to="/register"
                            className="px-8 py-3 font-bold text-white rounded bg-lightGreen hover:opacity-70"
                        >
                            Signup
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
