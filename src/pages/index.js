import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  return (

      <Layout pageTitle="Welcome to vintage guitars">
      <p>Guitars aged like wine</p>
      <StaticImage
        alt="randomized unsplash image!"
        src="https://source.unsplash.com/random/800x600"
      />
      </Layout>
  )
}

export default IndexPage
