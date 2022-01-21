import React from "react"
import PropTypes from "prop-types"

// Components
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  return (
    <Layout>
        <div className="header-gap"></div>
        <section className="container">
        <div className="row">
            <div className="col">
                <h2 className="">{tagHeader}</h2>
            </div>
        </div>
        <div className="row">
            <div className="col-12">
                <div className="row  work-posts-main-con">
                    {edges.map(({ node }) => {
                        
                    const { slug } = node.fields
                    const { title } = node.frontmatter
                    return (
                        <div className="work-posts-con p-0">
                            <Link to={node.fields.slug} key={node.id} className="workSample-con" alt={`View the ${node.frontmatter.title} project`}>
                            <GatsbyImage className="workSample-thumbImg w-100" image={getImage(node.frontmatter.thumbimg)} alt={`${node.frontmatter.subtitle}`} loading="lazy" objectFit />
                            <div className="workSample-text">
                                <div>
                                <h3 className="mb-1">{node.frontmatter.title}</h3>
                                <p className="mb-0">{node.frontmatter.subtitle}</p>
                                </div>
                            </div>
                            </Link>
                        </div>
                    )
                    })}
                </div>
            </div>
        </div>
        <div className="col-12">
        <Link to="/work">View all projects</Link>
        </div>
        </section>
    </Layout>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            subtitle
            thumbimg {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`