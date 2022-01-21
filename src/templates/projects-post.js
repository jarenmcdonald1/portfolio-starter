import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout";
import Seo from "../components/seo";

const ProjectPost = ({ data }) => {
    const post = data.markdownRemark

    return (
        <Layout>
            <Seo title={post.frontmatter.title} />

            {/* banner open */}
            <section className="banner-full">
              <GatsbyImage className="indexBannerImg" image={getImage(post.frontmatter.thumbimg)} alt={`${post.frontmatter.thumbimg}`} />
              <div className="container indexBannerCon">
                <div className="row h-100">
                  <div className="col d-flex py-3 justify-content-center align-items-center">
                    <div className="card projectsPageBannerCard mx-auto px-2 py-3 text-center">
                      <h2 className="mb-0">{post.frontmatter.title}</h2>
                      <p className="mb-0">{post.frontmatter.subtitle}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* quick links open */}
            <section className="projectsSample-page-con mb-4 mb-md-5">
                <div className="py-3 px-2 w-100 d-flex flex-column flex-sm-row justify-content-around align-items-center">
                    <div className="projectsSample-details-con">
                        <p className="mb-1">Date</p>
                        <h5 className="mb-0">{post.frontmatter.date}</h5>
                    </div>
                    <div className="projectsSample-details-con">
                        <p className="mb-1">Client</p>
                        <h5 className="mb-0">{post.frontmatter.client}</h5>
                    </div>
                    <div className="projectsSample-details-con">
                        <p className="mb-1">Role</p>
                        <h5 className="mb-0">{post.frontmatter.role}</h5>
                    </div>
                </div>
            </section>

            <section className="container">
                <div className="row">
                    <div className="col">
                        <div dangerouslySetInnerHTML={{ __html: post.html }} />
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default ProjectPost

export const query = graphql`
  query ProjectQuery(
    $slug: String!
    ) {
    markdownRemark(fields: { slug: { eq: $slug } }
      ) {
      html
      id
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