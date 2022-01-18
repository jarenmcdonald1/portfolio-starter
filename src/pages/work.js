import * as React from "react"
import { Link, graphql } from "gatsby"
//import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const WorkIndex = ({ data }) => {
  const { posts } = data.projects
  
  return (
  <Layout>
    <Seo title="Work" />
    <h1>Work</h1>
    <p>Samples of previously completed work</p>
    <Link to="/">Go back to the homepage</Link>
    <section className="work-posts-con">
      {posts.map(post => (
        <article key={post.id}>

          <h2>{post.frontmatter.title}</h2>
          <h4>{post.frontmatter.subtitle}</h4> <small>{post.frontmatter.date}</small>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </section>
  </Layout>
)
}

export default WorkIndex

export const pageQuery = graphql`
query MyQuery {
  projects: allMarkdownRemark {
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
      }
      excerpt
      id
    }
  }
}
`
