import React, { Component } from 'react'

import './styles/Navbar.css'
import logo from '../images/logo.jpg'

class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
                <div className="container-fluid">
                    <a className="Navbar__brand" href="/">
                        <img className="Navbar__brand-logo" src ={logo} alt="Logo" />
                        <span className="font-weight-light">Patlabor</span>
                        <span className="font-weight-bold">Badges</span>
                    </a>
                </div>
            </div>
        )
    }
}

export default Navbar
