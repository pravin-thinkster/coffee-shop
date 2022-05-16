import React from 'react'
import './style.scss'
import Logo from './../../assets/logo.png'


const Header = () => {
    return (
        <div className="container">
            <div style={{backgroundImage: `url(${Logo})`}}
                className="logo">
            </div>
        </div>
    )
}

export default Header