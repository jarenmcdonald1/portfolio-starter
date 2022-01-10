import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({ data }) => {

  return (
  <Layout>
    <Seo title="Home" />
    <section className="banner-full">
    
    </section>
    <h1>Hi people</h1>
     
    <GatsbyImage fluid={data.childImageSharp.fluid} alt="" />
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
  </Layout>
)
}

export const indexQuery = graphql`
  query {
    file(relativePath: { eq: "images/ll-banner.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED)
      }
    }
  }
`

export default IndexPage
