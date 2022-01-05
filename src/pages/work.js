import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const WorkIndex = () => (
  <Layout>
    <Seo title="Work" />
    <h1>Work</h1>
    <p>Samples of previously completed work</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default WorkIndex
