import React from 'react'

import "./styles/Badge.css"
import PageLogo from '../images/badge-header.svg'

class Badge extends React.Component {
    render() {
        const {name, model, avatar, unit_type, manufacturer} = this.props

        return (
            <div className="Badge">
                <div className="Badge__header">
                    <img src={PageLogo} alt="Logo de la página" />
                </div>

                <div className="Badge__section-name">
                    <img className="Badge__avatar" src={avatar} alt="Avatar"/>
                    <h1>{name} <br/> {model}</h1>
                </div>

                <div className="Badge__section-info">
                    <h3>{unit_type}</h3>
                    <div>{manufacturer}</div>
                </div>
                
                <div className="Badge__footer">
                    @lmendev
                </div>
            </div>
        )
    }
}

export default Badge