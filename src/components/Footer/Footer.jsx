import React from 'react'
import './footer.css'
import footor_logo from '../Assets/logo_big.png'
import instragram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footor-logo">
            <img src={footor_logo} alt="" />
            <p>SHOPPER</p>

        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Affices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footor-icon-container">
                <img src={instragram_icon} alt="" />
            </div>
            <div className="footor-icon-container">
                <img src={pintester_icon} alt="" />
            </div>
            <div className="footor-icon-container">
                <img src={whatsapp_icon} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
                <p>copyright @ 2024 - All Rights reserved</p>
            </div>

    </div>
  )
}

export default Footer