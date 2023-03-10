import React from 'react'
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Password() {
    const { state } = useLocation();
    const { user } = state;
    let nevigate = useNavigate();

    const [password, setPassword] = useState("")

    const formSubmit = (e) => {
        e.preventDefault()

        if (password.length === 0) {
            alert("password not support");
            return
        } else if (password !== user[0].password) {
            alert("password not match");
            return
        } else {
            localStorage.setItem("auth", JSON.stringify(true))
            nevigate("/bookingslot", { state: { user: user } })
        }
    }
    return (
        <div className="row">
            <div className="col-3"></div>
            <div className="col-6">
                <div className="container mt-5">
                    <h2 className="mb-3">Password</h2>
                    <form onSubmit={formSubmit} >
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">
                                Enter your password
                            </label>
                            <input className="form-control" type="password" id="" required

                                onChange={(e) => { setPassword(e.target.value) }}
                            />
                        </div>

                        <button className="btn btn-danger" type="submit">
                            submit
                        </button>
                    </form>
                </div>
            </div>
            <div className="col-3"></div>
        </div>
    )
}
