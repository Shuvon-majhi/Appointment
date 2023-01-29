import React from 'react'

import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function Nav() {
    const [isAuth, setIsAuth] = useState()
    const location = useLocation()
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("auth"))
        setIsAuth(data)
    }, [location])

    const handleLogout = () => {
        localStorage.removeItem("auth")
        window.location.href = "/"
    }

    return (
        <div>

            <nav className="navbar navbar-expand-lg fixed-top bg-light navbar-light">
                <div className="container">

                    {isAuth ? <a className="navbar-brand" href="/bookings"
                    >Home</a> : <a className="navbar-brand" href="/">Home</a>}

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto align-items-center">
                            <li className="nav-item">
                                {!isAuth ? '' : <a className="nav-link mx-2" href="/bookings"><i className="fas fa-plus-circle pe-2"></i>Bookings</a>}
                            </li>

                            <li className="nav-item">
                                {isAuth ? <a className="nav-link mx-2" href="/bookingslot"><i className="fas fa-heart pe-2"></i>Book slot</a> : <a className="nav-link mx-2" href="/register"><i className="fas fa-heart pe-2"></i>Register</a>

                                }
                            </li>
                            <li className="nav-item ms-3">
                                {isAuth ? <a className="btn btn-black btn-rounded" onClick={handleLogout} >Logout</a> : <a className="btn btn-black btn-rounded" >Login</a>}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}
