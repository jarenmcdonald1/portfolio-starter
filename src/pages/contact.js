import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ContactPage = () => (
  <Layout>
    <Seo title="Contact" />
    <h1>Contact</h1>
    <p>Let's talk</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ContactPage
