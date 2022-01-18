import React from "react";
import { graphql } from "gatsby";

const ProjectPost = ({ data }) => {
    const post = data.markdownRemark

    return (
        <div>
            <h1>{post.frontmatter.title}</h1>
            <p>{post.frontmatter.date}</p>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
    )
}

export default ProjectPost

export const query = graphql`
  query ProjectQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`