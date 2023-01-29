import React, { Component } from 'react'


class Register extends Component {
    state = {
        phone: '',
        name: '',
        password: '',
        cpassword: ''
    }

    fromSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.name)
        console.log(this.state.phone)

        if (this.state.password === this.state.cpassword) {
            let pass = this.state.cpassword
            const data = {
                phone: this.state.phone,
                name: this.state.name,
                password: pass
            }
            localStorage.setItem("info", JSON.stringify([data]))

            alert("Insert Successfull")
            window.location.href = "/"


        } else {
            alert("Password Not Match")
        }

    }
    render() {

        return (
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6">
                    <div className="container mt-5">
                        <h2 className="mb-3">Register</h2>
                        <form onSubmit={this.fromSubmit}>
                            <div className="mb-3">
                                <label className="form-label" >

                                </label>
                                <input className="form-control" type="number" onChange={(e) => { this.setState({ phone: e.target.value }) }} required placeholder="Enter your number" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label" >

                                </label>
                                <input className="form-control" onChange={(e) => { this.setState({ name: e.target.value }) }} type="text" required placeholder="Full Name" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label" >

                                </label>
                                <input className="form-control" onChange={(e) => { this.setState({ password: e.target.value }) }} type="password" required placeholder="Create  Password " />
                            </div>
                            <div className="mb-3">
                                <label className="form-label" >

                                </label>
                                <input className="form-control" onChange={(e) => { this.setState({ cpassword: e.target.value }) }} type="password" required placeholder="Confirm Password " />
                            </div>

                            <button className="btn btn-danger" type="submit">
                                Register
                            </button>
                        </form>
                    </div>
                </div>
                <div className="col-3"></div>
            </div>
        )
    }
}

export default Register