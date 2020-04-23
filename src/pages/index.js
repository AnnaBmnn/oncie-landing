import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import Hero from "../components/hero/hero"
import Content from "../components/content/content"
import CallToAction from "../components/cta/cta"

const IndexPage = () => (
  <Layout>
    <SEO />
    <Hero />
    <Content />
    <CallToAction />
  </Layout>
)

export default IndexPage
