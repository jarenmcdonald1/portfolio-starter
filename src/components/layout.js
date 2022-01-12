import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "../styles/main.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          social {
            github
            linkedin
            youtube
          }
        }
      }
    }
  `)

  return (
    <div className="main-con">
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main className="content-con">
        {children}
      </main>
      <Footer 
        siteTitle={data.site.siteMetadata?.title || `Title`}
        githubLink={data.site.siteMetadata?.social.github} 
        linkedinLink={data.site.siteMetadata?.social.linkedin}
        youtubeLink={data.site.siteMetadata?.social.youtube}  
      />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

