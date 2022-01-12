import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({ data }) => {
  const emailLink = data.site.siteMetadata?.social.emailUrl;

  return (
  <Layout>
    <Seo title="Home" />

    {/* banner open */}
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

    {/* quick links open */}
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

    {/* main body content */}
    <section className="worksamples-con">
      <div className="row">
        
      </div>
    </section>

    {/* contact open */}
    <section className="contact-con container">
      <div className="row">
        <div className="col">
          <h2 className="section-title">Say hi.</h2>
        </div>
      </div>
      <div className="row">
        <div className="col contact-card">
          <div className="card-body">
            <h3 className="pb-3 text-center contact-email-link">
              <a href={`mailto:${emailLink}`} alt="send me an email">{emailLink}</a>
            </h3>
            <p className="card-text">Hello, I'm Jaren</p>
            <p className="card-text">I'm a multi-talented front-end web developer that loves what I do!</p>
            <p className="card-text">Since beginning my journey nearly 11 years ago, I've worked and collaborated with talented people to create unique and impactful marketing solutions. I'm always searching for interesting things to learn, build, and share. I have yet to find a challenge that is too big or small!</p>
            <p className="card-text">Jaren McDonald<br/>Vancouver, Canada</p>
          </div>
        </div>
      </div>
    </section>
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
    site {
      siteMetadata {
        social {
          emailUrl
        }
      }
    }
  }
`;
