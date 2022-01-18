import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <section className="header-section py-1">
    <header className="container-fluid">
      <div className="row">
        <div className="col-12 col-sm-6 mr-auto text-center text-sm-start">
          <h1 className="mb-0">
            <Link className="header-brand" to="/">{siteTitle}</Link>
          </h1>
        </div>
        <div className="col-12 col-sm-6 ml-auto d-flex justify-content-center justify-content-sm-end align-items-center">
          <nav className="w-100 header-nav justify-content-around justify-content-sm-end">
            <Link to="/#aboutCon">About</Link>
            <Link to="/work">Work</Link>
            <Link to="/#contactCon">Contact</Link>
          </nav>
        </div>
      </div>
    </header>
  </section>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
