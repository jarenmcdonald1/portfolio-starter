import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhotoVideo, faPenNib, faLaptopCode } from '@fortawesome/free-solid-svg-icons'

const IndexPage = ({ data }) => {
  const emailLink = data.site.siteMetadata?.social.emailUrl;
  const { posts } = data.projects;

  return (
  <Layout>
    <Seo title="Digital Developer and Designer" />

    {/* banner open */}
    <section className="banner-full">
      <GatsbyImage className="indexBannerImg" image={getImage(data.bannerImg)} alt="..." />
      <div className="container indexBannerCon">
        <div className="row h-100">
          <div className="col d-flex py-3 justify-content-center align-items-end align-items-lg-center">
            <div className="card indexBannerCard mx-auto px-2 py-3">
              <h4 className="mb-0">Creating the future with a sense of adventure!</h4>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* quick links open */}
    <section className="quicklinksCon mb-4 mb-md-5">
      <div className="linksCon w-100 d-flex flex-nowrap justify-content-center align-items-center">
        <Link to="/work" alt="...">
          View my work
        </Link>
        <Link to="/contact" alt="...">
          Let's connect
        </Link>
      </div>
    </section>

    {/* project samples open */}
    <section className="worksamples-con container mb-4 mb-md-5 pt-sm-4 pb-sm-5">
    <div className="row">
      <div className="col">
        <h2 className="section-title">Projects</h2>
      </div>
    </div>
    <section className="row">
      {posts.map(post => (
        <div className="col-12 col-sm-4 p-0 px-sm-0">
            <Link to={post.fields.slug} key={post.id} className="workSample-con" alt={`View the ${post.frontmatter.title} project`}>
              <GatsbyImage className="workSample-thumbImg w-100" image={getImage(post.frontmatter.thumbimg)} alt={`${post.frontmatter.subtitle}`} loading="lazy" objectFit />
              <div className="workSample-text">
                <div>
                <h3 className="mb-1">{post.frontmatter.title}</h3>
                <p className="mb-0 d-sm-none d-md-block">{post.frontmatter.subtitle}</p>
                </div>
              </div>
            </Link>
        </div>
      ))}
      <div className="col-12 py-2"><p>View all projects on my <Link to={'/work'} title="Go to the Work page">Work page</Link></p></div>
    </section>
  </section>

    {/* about me open */}
    <section id="aboutCon" className="about-con container mb-4 mb-md-5 pt-sm-4 pb-sm-5">
      <div className="row">
        <div className="col">
          <h2 className="section-title">About me</h2>
        </div>
      </div>
      <div className="row mb-3 mb-md-4">
        <div className="col">
          <GatsbyImage className="aboutmeImg" image={getImage(data.aboutmeImg)} alt="..." />
        </div>
        <div className="col-12 col-md-6 px-4 py-3 d-flex justify-content-center align-items-center">
          <div>
            <h2 className="mb-1 about-intro">Hello, I'm Jaren</h2>
            <h4 className="mb-1">I'm a multi-talented front-end web developer that loves what I do!</h4>
            <p className="mb-1">Since beginning my journey nearly 11 years ago, I've worked and collaborated with talented people to create unique and impactful marketing solutions.</p>
          </div>
        </div>
      </div>
      <div className="row">
      <div className="col-12 col-md-4 mb-3 mb-md-0 px-2 px-sm-4 px-md-1">
          <div className="card aboutmeCards">
            <div className="card-body">
              <h4 className="card-title">Code <FontAwesomeIcon className="titleIcon" icon={faLaptopCode} title="laptop code icon" /></h4>
              <div className="d-flex flex-wrap justify-content-center align-items-center skillsText">
                <p>Git</p>
                <p>HTML5</p>
                <p>CSS3</p>
                <p>SASS/SCSS</p>
                <p>PostCSS</p>
                <p>JavaScript ES6</p>
                <p>Grunt/Gulp</p>
                <p>VueJS</p>
                <p>ReactJS</p>
                <p>NodeJS</p>
                <p>PHP</p>
                <p>mySQL</p>
                <p>Wordpress CMS</p>
                <p>Drupal CMS</p>
                <p>Netlify CMS</p>
                <p>GatsbyJS</p>
                <p>NuxtJS</p>
                <p>Bootstrap 4&5</p>
                <p>TailwindCSS</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 mb-3 mb-md-0 px-2 px-sm-4 px-md-1">
          <div className="card aboutmeCards">
            <div className="card-body">
              <h4 className="card-title">Design <FontAwesomeIcon className="titleIcon" icon={faPenNib} title="design icon" /></h4>
              <div className="d-flex flex-wrap justify-content-center align-items-center skillsText">
                <p>Adobe Acrobat</p>
                <p>Adobe Photoshop</p>
                <p>Adobe Illustrator</p>
                <p>Adobe InDesign</p>
                <p>Adobe XD</p>
                <p>Sketch</p>
                <p>Adobe Lightroom</p>
                <p>Affinity Designer</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 mb-3 mb-md-0 px-2 px-sm-4 px-md-1">
          <div className="card aboutmeCards">
            <div className="card-body">
              <h4 className="card-title">Video <FontAwesomeIcon className="titleIcon" icon={faPhotoVideo} title="videography icon" /></h4>
              <div className="d-flex flex-wrap justify-content-center align-items-center skillsText">
                <p>Event Videography</p>
                <p>Interviews</p>
                <p>Adobe After Effects</p>
                <p>Adobe Premier</p>
                <p>Final Cut Pro X</p>
                <p>Motion 5</p>
                <p>Adobe Media Encoder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* contact open */}
    <section id="contactCon" className="contact-con container pt-sm-4 pb-sm-5">
      <div className="row">
        <div className="col">
          <h2 className="section-title">Say hi!</h2>
        </div>
      </div>
      <div className="row">
        <div className="col contact-card">
          <div className="card-body">
            <h3 className="pb-3 text-center contact-email-link">
              <a href={`mailto:${emailLink}`} alt="send me an email">{emailLink}</a>
            </h3>
            <GatsbyImage className="contactImg" image={getImage(data.contactImg)} alt="..." />
            <p className="card-text">Let's chat!</p>
            <p className="card-text">I'm always searching for interesting things to learn, build, and share. I have yet to find a challenge that is too big or small!</p>
            <p className="card-text">Do you have a new or existing project that could use some fresh creative energy? Just send me an email and we'll get started right away!</p>
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
          placeholder: BLURRED
        )
      }
    }
    aboutmeImg: file(
      relativePath: { eq: "sitting-canyon.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(
          quality: 100
          layout: FULL_WIDTH
          placeholder: BLURRED
        )
      }
    }
    contactImg: file(
      relativePath: { eq: "jaren-profile.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(
          quality: 100
          layout: FULL_WIDTH
          placeholder: BLURRED
        )
      }
    }
    site {
      siteMetadata {
        social {
          emailUrl
        }
      }
    },
    projects: allMarkdownRemark(
      sort: {fields: [frontmatter___date], order: DESC}
      limit: 3
    ) {
      posts: nodes {
        frontmatter {
          date(formatString: "MMM YYYY")
          title
          subtitle
          thumbimg {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
        fields {
          slug
        }
      }
    }
  }
`;
