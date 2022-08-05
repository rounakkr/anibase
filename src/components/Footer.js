import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className='container'>
                <div className="row">
                    <div className="column">
                        <div className='column2'>
                            <div className="columnItem">
                                <h2>Navigate</h2>
                                <ul>
                                    <li><a href="/">Anime</a></li>
                                    <li><a href="/manga">Manga</a></li>
                                    <li><a href="/character">Character</a></li>
                                </ul>
                            </div>
                            <div className="columnItem">
                                <h2>About</h2>
                                <ul>
                                    <li><a href="">About</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="column2">
                            <div className="columnItem">
                                <h2>Follow Me</h2>
                                <div className="social-icon">
                                    <a href="https://www.instagram.com/rounakk_kr/">
                                        <i className='fab fa-instagram'></i>
                                    </a>
                                    <a href="https://www.linkedin.com/in/rounak-kumar-47546b238">
                                        <i className="fab fa-linkedin"></i>
                                    </a>
                                    <a href="https://github.com/rounakkr">
                                        <i className="fab fa-github"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='copyright'>
                    <h4>Copyright © 2022 ROUNAK. All rights reserved.</h4>
                </div>

            </div>
        </footer >
    )
}

export default Footer