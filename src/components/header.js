import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <>
    <header className="container-fluid">
      <div className="row">
        <div className="col mr-auto">
          <h1 className="mb-0">
            <Link className="header-brand" to="/">{siteTitle}</Link>
          </h1>
        </div>
        <div className="col ml-auto d-flex justify-content-end align-items-center">
          <nav className="header-nav">
            <Link to="/about">About</Link>
            <Link to="/work">Work</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </div>
    </header>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
