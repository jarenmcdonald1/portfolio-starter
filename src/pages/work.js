import * as React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const WorkIndex = ({ data }) => {
  const { posts } = data.projects
  
  return (
  <Layout>
    <Seo title="Project Samples" />
    <div className="header-gap"></div>
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="section-title">Work</h1>
          <p>Samples of previously completed work</p>
        </div>
      </div>

    <section className="row work-posts-main-con">
      {posts.map(post => (
        <div className="work-posts-con p-0">
            <Link to={post.fields.slug} key={post.id} className="workSample-con" alt={`View the ${post.frontmatter.title} project`}>
              <GatsbyImage className="workSample-thumbImg w-100" image={getImage(post.frontmatter.thumbimg)} alt={`${post.frontmatter.subtitle}`} loading="lazy" objectFit />
              <div className="workSample-text">
                <div>
                <h3 className="mb-1">{post.frontmatter.title}</h3>
                <p className="mb-0">{post.frontmatter.subtitle}</p>
                </div>
              </div>
            </Link>
        </div>
      ))}
    </section>

    </div>
  </Layout>
)
}

export default WorkIndex

export const pageQuery = graphql`
query MyQuery {
  projects: allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
    posts: nodes {
      frontmatter {
      	date(formatString: "MMM YYYY")
        title
        subtitle
        tags
        thumbimg {
          childImageSharp {
            gatsbyImageData
          }
        }
        client
        role
      }
      excerpt
      id
      fields {
        slug
      }
    }
  }
}
`
