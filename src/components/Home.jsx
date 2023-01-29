import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [phone, setPhone] = useState("")
  let nevigate = useNavigate();
  const formSubmit = (e) => {
    e.preventDefault()
    if (phone.length === 0) {
      alert("password not support");
      return
    }
    const singData = localStorage.getItem("info")

    const AllData = JSON.parse(singData);
    console.log(AllData);
    if (typeof AllData === "undefined" || AllData === null) {
      alert("need to register")
      nevigate("/register");
      return
    }
    const user = AllData.filter((item) => {
      return item.phone === phone
    })

    if (user.length === 0) {
      alert("need to register")
      nevigate("/register");
    } else {
      nevigate("/password", { state: { user: user } })
    }
  }
  return (
    <div className="row">
      <div className="col-3"></div>
      <div className="col-6">
        <div className="container mt-5">

          <h2 className="mb-3">Login</h2>
          <form onSubmit={formSubmit}>
            <div className="mb-3">
              <label className="form-label" htmlFor="name">
                Enter your mobile number
              </label>
              <input className="form-control" type="number" id="phone" onChange={(e) => { setPhone(e.target.value) }} />
            </div>

            <button className="btn btn-danger" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>

    </div>
  )
}
