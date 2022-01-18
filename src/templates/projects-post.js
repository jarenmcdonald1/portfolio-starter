import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

const ProjectPost = ({ data }) => {
    const post = data.markdownRemark

    return (
        <Layout>
            <Seo title={post.frontmatter.title} />
            <div className="header-gap"></div>
            <h1>{post.frontmatter.title}</h1>
            <p>{post.frontmatter.date}</p>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </Layout>
    )
}

export default ProjectPost

export const query = graphql`
  query ProjectQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
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
     html
     timeToRead
     wordCount {
       words
     }
    }
  }
`