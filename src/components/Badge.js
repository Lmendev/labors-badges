import React from 'react'
import PageLogo from '../images/badge-header.svg'

class Badge extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <img src={PageLogo} alt="Logo de la página" />
                </div>

                <div>
                    <img src="" alt="Avatar"/>
                    <h1>Luis <br/> Mendoza</h1>
                </div>

                <div>
                    <p>Systems Engineer</p>
                    <p>@lmendev</p>
                </div>
            </div>
        )
    }
}

export default Badge