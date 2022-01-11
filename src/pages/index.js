import * as React from "react"
import { graphql, Link, StaticQuery } from "gatsby"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {

  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          social {
            github
          }
        }
      }
    }
  `)

  const social = data.site.siteMetadata?.social

  return (
  <Layout>
    <Seo title="Home" />
    <section className="banner-full">
      <GatsbyImage className="indexBannerImg" image={getImage(data.bannerImg)} alt="..." />
      <div className="container indexBannerCon">
        <div className="row h-100">
          <div className="col d-flex justify-content-center align-items-center">
            <div className="card indexBannerCard mx-auto px-2 py-3">
              <h4>Welcome</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="quicklinksCon">
      <div className="linksCon w-100 d-flex flex-nowrap justify-content-center align-items-center">
        <Link to="/work" alt="...">
          View my work
        </Link>
        <Link to="/contact" alt="...">
          Let's talk
        </Link>
      </div>
    </section>
    <h1>a</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <a src={social?.github}>View github</a>
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

export default IndexPage

export const pageQuery = graphql`
  {
    bannerImg: file(
      relativePath: { eq: "ll-banner.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(
          quality: 100
          layout: FULL_WIDTH
        )
      }
    }
  }
`;
