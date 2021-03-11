import React, { Component } from 'react'

import './styles/BadgeNew.css'
import header from '../images/badge-header.svg'
import Navbar from '../components/Navbar'
import Badge from '../components/Badge'

class BadgeNew extends Component {
    render() {
        return (
            <div>
                <Navbar />

                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo" />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge 
                                name="Ingram" 
                                model="AV-98"
                                avatar="https://patlabor-api.herokuapp.com/images/labors/1.jpg"
                                unit_type="Police Patrol Labor" 
                                manufacturer="Shinohara Heavy Industries, Hachioji Factory" 
                            />
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default BadgeNew
