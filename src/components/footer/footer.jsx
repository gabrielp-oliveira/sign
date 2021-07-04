import React from 'react'
import './footer.css'

import { faLinkedin, faCodepen, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function footer() {
    return (
        <footer className="footer">
            <div className="media-social">
                <span className="github">
                    <a href="https://github.com/gabrielp-oliveira" target="_blank">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </span>
            <span className="linkedin">
                    <a href="https://www.linkedin.com/in/gabriel-97-oliveira" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </span>

                <span className="codepen">
                    <a href="https://codepen.io/Biel_" target="_blank">
                        <FontAwesomeIcon icon={faCodepen} />
                    </a>
                </span>


            </div>
            {/* <br/> */}
            <span>Developed by Ga<span className="red">b</span>r<span className="red">iel</span> P. Silva</span>
        </footer>
    )
}

export default footer
