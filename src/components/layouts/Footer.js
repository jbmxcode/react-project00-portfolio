import React from 'react'

import './Footer.scss'

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-column">
                    <div className="position">Front End Developer</div>
                    <nav className="social">
                        <ul className="items-list">
                            <li className="item">
                                <a href="https://www.facebook.com/josuebaloymelendez/" target="_blank" rel="noopener noreferrer">FB</a>
                            </li>
                            <li className="item">
                                <a href="https://www.linkedin.com/in/josuebaloymelendez/" target="_blank" rel="noopener noreferrer">IN</a>
                            </li>
                            <li className="item">
                                <a href="https://github.com/jbmxworld" target="_blank" rel="noopener noreferrer">GIT</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer> 
    )
}

export default Footer
