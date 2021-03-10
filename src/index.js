import React from 'react'
import ReactDOM from 'react-dom'

import 'bootstrap/dist/css/bootstrap.css'
import './global.css'

import Badge from './components/Badge'

const container = document.getElementById('app')

ReactDOM.render(
    <Badge 
        name="Ingram" 
        model="AV-98"
        avatar="https:/patlabor-api.herokuapp.com/images/labors/1.jpg"
        unit_type="Police Patrol Labor" 
        manufacturer="Shinohara Heavy Industries, Hachioji Factory" 
    />, 
    container)

