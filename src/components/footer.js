import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedin, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'

const Footer = ({ githubLink, youtubeLink, linkedinLink }) => {
  
  return (
  <div className="footer-con pt-3 pb-0">
    <section className="container-fluid">
      <div className="row">
        <div className="col mr-auto d-flex justify-content-center justify-content-sm-start align-items-center">
          <nav className="footer-nav justify-content-around justify-content-sm-start">
            <Link to="/#aboutCon">About</Link>
            <Link to="/work">Work</Link>
            <Link to="/#contactCon">Contact</Link>
          </nav>
        </div>
        <div className="col ml-auto d-flex justify-content-center justify-content-sm-end align-items-center">
          <nav className="footer-nav justify-content-around justify-content-sm-end">
            <a 
              className="icon-links" 
              href={githubLink}
              alt="Click to view my Github profile"
            >
              <FontAwesomeIcon icon={faGithubSquare} title="github logo" />
              <p className="sr-only">Click to view my Github profile</p>
            </a>
            <a className="icon-links" href={youtubeLink} alt="Click to view my YouTube profile">
              <FontAwesomeIcon icon={faYoutubeSquare} title="youtube logo" />
              <p className="sr-only">Click to view my YouTube profile</p>
            </a>
            <a className="icon-links" href={linkedinLink} alt="Click to view my Linkedin profile">
              <FontAwesomeIcon icon={faLinkedin} title="linkedin logo" />
              <p className="sr-only">Click to view my Linkedin profile</p>
            </a>
          </nav>
        </div>
      </div>
    </section>
    <footer className="container-fluid">
      <div className="row">
        <div className="col footer-text">
          <p>© {new Date().getFullYear()}, Built with <a href="https://www.gatsbyjs.com">Gatsby</a></p>
        </div>
      </div>
    </footer>
  </div>
)
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer

